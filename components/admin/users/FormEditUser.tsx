"use client"

import { AdminUserService } from "@/app/services/users/user.service"
import { IAdminUsers } from "@/interfaces/users.interface"
import { toastify } from "@/libs/toastify"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Checkbox, Label, TextInput } from "flowbite-react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"

export type IFormEditUser = {
  can_affiliate: boolean
  affiliate_id: string
  vip_turn_remain: number
  online_turn_remain: number
  kid_turn_remain: number
}

const schema = yup.object({
  can_affiliate: yup.boolean().required(),
  affiliate_id: yup
    .string()
    .required()
    .when("can_affiliate", {
      is: true,
      then: (schema) =>
        schema.test({
          name: "affiliate_id",
          message: "affiliate_id không được để trống",
          test: (value) => {
            if (!value) return false
            const trimmed = value.trim()
            if (!trimmed) return false
            return true
          },
        }),
      otherwise: (schema) => schema.notRequired(),
    }),
  vip_turn_remain: yup.number().min(0, "Số lượng phải lớn hơn 0").required(),
  online_turn_remain: yup.number().min(0, "Số lượng phải lớn hơn 0").required(),
  kid_turn_remain: yup.number().min(0, "Số lượng phải lớn hơn 0").required(),
})

export const FormEditUser = ({ user }: { user: IAdminUsers }) => {
  const [isLoading, setLoading] = useState(false)
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }
  const router = useRouter()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormEditUser>({
    defaultValues: {
      affiliate_id: user.affiliate_id,
      can_affiliate: user.can_affiliate,
      vip_turn_remain: user.vip_turn_remain,
      online_turn_remain: user.online_turn_remain,
      kid_turn_remain: user.kid_turn_remain,
    },
    resolver: yupResolver(schema),
  })
  const canAffiliate = watch("can_affiliate")

  const onSubmit = async (data: IFormEditUser) => {
    const payload: Partial<IFormEditUser> = {
      vip_turn_remain: data.vip_turn_remain,
      online_turn_remain: data.online_turn_remain,
      kid_turn_remain: data.kid_turn_remain,
      can_affiliate: data.can_affiliate,
    }
    if (data.can_affiliate) {
      payload.affiliate_id = data.affiliate_id
    }
    setLoading(true)
    AdminUserService.editUser(payload, user.id, accessToken)
      .then((res) => {
        toastify({
          type: "success",
          message: "Cập nhật thành công",
        })
        router.push("/admin/users")
      })
      .catch((err) => {
        toastify({
          type: "error",
          message: "Cập nhật thất bại",
        })
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <div className="mb-2 flex items-center gap-2">
          <Checkbox id="affiliate" {...register("can_affiliate")} />
          <Label htmlFor="affiliate" value="Affiliate" />
        </div>
        <TextInput
          disabled={!canAffiliate}
          {...register("affiliate_id")}
          shadow
        />
        {errors.affiliate_id && (
          <span className="text-red-500">{errors.affiliate_id.message}</span>
        )}
      </div>
      <div className="flex w-full gap-2">
        <div className="mb-2 flex w-1/3 flex-col gap-2">
          <Label htmlFor="vip_turn_remain" value="Số lượng xem VIP" />
          <TextInput
            id="vip_turn_remain"
            type="number"
            {...register("vip_turn_remain")}
            shadow
          />
          {errors.vip_turn_remain && (
            <span className="text-red-500">
              {errors.vip_turn_remain.message}
            </span>
          )}
        </div>
        <div className="mb-2 flex w-1/3 flex-col gap-2">
          <Label htmlFor="online_turn_remain" value="Số lượng xem Online Vip" />
          <TextInput
            id="online_turn_remain"
            type="number"
            {...register("online_turn_remain")}
            shadow
          />
          {errors.online_turn_remain && (
            <span className="text-red-500">
              {errors.online_turn_remain.message}
            </span>
          )}
        </div>
        <div className="mb-2 flex w-1/3 flex-col gap-2">
          <Label htmlFor="kid_turn_remain" value="Số lượng xem Vip cho con" />
          <TextInput
            id="kid_turn_remain"
            type="number"
            {...register("kid_turn_remain")}
            shadow
          />
          {errors.kid_turn_remain && (
            <span className="text-red-500">
              {errors.kid_turn_remain.message}
            </span>
          )}
        </div>
      </div>
      <Button type="submit" disabled={isLoading}>
        Save
      </Button>
    </form>
  )
}

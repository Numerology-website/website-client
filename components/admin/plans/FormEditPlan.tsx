"use client"
import { EPlanType, IPlan } from "@/interfaces/plans.interface"
import { Button, Label, Select, TextInput } from "flowbite-react"
import { FC } from "react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { PlanService } from "@/app/services/plans/plans.service"
import { useSession } from "next-auth/react"
import { toastify } from "@/libs/toastify"

export type FormEditPlanProps = {
  name: string
  full_name: string
  price: {
    vnd: number
    usd: number
  }
  discount?: number
  price_after_discount?: {
    vnd: number
    usd: number
  }
  turn: number
  type: EPlanType
  recommend_text?: string
  gift_text?: string
  online_turn?: number
}

const schema = yup.object().shape(
  {
    name: yup.string().required("Vui lòng nhập tên gói"),
    full_name: yup.string().required("Vui lòng nhập tên đầy đủ gói"),
    price: yup.object({
      vnd: yup.number().min(0, "Please").required("Vui lòng nhập giá tiền"),
      usd: yup.number().min(0, "Please").required("Vui lòng nhập giá tiền"),
    }),
    turn: yup
      .number()
      .min(1, "Vui lòng nhập số lượt")
      .required("Vui lòng nhập số lượt"),
    type: yup
      .mixed<EPlanType>()
      .oneOf(Object.values(EPlanType))
      .required("Vui lòng chọn thể loại"),
    recommend_text: yup.string(),
  },
  [["discount", "discount"]],
)

interface IFormEditPlan {
  plan: IPlan
}
export const FormEditPlan: FC<IFormEditPlan> = ({ plan }) => {
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm<FormEditPlanProps>({
    defaultValues: {
      ...plan,
    },
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FormEditPlanProps> = (data) => {
    PlanService.editPlan(plan.id, data, accessToken)
      .then((res) => {
        toastify({
          type: "success",
          message: `Gói ${res.name} đã được cập nhật`,
        })
      })
      .catch((err) => {
        toastify({
          type: "error",
          message: JSON.stringify(err),
        })
      })
  }
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex gap-5">
        <div className="mb-2 w-1/3">
          <Label htmlFor="name" value="Name" />
          <TextInput
            id="name"
            placeholder="Short name"
            {...register("name")}
            helperText={errors.name?.message}
          />
        </div>
        <div className="mb-2 w-1/3">
          <Label htmlFor="fullName" value="Full name" />
          <TextInput
            id="fullName"
            placeholder="Full name"
            {...register("full_name")}
            helperText={errors.full_name?.message}
          />
        </div>
        <div className="mb-2 w-1/6">
          <Label htmlFor="slotNumber" value="Turn Amount" />
          <Controller
            control={control}
            name="turn"
            render={({ field }) => (
              <TextInput
                id="slotNumber"
                placeholder="Vip slot amount"
                type="number"
                {...field}
                onChange={(e) => field.onChange(+e.target.value)}
                helperText={errors.turn?.message}
              />
            )}
          />
        </div>
        <div className="mb-2 w-1/6">
          <Label value="Thể loại" />
          <Select
            id="type"
            placeholder="Chọn thể loại gói ..."
            {...register("type")}
            helperText={errors.type?.message}
          >
            <option value={EPlanType.OWNER}>Cho chính mình</option>
            <option value={EPlanType.KID}>Cho con</option>
          </Select>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="mb-2 w-1/3">
          <Label htmlFor="originPrice" value="Origin price" />
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              name="price.vnd"
              render={({ field }) => (
                <TextInput
                  placeholder="0"
                  type="number"
                  addon="₫"
                  {...field}
                  onChange={(e) => field.onChange(+e.target.value)}
                  helperText={errors.price?.vnd?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="price.usd"
              render={({ field }) => (
                <TextInput
                  placeholder="0"
                  type="number"
                  addon="$"
                  {...field}
                  onChange={(e) => field.onChange(+e.target.value)}
                  helperText={errors.price?.usd?.message}
                />
              )}
            />
          </div>
        </div>
        <div className="mb-2 w-1/3">
          <Label htmlFor="discount" value="Discount (%)" />
          <Controller
            control={control}
            name="discount"
            render={({ field }) => (
              <TextInput
                id="discount"
                placeholder="0"
                type="number"
                {...field}
                onChange={(e) => field.onChange(+e.target.value)}
              />
            )}
          />
        </div>
        <div className="mb-2 w-1/3">
          <Label htmlFor="discountPrice" value="Discount price" />
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              name="price_after_discount.vnd"
              render={({ field }) => (
                <TextInput
                  placeholder="0"
                  type="number"
                  addon="₫"
                  {...field}
                  onChange={(e) => field.onChange(+e.target.value)}
                />
              )}
            />
            <Controller
              control={control}
              name="price_after_discount.usd"
              render={({ field }) => (
                <TextInput
                  placeholder="0"
                  type="number"
                  addon="$"
                  {...field}
                  onChange={(e) => field.onChange(+e.target.value)}
                />
              )}
            />
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="w-1/2">
          <Label value="Marketing text" />
          <TextInput
            placeholder="Được mua nhiều nhất"
            {...register("recommend_text")}
          />
        </div>
        <div className="flex w-1/2 gap-2">
          <div className="w-2/3">
            <Label value="Gift text" />
            <TextInput
              placeholder="Ex: Tặng 1 lượt tra cứu online"
              {...register("gift_text")}
            />
          </div>
          <div>
            <Label value="Online turn amount" />
            <Controller
              control={control}
              name="online_turn"
              render={({ field }) => (
                <TextInput
                  placeholder="0"
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(+e.target.value)}
                />
              )}
            />
          </div>
        </div>
      </div>

      <Button type="submit">Submit</Button>
    </form>
  )
}

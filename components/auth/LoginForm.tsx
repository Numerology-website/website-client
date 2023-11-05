"use client"

import { countryCode, getFlagEmoji } from "@/utils/countryCode"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { signIn } from "next-auth/react"
import { Checkbox } from "flowbite-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { toastify } from "@/libs/toastify"

type LoginFormData = {
  phone_number: string
  password: string
  country_code: string
}

const numberRegex = /^[0-9]*$/
const loginSchema = yup.object({
  phone_number: yup
    .string()
    .matches(numberRegex, "Vui lòng nhập đúng số điện thoại")
    .required("Vui lòng nhập số điện thoại"),
  password: yup.string().required("Vui lòng nhập mật khẩu"),
  country_code: yup.string().required("Vui lòng chọn quốc gia"),
})
export const LoginForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      country_code: "+84",
      phone_number: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  })
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const { phone_number, password, country_code } = data
    const phoneNumber = country_code + phone_number
    signIn("credentials", {
      redirect: false,
      phone_number: phoneNumber,
      password,
      callbackUrl: "/",
    }).then((res) => {
      if (!res)
        return toastify({
          type: "error",
          message: "Có lỗi xảy ra",
        })
      const { ok } = res

      if (ok) {
        toastify({
          type: "success",
          message: "Đăng nhập thành công",
        })
        return router.push("/xem")
      } else {
        toastify({
          type: "error",
          message: "Sai số điện thoại hoặc mật khẩu",
        })
      }
    })
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 text-sm"
      >
        <div className="flex gap-2">
          <div className="w-fit">
            <select
              id="countries"
              className="block w-full rounded-md border bg-auth-input-gray  text-sm text-white"
              style={{ backgroundColor: "rgba(243, 246, 249, 0.36)" }}
              {...register("country_code")}
            >
              <option value="+84">{getFlagEmoji("VN")} - Vietnam +84</option>
              {countryCode.map((country, index) => (
                <option key={index} value={country.dial_code}>
                  {getFlagEmoji(country.code)} - {country.name}{" "}
                  {country.dial_code}
                </option>
              ))}
            </select>
            <p>{errors.country_code?.message}</p>
          </div>

          <div className="w-full">
            <input
              className="text h-10 w-full rounded-md border-0 border-gray-400 bg-auth-input-gray p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
              type={"text"}
              placeholder={"Số điện thoại đăng nhập"}
              {...register("phone_number")}
            />
            <p>{errors.phone_number?.message}</p>
          </div>
        </div>
        <input
          className="text h-10 w-full rounded-md border-0 border-gray-400 bg-auth-input-gray p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
          type={"password"}
          placeholder={"Mật khẩu"}
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <label htmlFor="remember">Ghi nhớ đăng nhập</label>
          </div>
          <div>
            <Link href="/forgot">Quên mật khẩu?</Link>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="rounded-full border border-solid border-gray-400 px-10 py-2 hover:bg-white hover:text-[#3F4254]"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </>
  )
}

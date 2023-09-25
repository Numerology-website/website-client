"use client"

import { signIn } from "next-auth/react"
import { SubmitHandler, useForm } from "react-hook-form"

type LoginFormData = {
  phone_number: string
  password: string
}

export const LoginForm = () => {
  const { register, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      phone_number: "",
      password: "",
    },
  })
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const { phone_number, password } = data
    signIn("credentials", {
      redirect: true,
      phone_number,
      password,
      callbackUrl: "/",
    })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>PhoneNumber</label>
      <input {...register("phone_number")} />
      <label>Password</label>
      <input type="password" {...register("password")} />
      <button type="submit">Login</button>
    </form>
  )
}

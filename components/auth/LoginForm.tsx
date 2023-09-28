"use client";

import { AuthInput } from "@/components/auth/AuthInput";
import { countryCode } from "@/utils/countryCode";
import { signIn } from "next-auth/react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

type LoginFormData = {
  phone_number: string;
  password: string;
  country_code: string;
};

export const LoginForm = () => {
  const { register, handleSubmit, control } = useForm<LoginFormData>({
    defaultValues: {
      country_code: "+84",
      phone_number: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const { phone_number, password } = data;
    signIn("credentials", {
      redirect: true,
      phone_number,
      password,
      callbackUrl: "/",
    });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 text-sm"
    >
      <div className="flex gap-2">
        <Controller
          name="country_code"
          control={control}
          render={({ field }) => (
            <select className="w-1/4" {...field}>
              {countryCode.map((country, index) => (
                <option key={index} value={country.dial_code}>
                  {country.name} {country.dial_code}
                </option>
              ))}
            </select>
          )}
        />

        <AuthInput
          placeholder={"Số điện thoại đăng nhập"}
          {...register("phone_number")}
        />
      </div>
      <AuthInput
        placeholder={"Mật khẩu"}
        {...register("password")}
        type="password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

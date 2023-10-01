"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { countryCode, getFlagEmoji } from "@/utils/countryCode";
import { Checkbox } from "flowbite-react";
import Link from "next/link";
import { AuthService } from "@/app/services/auth/auth.service";
import { toastify } from "@/libs/toastify";
import { useRouter } from "next/navigation";
import { getErrorMessage } from "@/utils/helpers";

interface RegisterFormData {
  country_code: string;
  phone_number: string;
  password: string;
  confirm_password: string;
  confirm_term_of_use: boolean;
  first_name: string;
  last_name: string;
}

const numberRegex = /^[0-9]*$/;
const registerSchema = yup.object({
  phone_number: yup
    .string()
    .matches(numberRegex, "Vui lòng nhập đúng số điện thoại")
    .required("Vui lòng nhập số điện thoại"),
  first_name: yup.string().required("Vui lòng nhập họ"),
  last_name: yup.string().required("Vui lòng nhập tên"),
  password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .min(6, "Mật khẩu phải có 6 ký tự trở lên")
    .max(20, "Mật khẩu không quá 20 ký tự"),
  confirm_password: yup
    .string()
    .test("passwords-match", "Mật khẩu không trùng khớp", function (value) {
      return this.parent.password === value;
    })
    .required("Vui lòng nhập lại mật khẩu"),
  country_code: yup.string().required("Vui lòng chọn quốc gia"),
  confirm_term_of_use: yup
    .boolean()
    .oneOf([true], "Vui lòng đồng ý với điều khoản sử dụng")
    .required("Vui lòng đồng ý với điều khoản sử dụng"),
});
export const RegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
      country_code: "+84",
      phone_number: "",
      password: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
      confirm_term_of_use: false,
    },
    resolver: yupResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    const { phone_number, password, country_code, last_name, first_name } =
      data;
    const phoneNumber = country_code + phone_number;
    try {
      await AuthService.register({
        phone_number: phoneNumber,
        password,
        last_name,
        first_name,
      });
    } catch (error) {
      console.log(error);
      toastify({
        message: getErrorMessage(error),
        type: "error",
      });
    }
  };
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
              className="bg-auth-input-gray block w-full rounded-md border  text-sm text-white"
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
              className="bg-auth-input-gray text h-10 w-full rounded-md border-0 border-gray-400 p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
              type={"text"}
              placeholder={"Số điện thoại nhận mã kích hoạt"}
              {...register("phone_number")}
            />
            <p>{errors.phone_number?.message}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <input
              className="bg-auth-input-gray text h-10 w-full rounded-md border-0 border-gray-400 p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
              type={"text"}
              placeholder={"Họ"}
              {...register("last_name")}
            />
            <p>{errors.last_name?.message}</p>
          </div>
          <div className="w-1/2">
            <input
              className="bg-auth-input-gray text h-10 w-full rounded-md border-0 border-gray-400 p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
              type={"text"}
              placeholder={"Tên"}
              {...register("first_name")}
            />
            <p>{errors.first_name?.message}</p>
          </div>
        </div>
        <div>
          <input
            className="bg-auth-input-gray text h-10 w-full rounded-md border-0 border-gray-400 p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
            type={"password"}
            placeholder={"Mật khẩu mới"}
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </div>
        <div>
          <input
            className="bg-auth-input-gray text h-10 w-full rounded-md border-0 border-gray-400 p-2 px-8 py-4 text-xs !text-white placeholder-white opacity-90"
            type={"password"}
            placeholder={"Nhập lại mật khẩu"}
            {...register("confirm_password")}
          />
          <p>{errors.confirm_password?.message}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="confirm" {...register("confirm_term_of_use")} />
            <label htmlFor="confirm">Tôi đồng ý với điều khoản sử dụng</label>
            <p>{errors.confirm_term_of_use?.message}</p>
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="rounded-full border border-solid border-gray-400 px-10 py-2 hover:bg-white hover:text-[#3F4254]"
          >
            Đăng ký
          </button>
        </div>
      </form>
      <div className="mt-5 flex gap-7 text-xs">
        <p>Bạn đã có tài khoản?</p>
        <Link className="hover:text-gray-400" href="/login">
          Đăng nhập ngay
        </Link>
      </div>
    </>
  );
};

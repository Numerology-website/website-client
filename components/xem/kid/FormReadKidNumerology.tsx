"use client"

import { EGenderType } from "@/utils/constant"
import { addLeadingZero } from "@/utils/helpers"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { SubmitHandler, useForm } from "react-hook-form"
import moment from "moment"
import { TCreateKidNumerologyRecord } from "@/interfaces/kid-numerology-records.interface"
import { KidNumerologyRecordService } from "@/app/services/numerology-records/kid-numerology-records.service"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toastify } from "@/libs/toastify"

const genderList = [
  { name: "Giới tính", value: undefined },
  { name: "Nam", value: EGenderType.Male },
  { name: "Nữ", value: EGenderType.Female },
  { name: "Khác", value: EGenderType.Other },
]

type FormReadKidNumerology = {
  full_name: string
  gender: EGenderType
  dayOfBirth?: string
  monthOfBirth?: string
  yearOfBirth: string
  father_full_name: string
  father_dayOfBirth?: string
  father_monthOfBirth?: string
  father_yearOfBirth: string
  mother_full_name: string
  mother_dayOfBirth?: string
  mother_monthOfBirth?: string
  mother_yearOfBirth: string
}
const schema = yup.object({
  full_name: yup
    .string()
    .required("Họ tên không được để trống")
    .test({
      name: "full_name",
      message: "Vui lòng nhập đúng họ tên",
      test: (value) => {
        if (!value) return false
        return value.split(" ").length >= 2
      },
    }),
  gender: yup
    .mixed<EGenderType>()
    .oneOf(Object.values(EGenderType), "Vui lòng chọn giới tính")
    .required("Vui lòng chọn giới tính"),
  yearOfBirth: yup
    .string()
    .required("Vui lòng nhập năm sinh")
    .test({
      name: "yearOfBirth",
      message: "Vui lòng nhập đúng ngày/tháng/năm sinh",
      test: (value, context) => {
        if (!value) return false
        if (isNaN(Number(value))) return false
        if (Number(value) > moment().year()) return false
        const dayOfBirth = context.parent.dayOfBirth
        const monthOfBirth = context.parent.monthOfBirth
        const yearOfBirth = Number(value)
        const momentDay = moment(
          `${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`,
          "YYYY-MM-DD",
        )
        if (!momentDay.isValid()) return false
        if (!momentDay.isBefore(moment())) return false
        return true
      },
    })
    .test({
      name: "yearOfBirth",
      message: "Đối với người trên 18, vui lòng xem báo cáo thần số học",
      test: (value, context) => {
        if (!value) return false
        if (isNaN(Number(value))) return false
        if (Number(value) > moment().year()) return false
        const dayOfBirth = context.parent.dayOfBirth
        const monthOfBirth = context.parent.monthOfBirth
        const yearOfBirth = Number(value)
        const momentDay = moment(
          `${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`,
          "YYYY-MM-DD",
        )
        if (!momentDay.isValid()) return false
        if (moment().diff(momentDay, "years") >= 18) return false
        return true
      },
    }),
  father_full_name: yup
    .string()
    .required("Họ tên không được để trống")
    .test({
      name: "father_full_name",
      message: "Vui lòng nhập đúng họ tên",
      test: (value) => {
        if (!value) return false
        return value.split(" ").length >= 2
      },
    }),
  father_yearOfBirth: yup
    .string()
    .required("Vui lòng nhập năm sinh")
    .test({
      name: "father_yearOfBirth",
      message: "Vui lòng nhập đúng ngày/tháng/năm sinh",
      test: (value, context) => {
        if (!value) return false
        if (isNaN(Number(value))) return false
        if (Number(value) > moment().year()) return false
        const dayOfBirth = context.parent.father_dayOfBirth
        const monthOfBirth = context.parent.father_monthOfBirth
        const yearOfBirth = Number(value)
        const momentDay = moment(
          `${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`,
          "YYYY-MM-DD",
        )
        if (!momentDay.isValid()) return false
        if (!momentDay.isBefore(moment())) return false
        return true
      },
    }),
  mother_full_name: yup
    .string()
    .required("Họ tên không được để trống")
    .test({
      name: "mother_full_name",
      message: "Vui lòng nhập đúng họ tên",
      test: (value) => {
        if (!value) return false
        return value.split(" ").length >= 2
      },
    }),
  mother_yearOfBirth: yup
    .string()
    .required("Vui lòng nhập năm sinh")
    .test({
      name: "mother_yearOfBirth",
      message: "Vui lòng nhập đúng ngày/tháng/năm sinh",
      test: (value, context) => {
        if (!value) return false
        if (isNaN(Number(value))) return false
        if (Number(value) > moment().year()) return false
        const dayOfBirth = context.parent.mother_dayOfBirth
        const monthOfBirth = context.parent.mother_monthOfBirth
        const yearOfBirth = Number(value)
        const momentDay = moment(
          `${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`,
          "YYYY-MM-DD",
        )
        if (!momentDay.isValid()) return false
        if (!momentDay.isBefore(moment())) return false
        return true
      },
    }),
})

export const FormReadKidNumerology = () => {
  const router = useRouter()
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormReadKidNumerology>({
    defaultValues: {
      full_name: "",
      gender: undefined,
      dayOfBirth: "01",
      monthOfBirth: "01",
      yearOfBirth: "",
      father_full_name: "",
      father_dayOfBirth: "01",
      father_monthOfBirth: "01",
      father_yearOfBirth: "",
      mother_full_name: "",
      mother_dayOfBirth: "01",
      mother_monthOfBirth: "01",
      mother_yearOfBirth: "",
    },
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FormReadKidNumerology> = (data) => {
    const _record: TCreateKidNumerologyRecord = {
      full_name: data.full_name,
      birthday: `${data.yearOfBirth}-${data.monthOfBirth}-${data.dayOfBirth}`,
      gender: data.gender,
      father: {
        full_name: data.father_full_name,
        birthday: `${data.father_yearOfBirth}-${data.father_monthOfBirth}-${data.father_dayOfBirth}`,
      },
      mother: {
        full_name: data.mother_full_name,
        birthday: `${data.mother_yearOfBirth}-${data.mother_monthOfBirth}-${data.mother_dayOfBirth}`,
      },
    }
    KidNumerologyRecordService.postKidNumerologyRecord(_record, accessToken)
      .then(({ expose_id }) => router.push(`/xem/kids/${expose_id}`))
      .catch((err) =>
        toastify({
          message: err,
          type: "error",
        }),
      )
  }
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <p className="font-medium">Họ và tên ngày sinh của con</p>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <input
              type="text"
              className="w-2/3 rounded-lg text-black"
              placeholder="Nhập họ tên khai sinh"
              {...register("full_name")}
            />
            <select
              className="w-1/3 rounded-lg text-black"
              {...register("gender")}
            >
              {genderList.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            {errors.full_name && <p>{errors.full_name.message}</p>}
            {errors.gender && <p>{errors.gender.message}</p>}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <div className="flex w-2/3 gap-1">
              <select
                className="w-1/2 rounded-lg text-black"
                {...register("dayOfBirth")}
              >
                {Array.from(Array(31).keys()).map((item, index) => (
                  <option key={index} value={addLeadingZero(item + 1)}>
                    Ngày {addLeadingZero(item + 1)}
                  </option>
                ))}
              </select>
              <select
                className="w-1/2 rounded-lg text-black"
                {...register("monthOfBirth")}
              >
                {Array.from(Array(12).keys()).map((item, index) => (
                  <option key={index} value={addLeadingZero(item + 1)}>
                    Tháng {addLeadingZero(item + 1)}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              className="w-1/3 rounded-lg text-black"
              placeholder="Năm sinh"
              {...register("yearOfBirth")}
            />
          </div>
          {errors.yearOfBirth && <p>{errors.yearOfBirth.message}</p>}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium">Họ và tên ngày sinh của bố</p>
        <div>
          <input
            type="text"
            className="w-full rounded-lg text-black"
            placeholder="Nhập họ tên của bố"
            {...register("father_full_name")}
          />
          {errors.father_full_name && <p>{errors.father_full_name.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <select
              className="w-1/3 rounded-lg text-black"
              {...register("father_dayOfBirth")}
            >
              {Array.from(Array(31).keys()).map((item, index) => (
                <option key={index} value={addLeadingZero(item + 1)}>
                  Ngày {addLeadingZero(item + 1)}
                </option>
              ))}
            </select>
            <select
              className="w-1/3 rounded-lg text-black"
              {...register("father_monthOfBirth")}
            >
              {Array.from(Array(12).keys()).map((item, index) => (
                <option key={index} value={addLeadingZero(item + 1)}>
                  Tháng {addLeadingZero(item + 1)}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="w-1/3 rounded-lg text-black"
              placeholder="Năm sinh"
              {...register("father_yearOfBirth")}
            />
          </div>
          {errors.father_yearOfBirth && (
            <p>{errors.father_yearOfBirth.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-medium">Họ và tên ngày sinh của mẹ</p>
        <div>
          <input
            type="text"
            className="w-full rounded-lg text-black"
            placeholder="Nhập họ tên của mẹ"
            {...register("mother_full_name")}
          />
          {errors.mother_full_name && <p>{errors.mother_full_name.message}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <select
              className="w-1/3 rounded-lg text-black"
              {...register("mother_dayOfBirth")}
            >
              {Array.from(Array(31).keys()).map((item, index) => (
                <option key={index} value={addLeadingZero(item + 1)}>
                  Ngày {addLeadingZero(item + 1)}
                </option>
              ))}
            </select>
            <select
              className="w-1/3 rounded-lg text-black"
              {...register("mother_monthOfBirth")}
            >
              {Array.from(Array(12).keys()).map((item, index) => (
                <option key={index} value={addLeadingZero(item + 1)}>
                  Tháng {addLeadingZero(item + 1)}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="w-1/3 rounded-lg text-black"
              placeholder="Năm sinh"
              {...register("mother_yearOfBirth")}
            />
          </div>
          {errors.mother_yearOfBirth && (
            <p>{errors.mother_yearOfBirth.message}</p>
          )}
        </div>
      </div>
      <button
        type="submit"
        className="my-5 flex w-full items-center justify-center gap-3 border border-solid border-[#8e2ccc] bg-[#981dd0] px-6 py-2.5 text-lg font-bold text-white hover:cursor-pointer"
      >
        <MagnifyingGlassIcon className="h-5 w-5" />
        <span>Tra cứu</span>
      </button>
    </form>
  )
}

"use client"

import { EGenderType } from "@/utils/constant"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { yupResolver } from "@hookform/resolvers/yup"
import { Checkbox, Label, Textarea } from "flowbite-react"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import * as yup from "yup"
import moment from "moment"
import { toastify } from "@/libs/toastify"

interface IFormReadNumerology {
  full_name: string
  nickname?: string
  gender: string
  dayOfBirth?: number
  monthOfBirth?: number
  yearOfBirth: string
  partner?: {
    full_name: string
    dayOfBirth: number
    monthOfBirth: number
    yearOfBirth: number
  }
  phoneNumbers?: string
  hasPartner?: boolean
  hasPhoneNumber?: boolean
}

const schema = yup.object({
  full_name: yup
    .string()
    .required("Vui lòng nhập họ tên")
    .test({
      name: "full_name",
      message: "Vui lòng nhập đúng họ tên",
      test: (value) => {
        if (!value) return false
        return value.split(" ").length >= 2
      },
    }),
  gender: yup
    .string()
    .required("Vui lòng chọn giới tính")
    .test({
      name: "gender",
      message: "Vui lòng chọn giới tính",
      test: (value) => {
        if (!value) return false
        return value !== "Giới tính"
      },
    }),
  yearOfBirth: yup
    .string()
    .required("Vui lòng nhập năm sinh")
    .test({
      name: "yearOfBirth",
      message: "Vui lòng nhập đúng ngày/tháng/năm sinh",
      test: (value, context) => {
        if (!value) return false
        if (isNaN(Number(value))) return false
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
    }),
  hasPartner: yup.boolean(),
  hasPhoneNumber: yup.boolean(),
})

export const FormReadNumerology = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormReadNumerology>({
    defaultValues: {
      gender: undefined,
      dayOfBirth: 1,
      monthOfBirth: 1,
      partner: {
        dayOfBirth: 1,
        monthOfBirth: 1,
      },
      hasPartner: false,
      hasPhoneNumber: false,
    },
    resolver: yupResolver(schema),
  })
  const watchHasPartner = watch("hasPartner")
  const watchHasPhoneNumber = watch("hasPhoneNumber")
  const onSubmit: SubmitHandler<IFormReadNumerology> = (data) => {
    const isValid = validateSubmit({
      data,
      watchHasPartner,
      watchHasPhoneNumber,
    })
    if (!isValid) return
    console.log(data)
  }
  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-1">
        <p>Nhập họ tên khai sinh:</p>
        <input
          type="text"
          className="w-full rounded-lg text-black"
          placeholder="Nhập đầy đủ họ tên khai sinh"
          {...register("full_name")}
        />
        {errors.full_name && <span>{errors.full_name.message}</span>}
      </div>
      <div className="flex flex-col">
        <p>Tên thường dùng nếu có (VD: Ngọc Anna, Nhím, ...)</p>
        <div className="flex gap-1">
          <input
            type="text"
            className="w-2/3 rounded-lg text-black"
            placeholder="Nhập tên thường dùng nếu có"
            {...register("nickname")}
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
        <div className="flex gap-1">
          <div className="w-2/3"></div>
          <div className="w-1/3">
            {errors.gender && <span>{errors.gender.message}</span>}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p>Ngày/tháng/năm sinh dương lịch:</p>
        <div className="flex gap-1">
          <div className="flex w-2/3 gap-1">
            <select
              className="w-1/2 rounded-lg text-black"
              {...register("dayOfBirth")}
            >
              {Array.from(Array(31).keys()).map((item, index) => (
                <option key={index} value={item + 1}>
                  Ngày {addLeadingZero(item + 1)}
                </option>
              ))}
            </select>
            <select
              className="w-1/2 rounded-lg text-black"
              {...register("monthOfBirth")}
            >
              {Array.from(Array(12).keys()).map((item, index) => (
                <option key={index} value={item + 1}>
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
        {errors.yearOfBirth && (
          <span className="text-center">{errors.yearOfBirth.message}</span>
        )}
      </div>
      <div className="flex flex-col gap-2 rounded-md border border-solid border-white p-2">
        <div className="flex items-center gap-1">
          <Checkbox id="relationship" {...register("hasPartner")} />
          <Label htmlFor="relationship" className="text-white">
            Xem tương hợp tình duyên, hôn nhân
          </Label>
        </div>
        {watchHasPartner && (
          <>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                className="w-full rounded-lg text-black"
                placeholder="Nhập họ tên người yêu/vợ/chồng"
                {...register("partner.full_name")}
              />
            </div>
            <div className="flex flex-col">
              <div className="flex gap-1">
                <div className="flex w-2/3 gap-1">
                  <select
                    className="w-1/2 rounded-lg text-black"
                    {...register("partner.dayOfBirth")}
                  >
                    {Array.from(Array(31).keys()).map((item, index) => (
                      <option key={index} value={item + 1}>
                        Ngày {addLeadingZero(item + 1)}
                      </option>
                    ))}
                  </select>
                  <select
                    className="w-1/2 rounded-lg text-black"
                    {...register("partner.monthOfBirth")}
                  >
                    {Array.from(Array(12).keys()).map((item, index) => (
                      <option key={index} value={item + 1}>
                        Tháng {addLeadingZero(item + 1)}
                      </option>
                    ))}
                  </select>
                </div>
                <input
                  type="text"
                  className="w-1/3 rounded-lg text-black"
                  placeholder="Năm sinh"
                  {...register("partner.yearOfBirth")}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col gap-2 rounded-md border border-solid border-white p-2">
        <div className="flex items-center gap-1">
          <Checkbox id="phoneNumber" {...register("hasPhoneNumber")} />
          <Label htmlFor="phoneNumber" className="text-white">
            Xem số điện thoại hợp
          </Label>
        </div>
        {watchHasPhoneNumber && (
          <Textarea
            rows={3}
            placeholder="Nhập tối đa 5 điện thoại, mỗi dòng là 1 số"
            {...register("phoneNumbers")}
          />
        )}
      </div>
      <button
        type="submit"
        className="mt-2 flex justify-center whitespace-normal rounded-sm bg-[#ab1d88] px-6 py-2.5 text-lg font-bold text-white shadow-[0_0_1px_2px_rgb(255,54,204,35%)]"
      >
        <MagnifyingGlassIcon className="h-6 w-6" />
        <span>Tra cứu</span>
      </button>
    </form>
  )
}

const addLeadingZero = (number: number) => {
  return number < 10 ? `0${number}` : number
}

const genderList = [
  { name: "Giới tính", value: undefined },
  { name: "Nam", value: EGenderType.Male },
  { name: "Nữ", value: EGenderType.Female },
  { name: "Khác", value: EGenderType.Other },
]

const validateSubmit = ({
  data,
  watchHasPartner,
  watchHasPhoneNumber,
}: {
  data: IFormReadNumerology
  watchHasPartner: boolean | undefined
  watchHasPhoneNumber: boolean | undefined
}): boolean => {
  if (watchHasPartner && data.partner) {
    const partner = data.partner
    const { dayOfBirth, monthOfBirth, yearOfBirth } = partner
    if (!yearOfBirth) {
      toastify({
        type: "error",
        message: "Vui lòng nhập năm sinh của người yêu/vợ/chồng",
      })
      return false
    }
    const momentDay = moment(
      `${yearOfBirth}-${monthOfBirth}-${dayOfBirth}`,
      "YYYY-MM-DD",
    )
    if (!momentDay.isValid()) {
      toastify({
        type: "error",
        message:
          "Vui lòng nhập đúng ngày/tháng/năm sinh của người yêu/vợ/chồng",
      })
      return false
    }
    if (!momentDay.isBefore(moment())) {
      toastify({
        type: "error",
        message: "Ngày/tháng/năm sinh của người yêu/vợ/chồng không hợp lệ",
      })
      return false
    }
  }
  if (watchHasPhoneNumber) {
    const phoneNumbers = data.phoneNumbers
      ?.split("\n")
      .filter((item) => item)
      .map((item) => item.trim())

    if (!phoneNumbers || phoneNumbers.length === 0) {
      toastify({
        type: "error",
        message: "Vui lòng nhập số điện thoại",
      })
      return false
    }
    if (phoneNumbers.length > 5) {
      toastify({
        type: "error",
        message: "Vui lòng nhập tối đa 5 số điện thoại",
      })
      return false
    }
    const regex = new RegExp("^[0-9]*$")
    const invalidPhoneNumbers = phoneNumbers.filter((item) => !regex.test(item))
    if (invalidPhoneNumbers.length > 0) {
      toastify({
        type: "error",
        message: "Số điện thoại chỉ chấp nhận các kí tự số",
      })
      return false
    }
  }
  return true
}

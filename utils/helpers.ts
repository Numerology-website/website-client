import clsx, { ClassValue } from "clsx"
import { twMerge } from "tw-merge"

export const getErrorMessage = (error: any): string => {
  if (error.name === "AxiosError") {
    return error.message
  }
  if (typeof error === "string") {
    return error
  }
  console.error(error)
  return "Something went wrong"
}

export const cn = (...classes: ClassValue[]) => {
  return twMerge(clsx(classes))
}
export const getFormatNumber = (
  number: number,
  currency: "USD" | "VND" = "VND",
) => {
  let numberFormatType = "vi-VN"
  if (currency === "USD") {
    numberFormatType = "en-US"
  }
  return new Intl.NumberFormat(numberFormatType, {
    style: "currency",
    currency,
  }).format(number)
}

export const addLeadingZero = (number: number) => {
  return number < 10 ? `0${number}` : number
}

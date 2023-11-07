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

export const shortenWithCommas = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text
  }

  const lastSpaceIndex = text.lastIndexOf(" ", maxLength)

  if (lastSpaceIndex > 0) {
    return text.substring(0, lastSpaceIndex) + "..."
  } else {
    return text.substring(0, maxLength) + "..."
  }
}

// const shortenWithCommas =(text: string, maxLength: number) => {
//   if (text.length <= maxLength) {
//     return text
//   }

//   const shortenedText = text.substring(0, maxLength)
//   const lastCommaIndex = shortenedText.lastIndexOf(",")
//   return lastCommaIndex > 0
//     ? shortenedText.substring(0, lastCommaIndex) + "..."
//     : shortenedText + "..."
// }

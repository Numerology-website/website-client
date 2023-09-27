import clsx, { ClassValue } from "clsx";
import { twMerge } from "tw-merge";

export const getErrorMessage = (error: any): string => {
  if (error.name === "AxiosError") {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  console.error(error);
  return "Something went wrong";
};

export const cn = (...classes: ClassValue[]) => {
  return twMerge(clsx(classes));
};

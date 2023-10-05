import { TypeOptions, toast } from "react-toastify"

interface IToastifyProps {
  message: string
  type?: TypeOptions
}
export const toastify = ({ message, type = "success" }: IToastifyProps) => {
  toast(message, {
    position: "top-right",
    autoClose: 3000,
    closeOnClick: true,
    type,
  })
}

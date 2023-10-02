import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm"
import { LogoAuth } from "@/components/auth/LogoAuth"
import { authOptions } from "@/utils/authOptions"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function ForgotPassword() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect("/")
  }
  return (
    <div className="flex max-w-[450px] flex-col items-center gap-2">
      <LogoAuth />
      <h1 className="text-center text-xl">Quên mật khẩu?</h1>
      <p className="text-xs text-gray-400">Nhập số điện thoại của bạn</p>
      <ForgotPasswordForm />
    </div>
  )
}

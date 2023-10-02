import { LogoAuth } from "@/components/auth/LogoAuth"
import { RegisterForm } from "@/components/auth/RegisterForm"
import { authOptions } from "@/utils/authOptions"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function RegisterPage() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect("/")
  }
  return (
    <div className="flex max-w-[450px] flex-col items-center gap-2">
      <LogoAuth />
      <h1>Đăng ký tài khoản mới</h1>
      <p className="text-xs">
        Tạo tài khoản để tra cứu đầy đủ toàn bộ các chỉ số
      </p>
      <RegisterForm />
    </div>
  )
}

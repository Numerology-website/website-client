import { LoginForm } from "@/components/auth/LoginForm"
import { authOptions } from "@/utils/authOptions"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function LoginPage() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect("/")
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  )
}

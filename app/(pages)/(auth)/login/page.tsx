import { LoginForm } from "@/components/auth/LoginForm";
import { LogoAuth } from "@/components/auth/LogoAuth";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex max-w-[450px] flex-col items-center gap-2">
      <LogoAuth />
      <h2>Đăng nhập</h2>
      <LoginForm />
      <div className="mt-5 flex gap-7">
        <p className="text-[#f7d51a]">Bạn chưa có tài khoản?</p>
        <Link href="/register" className="hover:text-gray-400">
          Đăng ký ngay
        </Link>
      </div>
    </div>
  );
}

import { LoginForm } from "@/components/auth/LoginForm";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex max-w-[450px] flex-col items-center gap-2">
      <div className="flex gap-2">
        <Image
          src={"/assets/images/logo-white.png"}
          alt="transparent logo"
          width={45}
          height={25}
        />
        <h1>Tra cứu thần số học</h1>
      </div>
      <h2>Đăng nhập</h2>
      <LoginForm />
    </div>
  );
}

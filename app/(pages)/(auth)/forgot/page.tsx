import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";
import { LogoAuth } from "@/components/auth/LogoAuth";

export default function ForgotPassword() {
  return (
    <div className="flex max-w-[450px] flex-col items-center gap-2">
      <LogoAuth />
      <h1 className="text-center text-xl">Quên mật khẩu?</h1>
      <p className="text-xs text-gray-400">Nhập số điện thoại của bạn</p>
      <ForgotPasswordForm />
    </div>
  );
}

import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import NextAuthSessionProvider from "@/app/providers/NextAuthSessionProvider"
import ToastifyProvider from "@/app/providers/ToastifyProvider"
import "react-toastify/dist/ReactToastify.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title:
    "Tra Cứu Thần Số Học - Hệ Thống Tra Cứu Chỉ Số Thần Số Học Số #1 Việt Nam",
  description:
    "Công cụ tra cứu thần số học online miễn phí được thầy Louis Nguyễn nghiên cứu sáng lập. Xem thần số học theo tên và ngày sinh của bạn ngay tại đây nhé!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>
        <body className={inter.className}>
          <ToastifyProvider>{children}</ToastifyProvider>
        </body>
      </NextAuthSessionProvider>
    </html>
  )
}

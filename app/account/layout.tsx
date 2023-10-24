import { ReadNumerologyFooter } from "@/components/xem/Footer"
import { NavbarWithDropdown } from "@/components/xem/Navbar"
import { authOptions } from "@/utils/authOptions"
import { Metadata } from "next"
import { getServerSession } from "next-auth"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <>
      <NavbarWithDropdown session={session} />
      {children}
      <ReadNumerologyFooter />
    </>
  )
}

export const metadata: Metadata = {
  title: "Xem báo cáo thần số học",
  description:
    "Công cụ tra cứu thần số học online miễn phí được thầy Louis Nguyễn nghiên cứu sáng lập. Xem thần số học theo tên và ngày sinh của bạn ngay tại đây nhé!",
}

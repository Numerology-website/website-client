import { Navbar } from "@/components/admin/layout/navbar/Navbar"
import { Sidebar } from "@/components/admin/layout/sidebar/Sidebar"
import { authOptions } from "@/utils/authOptions"
import { ERole } from "@/utils/constant"
import { getServerSession } from "next-auth"
import { notFound, redirect } from "next/navigation"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect("/login")
  }
  if (session.user.role !== ERole.Admin) {
    notFound()
  }

  return (
    <div className="flex min-h-screen bg-slate-200">
      <Sidebar />
      <Navbar />
      <div className="w-full pl-64 pt-16">
        <section className="mx-10 mt-5 h-full">{children}</section>
      </div>
    </div>
  )
}

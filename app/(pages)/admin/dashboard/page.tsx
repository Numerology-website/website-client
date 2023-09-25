import { authOptions } from "@/utils/authOptions"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function AdminDashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
    </div>
  )
}

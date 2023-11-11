"use client"

import { AdminUserService } from "@/app/services/users/user.service"
import { IAdminUsers } from "@/interfaces/users.interface"
import { toastify } from "@/libs/toastify"
import { cn } from "@/utils/helpers"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export const ButtonDeactivateUser = ({ user }: { user: IAdminUsers }) => {
  const [processing, setProcessing] = useState(false)
  const router = useRouter()
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }
  const isActive = !user.deleted_at
  const className = isActive
    ? "bg-red-500 hover:bg-red-600"
    : "bg-emerald-500 hover:bg-emerald-600"
  const classNameDefault = "rounded px-2 py-1 text-white"
  const onClick = () => {
    if (!accessToken) return
    const confirm = window.confirm(
      `Are you sure you want to ${isActive ? "block" : "unblock"} this user?`,
    )
    if (!confirm) return
    if (isActive) {
      AdminUserService.deleteUser(user.id, accessToken)
        .then(() => {
          toastify({
            type: "success",
            message: "User blocked successfully",
          })
          router.push("/admin/users")
        })
        .finally(() => {
          setProcessing(false)
        })
    } else {
      AdminUserService.activeUser(user.id, accessToken)
        .then(() => {
          toastify({
            type: "success",
            message: "User unblocked successfully",
          })
          router.push("/admin/users")
        })
        .finally(() => {
          setProcessing(false)
        })
    }
  }
  return (
    <button
      type="button"
      className={cn(classNameDefault, className)}
      onClick={onClick}
      disabled={processing}
    >
      {isActive ? "Block User" : "Unblock User"}
    </button>
  )
}

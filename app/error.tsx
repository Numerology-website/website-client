"use client"

import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function Error() {
  const router = useRouter()
  const { data: session } = useSession()
  if (session) {
    signOut()
  }
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <button
          onClick={() => {
            signOut()
            router.push("/")
          }}
          className="hover:underline"
        >
          Có lỗi xảy ra. Vui lòng ấn vào đây để quay lại trang chủ.
        </button>
      </div>
    </div>
  )
}

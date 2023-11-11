"use client"

import { signOut } from "next-auth/react"

export default function Error() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <button onClick={() => signOut()} className="hover:underline">
          Có lỗi xảy ra. Vui lòng ấn vào đây để quay lại trang chủ.
        </button>
      </div>
    </div>
  )
}

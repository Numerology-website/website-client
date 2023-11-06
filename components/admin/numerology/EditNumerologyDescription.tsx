"use client"

import { NumerologyService } from "@/app/services/numerology/numerology.service"
import { INumerology } from "@/interfaces/numerology.interface"
import { toastify } from "@/libs/toastify"
import { useSession } from "next-auth/react"
import dynamic from "next/dynamic"
import { useState } from "react"

const Editor = dynamic(() => import("@/components/common/Editor"), {
  ssr: false,
})

export const EditNumerologyDescription = ({
  document,
}: {
  document: INumerology
}) => {
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }
  const [value, setValue] = useState(document.description)
  const [disabled, setDisabled] = useState(false)
  const editDescription = () => {
    setDisabled(!disabled)
    NumerologyService.updateDescription(document.id, value, accessToken)
      .then((res) =>
        toastify({
          message: res.message,
        }),
      )
      .catch((e) =>
        toastify({
          message: e,
          type: "error",
        }),
      )
  }
  return (
    <>
      <div className="rounded-lg bg-white p-2">
        <h3>Description</h3>
        <Editor value={value} onChange={setValue} />
        <button
          className="btn btn-primary float-right mt-3 px-2 py-1"
          onClick={editDescription}
        >
          Save
        </button>
      </div>
    </>
  )
}

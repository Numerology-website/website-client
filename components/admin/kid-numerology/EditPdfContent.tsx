"use client"

import { KidNumerologyService } from "@/app/services/numerology/kid-numerology.service"
import { NumerologyService } from "@/app/services/numerology/numerology.service"
import { toastify } from "@/libs/toastify"
import { useSession } from "next-auth/react"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Editor = dynamic(() => import("@/components/common/Editor"), {
  ssr: false,
})
export const EditPdfContent = ({
  vipPdf = false,
  kidNumerology = false,
  pdf,
  numerologyId,
}: {
  vipPdf?: boolean
  kidNumerology?: boolean
  pdf: string
  numerologyId: string
}) => {
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }
  const router = useRouter()
  const [content, setContent] = useState(pdf)
  const [loading, setLoading] = useState(false)
  const onSave = () => {
    setLoading(true)
    if (kidNumerology) {
      return KidNumerologyService.updatePdfContent({
        content,
        vipPdf,
        accessToken,
        numerologyId,
      })
        .then(() => {
          toastify({
            message: "Saved",
          })
          router.push(`/admin/kid-numerology/${numerologyId}`)
        })
        .catch((err) =>
          toastify({
            message: JSON.stringify(err),
            type: "error",
          }),
        )
        .finally(() => setLoading(false))
    }
    return NumerologyService.updatePdfContent({
      content,
      vipPdf,
      accessToken,
      numerologyId,
    })
      .then(() => {
        toastify({
          message: "Saved",
        })
        router.push(`/admin/numerology/${numerologyId}`)
      })
      .catch((err) =>
        toastify({
          message: JSON.stringify(err),
          type: "error",
        }),
      )
      .finally(() => setLoading(false))
  }
  return (
    <>
      <Editor value={content} onChange={setContent} />
      <button disabled={loading} onClick={onSave} className="btn btn-primary">
        Save
      </button>
    </>
  )
}

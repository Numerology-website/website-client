"use client"

import { KidNumerologyService } from "@/app/services/numerology/kid-numerology.service"
import { TKidNumerologyInteract } from "@/interfaces/kid-numerology.interface"
import { toastify } from "@/libs/toastify"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import { useSession } from "next-auth/react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { useState } from "react"

const Editor = dynamic(() => import("@/components/common/Editor"), {
  ssr: false,
})
export const EditKidNumerologyRelation = ({
  relation,
  type,
  numerologyId,
}: {
  relation: TKidNumerologyInteract
  type: "match" | "against"
  numerologyId: string
}) => {
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }
  const title = type === "match" ? "Hợp với các số: " : "Đối đầu với các số: "
  const [fatherContent, setFatherContent] = useState(relation.fatherContent)
  const [motherContent, setMotherContent] = useState(relation.motherContent)
  const [loading, setLoading] = useState(false)
  const editKidNumerologyContent = () => {
    if (!fatherContent)
      return toastify({
        type: "error",
        message: "Vui lòng nhập lời diễn giải của cha",
      })
    if (!motherContent)
      return toastify({
        type: "error",
        message: "Vui lòng nhập lời diễn giải của mẹ",
      })

    setLoading(true)
    const content = {
      fatherContent,
      motherContent,
    }
    KidNumerologyService.updateRelationContent(
      numerologyId,
      type,
      content,
      accessToken,
    )
      .then((res) => toastify({ type: "success", message: res.message }))
      .catch((err) => toastify({ type: "error", message: err }))
      .finally(() => setLoading(false))
  }
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white p-2">
      <div className="mb-5 flex items-center gap-5">
        <Link href={`/admin/kid-numerology/${numerologyId}`}>
          <ArrowLeftIcon className="h-6 w-6 text-gray-500" />
        </Link>
        <h3>
          {title}
          {relation.number.join(", ")}
        </h3>
      </div>

      <div>
        <span>Lời diễn giải cho cha:</span>
        <Editor value={fatherContent} onChange={setFatherContent} />
      </div>
      <div>
        <span>Lời diễn giải cho mẹ:</span>
        <Editor value={motherContent} onChange={setMotherContent} />
      </div>

      <button
        className="btn btn-primary mt-3 w-full px-2 py-1"
        onClick={editKidNumerologyContent}
        disabled={loading}
      >
        Save
      </button>
    </div>
  )
}

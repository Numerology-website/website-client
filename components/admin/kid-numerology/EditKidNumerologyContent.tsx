"use client"
import { KidNumerologyService } from "@/app/services/numerology/kid-numerology.service"
import { TKidNumerology } from "@/interfaces/kid-numerology.interface"
import { toastify } from "@/libs/toastify"
import { useSession } from "next-auth/react"
import dynamic from "next/dynamic"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Editor = dynamic(() => import("@/components/common/Editor"), {
  ssr: false,
})

export const EditKidNumerologyContent = ({
  content,
  numerologyId,
}: {
  content: TKidNumerology["contents"][0]
  numerologyId: string
}) => {
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }

  const router = useRouter()
  const [title, setTitle] = useState(content.title)
  const [description, setDescription] = useState(content.description)
  const [value, setValue] = useState(content.value)
  const [isLoading, setIsLoading] = useState(false)

  const onClick = () => {
    const isValid = validate()
    if (!isValid) return
    setIsLoading(true)
    KidNumerologyService.updateContent({
      numerologyId,
      blockOrder: content.blockOrder,
      description,
      value,
      accessToken,
      title,
    })
      .then(() => router.push(`/admin/kid-numerology/${numerologyId}`))
      .catch((e) =>
        toastify({
          type: "error",
          message: JSON.stringify(e),
        }),
      )
      .finally(() => setIsLoading(false))
  }

  const validate = (): boolean => {
    const trimmedTitle = title.trim()
    const trimmedValue = value.trim()
    if (!trimmedTitle) {
      toastify({
        type: "error",
        message: "Title is required",
      })
      return false
    }
    if (!trimmedValue) {
      toastify({
        type: "error",
        message: "Content is required",
      })
      return false
    }
    return true
  }
  return (
    <>
      <div>
        <span>Title</span>
        <Editor value={title} onChange={setTitle} />
      </div>
      <div>
        <span>Description</span>
        <Editor value={description} onChange={setDescription} />
      </div>
      <div>
        <span>Content</span>
        <Editor value={value} onChange={setValue} />
      </div>
      <button
        className="btn btn-primary"
        onClick={onClick}
        disabled={isLoading}
      >
        Save
      </button>
    </>
  )
}

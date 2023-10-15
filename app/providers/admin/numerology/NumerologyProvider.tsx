"use client"

import {
  INumerology,
  INumerologyContent,
} from "@/interfaces/numerology.interface"
import { toastify } from "@/libs/toastify"
import { PostAPI } from "@/utils/fetch"
import { useSession } from "next-auth/react"
import { createContext, useState } from "react"

interface INumerologyContext {
  contents: INumerologyContent[]
  saveContents: () => void
  addNewContent: () => void
  updateContent: (content: INumerologyContent) => void
  deleteContent: (content: INumerologyContent) => void
}
export const NumerologyContext = createContext<INumerologyContext>({
  contents: [],
  saveContents: () => {},
  addNewContent: () => {},
  updateContent: () => {},
  deleteContent: () => {},
})

export const NumerologyProvider = ({
  children,
  initContents,
  id,
}: {
  children: React.ReactNode
  initContents: INumerologyContent[]
  id: string
}) => {
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }
  const [contents, setContents] = useState<INumerologyContent[]>(initContents)
  const addNewContent = () => {
    setContents([
      ...contents,
      {
        title: "New section",
        description: "New description",
        blockOrder: contents.length + 1,
        value: "<p>New content</p>",
      },
    ])
  }
  const updateContent = (content: INumerologyContent) => {
    const updateContentBlockOrder = content.blockOrder
    const updateContentIndex = contents.findIndex(
      (item) => item.blockOrder === updateContentBlockOrder,
    )
    if (updateContentIndex === -1) {
      return setContents([...contents, content])
    } else {
      const newContents = [...contents]
      newContents[updateContentIndex] = content
      return setContents(newContents)
    }
  }
  const saveContents = async () => {
    const newNumerology = await PostAPI<INumerology>({
      method: "PATCH",
      url: "/admin/numerology/" + id,
      body: { contents },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    if (newNumerology) {
      setContents(newNumerology.contents)
      toastify({
        type: "success",
        message: `Numerology ${newNumerology.number} updated`,
      })
    }
  }
  const deleteContent = (content: INumerologyContent) => {
    setContents(
      contents.filter((item) => item.blockOrder !== content.blockOrder),
    )
  }
  return (
    <NumerologyContext.Provider
      value={{
        saveContents,
        contents,
        addNewContent,
        updateContent,
        deleteContent,
      }}
    >
      {children}
    </NumerologyContext.Provider>
  )
}

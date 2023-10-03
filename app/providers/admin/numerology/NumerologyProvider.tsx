"use client"

import { INumerologyContent } from "@/interfaces/numerology.service"
import { createContext, useState } from "react"

interface INumerologyContext {
  contents: INumerologyContent[]
  editContent: (content: INumerologyContent) => void
}
export const NumerologyContext = createContext<INumerologyContext>({
  contents: [],
  editContent: (content: INumerologyContent) => {},
})

export const NumerologyProvider = ({
  children,
  initContents,
}: {
  children: React.ReactNode
  initContents: INumerologyContent[]
}) => {
  const [contents, setContents] = useState<INumerologyContent[]>(initContents)
  const editContent = (content: INumerologyContent) => {
    console.log(content)
  }
  return (
    <NumerologyContext.Provider value={{ editContent, contents }}>
      {children}
    </NumerologyContext.Provider>
  )
}

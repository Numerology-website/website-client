"use client"

import { NumerologyContext } from "@/app/providers/admin/numerology/NumerologyProvider"
import { useContext } from "react"
import { EditNumerologySectionItem } from "./EditNumerologySectionItem"

export const EditNumerologySection = () => {
  const { contents } = useContext(NumerologyContext)
  return (
    <>
      {contents.map((content, index) => (
        <EditNumerologySectionItem key={index} content={content} />
      ))}
    </>
  )
}

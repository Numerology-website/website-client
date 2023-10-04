"use client"

import { INumerologyContent } from "@/interfaces/numerology.service"
import { EditNumerologySection } from "./EditNumerologySection"
import { NumerologyProvider } from "@/app/providers/admin/numerology/NumerologyProvider"

interface IEditSectionProps {
  contents: INumerologyContent[]
  id: string
}
export const EditNumerology = ({ contents, id }: IEditSectionProps) => {
  return (
    <NumerologyProvider initContents={contents} id={id}>
      <EditNumerologySection />
    </NumerologyProvider>
  )
}

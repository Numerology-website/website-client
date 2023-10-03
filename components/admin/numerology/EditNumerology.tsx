"use client"

import { INumerologyContent } from "@/interfaces/numerology.service"
import { EditNumerologySection } from "./EditNumerologySection"
import { NumerologyProvider } from "@/app/providers/admin/numerology/NumerologyProvider"

interface IEditSectionProps {
  contents: INumerologyContent[]
}
export const EditNumerology = ({ contents }: IEditSectionProps) => {
  return (
    <NumerologyProvider initContents={contents}>
      <EditNumerologySection />
    </NumerologyProvider>
  )
}

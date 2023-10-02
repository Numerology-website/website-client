"use client"

import { INumerologyContent } from "@/interfaces/numerology.service"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import InlineEditor from "@ckeditor/ckeditor5-build-inline"

interface IEditSectionProps {
  value: INumerologyContent["value"]
}
export const EditSection = ({ value }: IEditSectionProps) => {
  return (
    <>
      <CKEditor editor={InlineEditor} data={value} />
    </>
  )
}

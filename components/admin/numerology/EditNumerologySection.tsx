"use client"

import { NumerologyContext } from "@/app/providers/admin/numerology/NumerologyProvider"
import { useContext } from "react"
import { EditNumerologySectionItem } from "./EditNumerologySectionItem"
import {
  ArrowDownOnSquareIcon,
  DocumentPlusIcon,
} from "@heroicons/react/24/outline"

export const EditNumerologySection = () => {
  const { contents, addNewContent, saveContents } =
    useContext(NumerologyContext)
  return (
    <>
      {contents.map((content, index) => (
        <EditNumerologySectionItem key={index} content={content} />
      ))}

      <div className="flex items-center justify-center gap-10">
        <button
          type="button"
          onClick={() => addNewContent()}
          className="btn btn-add flex gap-2"
        >
          <DocumentPlusIcon className="h-6 w-6 text-white" /> Add new section
        </button>
        <button
          type="button"
          onClick={() => saveContents()}
          className="btn btn-primary flex gap-2"
        >
          <ArrowDownOnSquareIcon className="h-6 w-6 text-white" />
          Save
        </button>
      </div>
    </>
  )
}

"use client"

import { NumerologyContext } from "@/app/providers/admin/numerology/NumerologyProvider"
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline"
import { useContext } from "react"
import { EditNumerologySectionItem } from "./EditNumerologySectionItem"
import { NumerologyTitleConstant } from "@/components/admin/numerology/NumerologyTitleConstant"

export const EditNumerologySection = () => {
  const { contents, saveContents } = useContext(NumerologyContext)
  return (
    <>
      {NumerologyTitleConstant.map((section, index) => (
        <EditNumerologySectionItem
          key={index}
          content={contents[index]}
          index={index}
          title={section.title}
        />
      ))}

      <div className="flex items-center justify-center gap-10">
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

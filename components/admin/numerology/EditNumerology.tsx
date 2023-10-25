// "use client"

import { INumerologyContent } from "@/interfaces/numerology.interface"
import { EditNumerologySection } from "./EditNumerologySection"
import { NumerologyProvider } from "@/app/providers/admin/numerology/NumerologyProvider"
import { NumerologyTitleConstant } from "@/components/admin/numerology/NumerologyTitleConstant"
import Link from "next/link"

interface IEditSectionProps {
  // contents: INumerologyContent[]
  id: string
}
// export const EditNumerology = ({ contents, id }: IEditSectionProps) => {
//   return (
//     <NumerologyProvider initContents={contents} id={id}>
//       <EditNumerologySection />
//     </NumerologyProvider>
//   )
// }

export const EditNumerology = ({ id }: IEditSectionProps) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white p-2">
      {NumerologyTitleConstant.map((number, index) => (
        <Link
          href={`/admin/numerology/${id}/${index}`}
          key={index}
          className="hover:underline"
        >
          {index + 1}. {number.tableOfContentTitle}
        </Link>
      ))}
    </div>
  )
}

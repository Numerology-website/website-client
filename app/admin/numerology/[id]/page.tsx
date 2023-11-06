import { NumerologyService } from "@/app/services/numerology/numerology.service"
import { EditNumerology } from "@/components/admin/numerology/EditNumerology"
import { EditNumerologyDescription } from "@/components/admin/numerology/EditNumerologyDescription"
import Link from "next/link"

interface INumerologyDocumentPage {
  params: {
    id: string
  }
}
export default async function NumerologyDocument({
  params,
}: INumerologyDocumentPage) {
  const numerologyDocument = await NumerologyService.getNumerologyById(
    params.id,
  )
  return (
    <section className="flex flex-col gap-5 p-2">
      <div className="rounded-lg bg-white p-2">
        <h1>Thần số học số {numerologyDocument.number}</h1>
        <p className="text-xs">
          Created by: {"  "}
          {numerologyDocument.created_by?.last_name || "unknown"}
        </p>
      </div>
      <EditNumerologyDescription document={numerologyDocument} />
      <EditNumerology
        // contents={numerologyDocument.contents}
        id={numerologyDocument.id}
      />
      <div className="rounded-lg bg-white p-2">
        <div className="flex justify-between">
          <h3 className="border-b border-solid border-gray-100">
            Sửa file pdf
          </h3>
        </div>
        <div className="my-2 flex flex-col gap-2 border-b border-solid border-gray-100">
          <Link
            href={`/admin/numerology/${numerologyDocument.id}/free-pdf`}
            className="hover:underline"
          >
            1. File pdf miễn phí
          </Link>
          <Link
            href={`/admin/numerology/${numerologyDocument.id}/paid-pdf`}
            className="hover:underline"
          >
            2. File pdf trả phí
          </Link>
        </div>
      </div>
    </section>
  )
}

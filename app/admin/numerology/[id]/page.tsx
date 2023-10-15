import { NumerologyService } from "@/app/services/numerology/numerology.service"
import { EditNumerology } from "@/components/admin/numerology/EditNumerology"

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
      <EditNumerology
        // contents={numerologyDocument.contents}
        id={numerologyDocument.id}
      />
    </section>
  )
}

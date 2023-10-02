import { NumerologyService } from "@/app/services/numerology/numerology.service"
import { EditSection } from "@/components/admin/numerology/EditSection"

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
    <section>
      <h1>Thần số học số {numerologyDocument.number}</h1>
      <p className="text-xs">
        Created by: {"  "}
        {numerologyDocument.created_by?.last_name || "unknown"}
      </p>

      {numerologyDocument.contents.map((content, index) => (
        <div key={index}>
          <EditSection value={content.title} />
          <EditSection value={content.description || ""} />
          <EditSection value={content.value} />
        </div>
      ))}
    </section>
  )
}

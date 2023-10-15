import { NumerologyService } from "@/app/services/numerology/numerology.service"
import { EditContent } from "@/components/admin/numerology/section/EditContent"

interface EditNumerologySectionProps {
  params: {
    id: string
    sectionNumber: string
  }
}
export default async function EditNumerologySection({
  params,
}: EditNumerologySectionProps) {
  const sectionNumber = parseInt(params.sectionNumber)
  const content = await NumerologyService.getNumerologyContentById(
    params.id,
    sectionNumber,
  )
  return (
    <EditContent
      content={content}
      sectionNumber={sectionNumber}
      numerologyId={params.id}
    />
  )
}

import { KidNumerologyService } from "@/app/services/numerology/kid-numerology.service"
import { EditKidNumerologyRelation } from "@/components/admin/kid-numerology/EditKidNumerologyRelation"

type EditKidNumerologySectionPageProps = {
  params: {
    id: string
  }
}
export default async function EditMatchNumerology({
  params,
}: EditKidNumerologySectionPageProps) {
  const { id } = params
  const document = await KidNumerologyService.getOne(params.id)

  return (
    <EditKidNumerologyRelation
      type={"match"}
      relation={document.matchNumerology}
      numerologyId={id}
    />
  )
}

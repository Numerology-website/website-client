import { KidNumerologyService } from "@/app/services/numerology/kid-numerology.service"
import { EditKidNumerologyRelation } from "@/components/admin/kid-numerology/EditKidNumerologyRelation"

type EditKidNumerologySectionPageProps = {
  params: {
    id: string
    slug: "match" | "against" | string
  }
}
export default async function EditKidNumerologySectionPage({
  params,
}: EditKidNumerologySectionPageProps) {
  const { slug, id } = params
  const document = await KidNumerologyService.getOne(params.id)

  if (slug === "match" || slug === "against") {
    const relation =
      slug === "match" ? document.matchNumerology : document.againstNumerology
    return (
      <EditKidNumerologyRelation
        type={slug}
        relation={relation}
        numerologyId={id}
      />
    )
  }
  return <>hello</>
}

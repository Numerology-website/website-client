import { KidNumerologyService } from "@/app/services/numerology/kid-numerology.service"
import { EditKidNumerologyContent } from "@/components/admin/kid-numerology/EditKidNumerologyContent"
import { EditKidNumerologyRelation } from "@/components/admin/kid-numerology/EditKidNumerologyRelation"
import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { notFound } from "next/navigation"

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
  const blockOrder = parseInt(slug)
  if (isNaN(blockOrder)) return notFound()
  const content = document.contents.find(
    (content) => content.blockOrder === blockOrder,
  )
  if (!content) return notFound()
  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white p-2">
      <div className="flex items-center gap-5 border-b border-solid border-gray-300 pb-5">
        <Link href={`/admin/kid-numerology/${id}`}>
          <ArrowLeftIcon className="h-6 w-6 text-gray-500" />
        </Link>
        <h3>{content.tableOfContentTitle}</h3>
      </div>
      <EditKidNumerologyContent content={content} numerologyId={id} />
    </div>
  )
}

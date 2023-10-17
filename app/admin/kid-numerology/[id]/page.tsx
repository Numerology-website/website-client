import { KidNumerologyService } from "@/app/services/numerology/kid-numerology.service"
import { EditKidNumerologyDescription } from "@/components/admin/kid-numerology/EditKidNumerologyDescription"
import Link from "next/link"

type EditKidNumerologyPageProps = {
  params: {
    id: string
  }
}
export default async function EditKidNumerologyPage({
  params,
}: EditKidNumerologyPageProps) {
  const document = await KidNumerologyService.getOne(params.id)
  return (
    <section className="flex flex-col gap-5 p-2">
      <div className="rounded-lg bg-white p-2">
        <h1>Thần số học cho con số {document.number}</h1>
        <p className="text-xs">
          Created by: {"  "}
          {document.created_by?.last_name || "unknown"}
        </p>
      </div>
      <EditKidNumerologyDescription document={document} />
      <div className="rounded-lg bg-white p-2">
        <h3 className="border-b border-solid border-gray-100">
          Sửa số tương hợp/đối đầu
        </h3>
        <div className="my-2 flex flex-col gap-2 border-b border-solid border-gray-100">
          <Link
            href={`/admin/kid-numerology/${document.id}/match`}
            className="hover:underline"
          >
            Số tương hợp: {document.matchNumerology.number.join(", ")}
          </Link>
          <Link
            href={`/admin/kid-numerology/${document.id}/against`}
            className="hover:underline"
          >
            Số đối đầu: {document.againstNumerology.number.join(", ")}
          </Link>
        </div>
      </div>
    </section>
  )
}

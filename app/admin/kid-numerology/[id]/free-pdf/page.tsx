import { KidNumerologyService } from "@/app/services/numerology/kid-numerology.service"
import { EditPdfContent } from "@/components/admin/kid-numerology/EditPdfContent"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

type EditFreePDFPageProps = {
  params: {
    id: string
  }
}
export default async function EditFreePDFPage({
  params,
}: EditFreePDFPageProps) {
  const document = await KidNumerologyService.getOne(params.id)

  return (
    <div className="flex flex-col gap-2 rounded-lg bg-white p-2">
      <div className="flex items-center gap-5 border-b border-solid border-gray-300 pb-5">
        <Link href={`/admin/kid-numerology/${params.id}`}>
          <ArrowLeftIcon className="h-6 w-6 text-gray-500" />
        </Link>
        <h3>Free PDF</h3>
      </div>
      <EditPdfContent pdf={document.free_pdf} numerologyId={params.id} />
    </div>
  )
}

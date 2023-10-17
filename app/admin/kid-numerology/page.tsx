import { KidNumerologyService } from "@/app/services/numerology/kid-numerology.service"
import { TableKidNumerology } from "@/components/admin/kid-numerology/TableKidNumerology"

export default async function KidNumerologyPage() {
  const documents = await KidNumerologyService.getAll()
  return (
    <>
      <TableKidNumerology documents={documents} />
    </>
  )
}

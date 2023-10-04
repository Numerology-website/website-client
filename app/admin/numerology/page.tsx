import { NumerologyService } from "@/app/services/numerology/numerology.service"
import { TableNumerology } from "@/components/admin/numerology/TableNumerology"

export default async function NumerologyPanel() {
  const numerologyDocuments = await NumerologyService.getAllNumerology()
  return (
    <>
      <TableNumerology documents={numerologyDocuments} />
    </>
  )
}

import { NumerologyService } from "@/app/services/numerology/numerology.service"

export default async function NumerologyPanel() {
  const res = await NumerologyService.getAllNumerology()
  console.log(res)
  return <div>NumerologyPanel</div>
}

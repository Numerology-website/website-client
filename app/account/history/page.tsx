import { NumerologyRecordService } from "@/app/services/numerology-records/numerology-records.service"
import LookupHistory from "@/components/account/history/LookupHistory"
export default async function History() {
  const readNumerologyHistory =
    await NumerologyRecordService.getReadNumerologyHistory()
  console.log(readNumerologyHistory)

  return (
    <>
      <LookupHistory documents={readNumerologyHistory.items} />
    </>
  )
}

import { NumerologyRecordService } from "@/app/services/numerology-records/numerology-records.service"
import { NumerologyData } from "@/components/xem/result/NumerologyData"
import { ReadyRenderResult } from "@/components/xem/result/ReadyRenderResult"
interface ReaderResultPageProps {
  params: {
    id: string
  }
}
export default async function ReaderResultPage({
  params,
}: ReaderResultPageProps) {
  const record = await NumerologyRecordService.getReadNumerologyById(params.id)
  const { is_read } = record
  return (
    <section className="min-h-screen bg-galaxy-pattern">
      {!is_read && (
        <ReadyRenderResult record={record}>
          <NumerologyData record={record} />
        </ReadyRenderResult>
      )}
      {is_read && <NumerologyData record={record} />}
    </section>
  )
}

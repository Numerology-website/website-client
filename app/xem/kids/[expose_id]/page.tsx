import { KidNumerologyRecordService } from "@/app/services/numerology-records/kid-numerology-records.service"
import { KidNumerologyData } from "@/components/xem/kid/result/KidNumerologyData"
import { ReadyRenderKidResult } from "@/components/xem/kid/result/ReadyRenderKidResult"
interface ReaderResultPageProps {
  params: {
    expose_id: string
  }
}
export default async function ReaderKidResultPage({
  params,
}: ReaderResultPageProps) {
  const record = await KidNumerologyRecordService.getReadKidNumerologyById(
    params.expose_id,
  )
  const { is_read } = record
  return (
    <section className="min-h-screen px-2">
      {!is_read && (
        <ReadyRenderKidResult record={record}>
          <KidNumerologyData record={record} />
        </ReadyRenderKidResult>
      )}
      {is_read && <KidNumerologyData record={record} />}
    </section>
  )
}

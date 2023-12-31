import { NumerologyRecordService } from "@/app/services/numerology-records/numerology-records.service"
import { ButtonShowModalPdf } from "@/components/xem/ButtonShowModalPdf"
import { ENumerologyRecordPlanType } from "@/interfaces/numerology-records.interface"
import { authOptions } from "@/utils/authOptions"
import { EyeIcon } from "@heroicons/react/24/outline"
import moment from "moment"
import { getServerSession } from "next-auth"

export const ListReadNumerologyHistory = async () => {
  const session = await getServerSession(authOptions)
  if (!Boolean(session)) return <></>
  const { total, items: records } =
    await NumerologyRecordService.getReadNumerologyHistory()
  if (!Boolean(total)) return <></>
  return (
    <div className="max-h-[450px] w-full overflow-y-scroll bg-white p-2">
      <table className="w-full border border-solid border-[#dee2e6] text-center text-black">
        <thead className="bg-[#bee5eb]">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Lịch sử tra cứu
            </th>
            <th scope="col" className="px-6 py-3">
              PDF báo cáo
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <tr key={index} className="border-b hover:bg-slate-50">
              <td>{index + 1}</td>
              <td>
                <div className="flex flex-col">
                  <b>
                    {item.full_name} -{" "}
                    {moment(item.birthday).format("DD/MM/YYYY")}
                  </b>
                  <i>
                    Thời gian:{" "}
                    {moment(item.created_at).format("YYYY-MM-DD hh:mm:ss")}
                  </i>
                  <span>
                    Loại tra:{" "}
                    <b className="text-red-600">{translate(item.plan)}</b>
                  </span>
                </div>
              </td>
              <td>
                <ButtonShowModalPdf url={item.pdf_url} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const translate = (key: string) => {
  switch (key) {
    case ENumerologyRecordPlanType.Free:
      return "Miễn phí"
    case ENumerologyRecordPlanType.Vip:
      return "Vip"
    case ENumerologyRecordPlanType.OnlineVip:
      return "Xem online"
    default:
      return key
  }
}

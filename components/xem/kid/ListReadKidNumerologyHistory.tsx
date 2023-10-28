import { KidNumerologyRecordService } from "@/app/services/numerology-records/kid-numerology-records.service"
import { EKidNumerologyPlan } from "@/interfaces/kid-numerology.interface"
import { authOptions } from "@/utils/authOptions"
import moment from "moment"
import { getServerSession } from "next-auth"
import Link from "next/link"

export const ListReadKidNumerologyHistory = async () => {
  const session = await getServerSession(authOptions)
  if (!Boolean(session)) return <></>
  const { total, items: records } =
    await KidNumerologyRecordService.getReadKidNumerologyHistory()
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
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <tr key={index} className="border-b hover:bg-slate-50">
              <td>{index + 1}</td>
              <td>
                <div className="flex flex-col">
                  <Link
                    href={"/xem/kids/" + item.expose_id}
                    className="font-bold hover:underline"
                  >
                    {item.full_name} -{" "}
                    {moment(item.birthday).format("DD/MM/YYYY")}
                  </Link>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const translate = (key: string) => {
  switch (key) {
    case EKidNumerologyPlan.Free:
      return "Miễn phí"
    case EKidNumerologyPlan.Vip:
      return "Vip"
    default:
      return key
  }
}

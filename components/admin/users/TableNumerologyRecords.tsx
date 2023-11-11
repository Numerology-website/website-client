import { TKidNumerologyRecord } from "@/interfaces/kid-numerology-records.interface"
import { TNumerologyRecord } from "@/interfaces/numerology-records.interface"
import moment from "moment"
import Link from "next/link"

type TableNumerologyRecordsProps =
  | {
      isKidRecords?: true
      records: TKidNumerologyRecord[]
    }
  | {
      isKidRecords?: false
      records: TNumerologyRecord[]
    }
export const TableNumerologyRecords = ({
  isKidRecords = false,
  records,
}: TableNumerologyRecordsProps) => {
  const baseUrlReadNumerology = isKidRecords ? "/xem/kids/" : "/xem/"
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <span className="mb-2">
        {isKidRecords
          ? "Lịch sử tra cứu thần số cho con"
          : "Lịch sử tra cứu thần số học"}
      </span>
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Tên
            </th>
            <th scope="col" className="px-6 py-3">
              Ngày sinh
            </th>
            <th scope="col" className="px-6 py-3">
              Loại
            </th>
            <th scope="col" className="px-6 py-3">
              Ngày tạo
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr
              key={index}
              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                <Link
                  href={baseUrlReadNumerology + record.expose_id}
                  className="hover:underline"
                  target="_blank"
                >
                  {record.full_name}
                </Link>
              </th>
              <td className="px-6 py-4">
                {moment(record.birthday).format("DD/MM/YYYY")}
              </td>
              <td className="px-6 py-4">{record.plan}</td>
              <td className="px-6 py-4">
                {moment(record.created_at).format("hh:mm DD/MM/YYYY")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

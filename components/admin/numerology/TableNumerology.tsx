import { INumerology } from "@/interfaces/numerology.service"
import Link from "next/link"

interface ITableNumerology {
  documents: INumerology[]
}
export const TableNumerology = ({ documents }: ITableNumerology) => {
  console.log(documents)
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Thần số học số
            </th>
            <th scope="col" className="px-6 py-3">
              Tạo bởi
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document, index) => (
            <tr
              key={index}
              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                Số {document.number}
              </th>
              <td className="px-6 py-4">
                {document.created_by?.last_name || "unknown"}
              </td>
              <td className="px-6 py-4 text-right">
                <Link
                  href={`/admin/numerology/` + document.id}
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import { PlanService } from "@/app/services/plans/plans.service"
import { getFormatNumber } from "@/utils/helpers"
import { PlusIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default async function AdminPlanPage() {
  const { items: plans } = await PlanService.getPlans()
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              FullName
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Discount
            </th>
            <th scope="col" className="px-6 py-3">
              Sale Price
            </th>
            <th scope="col" className="px-6 py-3">
              <Link href={"/admin/plans/create"} className="float-right">
                <PlusIcon className="h-6 w-6" />
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {plans.map((plan, index) => (
            <tr
              key={index}
              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                {plan.full_name}
              </th>
              <td className="px-6 py-4">
                {getFormatNumber(plan.price.vnd)} /{" "}
                {getFormatNumber(plan.price.usd, "USD")}
              </td>
              <td className="px-6 py-4">{plan.discount}%</td>
              <td className="px-6 py-4">
                {getFormatNumber(plan.price_after_discount.vnd)} /{" "}
                {getFormatNumber(plan.price_after_discount.usd, "USD")}
              </td>
              <td className="px-6 py-4 text-right">
                <Link
                  href={`/admin/plans/` + plan.id}
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

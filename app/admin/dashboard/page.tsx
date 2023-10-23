import { AdminTransactionService } from "@/app/services/transactions/admin.transaction.service"
import { TableTransaction } from "@/components/admin/dashboard/TableTransaction"

export default async function AdminDashboard() {
  const [kidTransactions, adultTransactions] = await Promise.all([
    AdminTransactionService.getKidTransactions(),
    AdminTransactionService.getAdultTransactions(),
  ])
  return (
    <div className="flex flex-col gap-10">
      <TableTransaction transactions={kidTransactions.items} />
      <TableTransaction transactions={adultTransactions.items} />
    </div>
  )
}

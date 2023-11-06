import VipPriceList from "@/components/account/purchased/VipPriceList"
import FormOrder from "@/components/account/purchased/FormOder"
import { TransactionService } from "@/app/services/transactions/transaction.service"
import { ETransactionStatus } from "@/interfaces/transactions.interface"
import TableMyTransaction from "@/components/account/purchase/TableMyTransaction"
export default async function Purchased() {
  const response = await TransactionService.getMyTransactions(
    ETransactionStatus.ACTIVE,
  )

  return (
    <>
      <div className="mx-auto my-[15px] w-full max-w-[99%] md:max-w-[1230px]">
        {response.items.length === 0 ? (
          <div className="mb-[30px] mt-5 text-center text-sm font-bold text-[#dc3545]">
            Bạn chưa có đơn mua thành công nào!
          </div>
        ) : (
          <TableMyTransaction documents={response.items} />
        )}

        <div className=" flex  justify-center rounded-lg bg-[#f5f5f5] p-[10px] ">
          <FormOrder />
        </div>
        <div className="mt-5 ">
          <div className="my-1 text-center text-base font-bold text-[#dc3545]">
            BẢNG GIÁ VIP
          </div>
          <div className="my-1 text-center text-sm font-bold text-[#28a745]">
            Chú ý: 1 lượt VIP = Tra cứu cho 1 người toàn bộ hơn 26 chỉ số cùng
            luận giải chi tiết + file PDF.
          </div>
          <VipPriceList />
        </div>
      </div>
    </>
  )
}

"use client"
import { CopyTextButton } from "@/components/xem/CopyTextButton"
import { TTransaction } from "@/interfaces/transactions.interface"
import { Table } from "flowbite-react"
import moment from "moment"
import Link from "next/link"
import { GiPlainCircle, GiCancel } from "react-icons/gi"
import { getFormatNumber } from "@/utils/helpers"
import { TransactionService } from "@/app/services/transactions/transaction.service"
import { useSession } from "next-auth/react"
import { toastify } from "@/libs/toastify"
interface ITableTransaction {
  documents: TTransaction[]
}

export default function TableMyTransaction({ documents }: ITableTransaction) {
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }
  const handleCancelOrder = (transactionId: string) => {
    if (window.confirm("Bạn có chắc chắn muốn hủy đơn này?")) {
      TransactionService.abortTransaction(transactionId, accessToken)
        .then(() =>
          toastify({
            message: "Hủy đơn thành công",
          }),
        )
        .catch((err) =>
          toastify({
            message: JSON.stringify(err),
            type: "error",
          }),
        )
    } else {
    }
  }
  return (
    <>
      <div className="my-[10px]">
        <Table className="">
          <Table.Head>
            <Table.HeadCell className="bg-[#86cfda] text-center">
              {" "}
              BẠN ĐÃ ĐẶT MUA
            </Table.HeadCell>
            <Table.HeadCell className="w-[10%] bg-[#86cfda] text-center">
              {" "}
              GIÁ
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y text-black">
            {documents.map((item, index) => (
              <Table.Row
                key={index + 1}
                className=" bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap p-3 text-sm font-medium dark:text-white">
                  <div className="mb-1">
                    Mã đơn: <b className="mr-2">{item.invoice_id}</b>
                    <CopyTextButton text={item.invoice_id} />
                  </div>
                  <div className="mb-1">
                    Gói: <b>{item.plan.full_name}</b>
                  </div>
                  <div className="mb-1">
                    Thời gian:{" "}
                    <em>
                      {moment(item.created_at).format("YYYY-MM-DD hh:mm:ss")}
                    </em>
                  </div>
                  <div className="mb-1">
                    Trạng thái:{" "}
                    <span
                      className={
                        item.status === "ACTIVE"
                          ? "text-green-500"
                          : "text-red-600"
                      }
                    >
                      {item.status === "ACTIVE"
                        ? "Đã thanh toán"
                        : "Chưa thanh toán"}
                    </span>
                  </div>
                  <div className="mb-1">
                    Thời gian kích hoạt:{" "}
                    {item.status === "ACTIVE" ? (
                      <em>
                        {moment(item.updated_at).format("YYYY-MM-DD hh:mm:ss")}
                      </em>
                    ) : (
                      <span>Ngay lập tức sau khi chuyển khoản</span>
                    )}
                  </div>
                  <div className="mb-1 flex">
                    Người hỗ trợ:{" "}
                    <Link
                      className=" flex flex-row text-blue-500"
                      href="https://zalo.me/0962984269"
                    >
                      <div className=" mx-1 mt-[0.2rem] text-green-400">
                        <GiPlainCircle />
                      </div>
                      <p> Đang online</p>
                    </Link>
                  </div>
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap p-3 font-medium dark:text-white">
                  <div className="flex w-full flex-col justify-center text-center">
                    <b>
                      {item.currency === "VND"
                        ? getFormatNumber(item.plan.price_after_discount.vnd)
                        : getFormatNumber(
                            item.plan.price_after_discount.usd,
                            "USD",
                          )}
                    </b>
                    {item.status === "ACTIVE" ? (
                      <></>
                    ) : (
                      <span
                        onClick={() => handleCancelOrder(item.id)}
                        className="mt-5 flex w-full cursor-pointer justify-center text-xs text-red-600"
                      >
                        <div className="mr-1 mt-[0.15rem]">
                          <GiCancel />
                        </div>
                        <p> Hủy mua</p>
                      </span>
                    )}
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}

"use client"

import { AdminTransactionService } from "@/app/services/transactions/admin.transaction.service"
import {
  ETransactionStatus,
  TTransaction,
} from "@/interfaces/transactions.interface"
import { toastify } from "@/libs/toastify"
import { getFormatNumber } from "@/utils/helpers"
import { Table } from "flowbite-react"
import { useSession } from "next-auth/react"
import { useState } from "react"

export const TableTransaction = ({
  transactions: allTransactions,
}: {
  transactions: TTransaction[]
}) => {
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }
  const [transactions, setTransactions] = useState(allTransactions)
  const [isLoading, setIsLoading] = useState(false)
  const confirmTransaction = async (transactionId: TTransaction["id"]) => {
    setIsLoading(true)
    AdminTransactionService.confirmTransaction(transactionId, accessToken)
      .then((res) =>
        setTransactions(
          transactions.map((transaction) => {
            if (transaction.id === transactionId) {
              return res
            }
            return transaction
          }),
        ),
      )
      .catch((err) =>
        toastify({
          type: "error",
          message: JSON.stringify(err),
        }),
      )
      .finally(() => setIsLoading(false))
  }
  const cancelTransaction = async (transactionId: TTransaction["id"]) => {
    setIsLoading(true)
    AdminTransactionService.cancelTransaction(transactionId, accessToken)
      .then((res) =>
        setTransactions(
          transactions.map((transaction) => {
            if (transaction.id === transactionId) {
              return res
            }
            return transaction
          }),
        ),
      )
      .catch((err) =>
        toastify({
          type: "error",
          message: JSON.stringify(err),
        }),
      )
      .finally(() => setIsLoading(false))
  }
  return (
    <Table striped hoverable>
      <Table.Head>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Tên gói</Table.HeadCell>
        <Table.HeadCell>Khách hàng</Table.HeadCell>
        <Table.HeadCell>Giá tiền</Table.HeadCell>
        <Table.HeadCell></Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {transactions.map((transaction) => (
          <Table.Row key={transaction.invoice_id}>
            <Table.Cell>{transaction.invoice_id}</Table.Cell>
            <Table.Cell>{transaction.plan.full_name}</Table.Cell>
            <Table.Cell>
              {transaction.customer.last_name}
              <br />
              {transaction.customer.phone_number}
            </Table.Cell>
            <Table.Cell>
              {getFormatNumber(transaction.plan.price_after_discount.vnd)}
              <br />
              hoặc
              <br />
              {getFormatNumber(
                transaction.plan.price_after_discount.usd,
                "USD",
              )}
            </Table.Cell>
            <Table.Cell>
              {transaction.status === ETransactionStatus.PENDING && (
                <button
                  className="btn btn-add"
                  onClick={() => confirmTransaction(transaction.id)}
                  disabled={isLoading}
                >
                  Xác nhận
                </button>
              )}
              {transaction.status === ETransactionStatus.CANCELLED && (
                <button
                  className="btn btn-add"
                  onClick={() => confirmTransaction(transaction.id)}
                  disabled={isLoading}
                >
                  Xác nhận lại
                </button>
              )}
              {transaction.status === ETransactionStatus.ACTIVE && (
                <button
                  className="btn btn-danger"
                  onClick={() => cancelTransaction(transaction.id)}
                  disabled={isLoading}
                >
                  Huỷ
                </button>
              )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

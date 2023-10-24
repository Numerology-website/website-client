import {
  ETransactionCurrency,
  ETransactionStatus,
  TTransaction,
} from "@/interfaces/transactions.interface"
import { GetAPI, PostAPI } from "@/utils/fetch"

export const TransactionService = {
  async getMyTransactions(status?: ETransactionStatus) {
    let url = `/transactions`
    if (status) {
      url += `?status=${status}`
    }
    const response = await GetAPI<{ total: number; items: TTransaction[] }>(
      `/transactions`,
    )
    return response
  },
  async createTransaction(
    plan_id: string,
    currencyType: ETransactionCurrency,
    accessToken: string,
  ) {
    try {
      return await PostAPI<TTransaction>({
        url: `/transactions`,
        body: {
          plan: plan_id,
          currency: currencyType,
        },
        accessToken,
      })
    } catch (error) {}
  },
}

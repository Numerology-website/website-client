import { TTransaction } from "@/interfaces/transactions.interface"
import { GetAPI, PostAPI } from "@/utils/fetch"

export const AdminTransactionService = {
  async getKidTransactions() {
    return await GetAPI<{ total: number; items: TTransaction[] }>(
      "/admin/transactions?type=kid",
    )
  },
  async getAdultTransactions() {
    return await GetAPI<{ total: number; items: TTransaction[] }>(
      "/admin/transactions?type=owner",
    )
  },
  async confirmTransaction(id: string, accessToken: string) {
    try {
      return await PostAPI<TTransaction>({
        url: `/admin/transactions/${id}/confirm`,
        accessToken,
        method: "PATCH",
      })
    } catch (error) {
      throw error
    }
  },
  async cancelTransaction(id: string, accessToken: string) {
    try {
      return await PostAPI<TTransaction>({
        url: `/admin/transactions/${id}/cancel`,
        accessToken,
        method: "PATCH",
      })
    } catch (error) {
      throw error
    }
  },
}

import {
  TCreateNumerologyRecord,
  TNumerologyRecord,
} from "@/interfaces/numerology-records.interface"
import { GetAPI, PostAPI } from "@/utils/fetch"

export const NumerologyRecordService = {
  async postNumerologyRecord(
    numerologyRecord: TCreateNumerologyRecord,
    accessToken: string,
  ) {
    return await PostAPI<TNumerologyRecord>({
      url: "/numerology-records",
      body: numerologyRecord,
      accessToken,
    })
  },
  async guestPostNumerologyRecord(numerologyRecord: TCreateNumerologyRecord) {
    return await PostAPI<TNumerologyRecord>({
      body: numerologyRecord,
      url: "/numerology-records/anonymous",
    })
  },
  async getReadNumerologyHistory() {
    const response = await GetAPI<{
      total: number
      items: TNumerologyRecord[]
    }>("/numerology-records/my")
    return response
  },
  async getReadNumerologyById(id: string) {
    const response = await GetAPI<TNumerologyRecord>(
      `/numerology-records/${id}`,
    )
    return response
  },
  async setReadNumerologyRecord(expose_id: string) {
    const response = await PostAPI<TNumerologyRecord>({
      url: `/numerology-records/${expose_id}/read`,
    })
    return response
  },
}

export const AdminNumerologyRecordService = {
  async getAllRecords({ user_id }: { user_id?: string }) {
    let url = "/admin/numerology-records"
    if (user_id) {
      url += "?user_id=" + user_id
    }
    const response = await GetAPI<{
      total: number
      items: TNumerologyRecord[]
    }>(url)
    return response
  },
}

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

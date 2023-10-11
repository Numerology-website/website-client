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
}

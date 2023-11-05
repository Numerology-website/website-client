import {
  TCreateKidNumerologyRecord,
  TKidNumerologyRecord,
} from "@/interfaces/kid-numerology-records.interface"
import { GetAPI, PostAPI } from "@/utils/fetch"

export const KidNumerologyRecordService = {
  async postKidNumerologyRecord(
    numerologyRecord: TCreateKidNumerologyRecord,
    accessToken: string,
  ) {
    if (!accessToken) {
      return await PostAPI<{ expose_id: string }>({
        url: "/kid-numerology-records/anonymous",
        body: numerologyRecord,
      })
    }
    return await PostAPI<{ expose_id: string }>({
      url: "/kid-numerology-records",
      body: numerologyRecord,
      accessToken,
    })
  },
  async guestPostKidNumerologyRecord(
    numerologyRecord: TCreateKidNumerologyRecord,
  ) {
    return await PostAPI<{ expose_id: string }>({
      body: numerologyRecord,
      url: "/kid-numerology-records/anonymous",
    })
  },
  async getReadKidNumerologyById(expose_id: string) {
    const response = await GetAPI<TKidNumerologyRecord>(
      `/kid-numerology-records/${expose_id}`,
    )
    return response
  },
  async setReadKidNumerologyRecord(expose_id: string) {
    const response = await PostAPI<{ message: string }>({
      url: `/kid-numerology-records/${expose_id}/read`,
    })
    return response
  },
  async getReadKidNumerologyHistory() {
    const response = await GetAPI<{
      total: number
      items: TKidNumerologyRecord[]
    }>("/kid-numerology-records/my")
    return response
  },
}

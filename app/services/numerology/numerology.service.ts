import { INumerology } from "@/interfaces/numerology.service"
import { GetAPI } from "@/utils/fetch"

export const NumerologyService = {
  async getAllNumerology() {
    const { items } = await GetAPI<{
      count: number
      items: INumerology[]
    }>("/admin/numerology")
    return items
  },
  async getNumerologyById(id: string) {
    const numerologyDocument = await GetAPI<INumerology>(
      `/admin/numerology/${id}`,
    )
    return numerologyDocument
  },
}

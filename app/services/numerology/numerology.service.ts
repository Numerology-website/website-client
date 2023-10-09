import { FormCreateNumerologyProps } from "@/components/admin/numerology/FormCreateNumerology"
import { INumerology } from "@/interfaces/numerology.interface"
import { toastify } from "@/libs/toastify"
import { GetAPI, PostAPI } from "@/utils/fetch"

export const NumerologyService = {
  async getAllNumerology() {
    const { items } = await GetAPI<{
      total: number
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
  async createNumerology(
    numerology: FormCreateNumerologyProps,
    accessToken: string,
  ) {
    try {
      const numerologyDocument = await PostAPI<INumerology>({
        url: "/admin/numerology",
        body: numerology,
        accessToken,
      })
      return numerologyDocument
    } catch (error) {
      toastify({
        type: "error",
        message: error as string,
      })
    }
  },
}

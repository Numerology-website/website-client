import { TKidNumerology } from "@/interfaces/kid-numerology.interface"
import { GetAPI, PostAPI } from "@/utils/fetch"

export const KidNumerologyService = {
  async getAll() {
    try {
      const { items } = await GetAPI<{
        total: number
        items: TKidNumerology[]
      }>("/admin/kid-numerology")
      return items
    } catch (error) {
      throw error
    }
  },
  async getOne(id: string) {
    try {
      const document = await GetAPI<TKidNumerology>(
        `/admin/kid-numerology/${id}`,
      )
      return document
    } catch (error) {
      throw error
    }
  },
  async updateDescription(
    id: string,
    description: string,
    accessToken: string,
  ) {
    try {
      await PostAPI({
        url: `/admin/kid-numerology/${id}/description`,
        method: "PATCH",
        accessToken,
        body: { description },
      })
      return { message: "Cập nhật thành công" }
    } catch (error) {
      throw error
    }
  },
  async updateRelationContent(
    numerologyId: string,
    type: "match" | "against",
    content: {
      fatherContent: string
      motherContent: string
    },
    accessToken: string,
  ) {
    try {
      await PostAPI({
        url: `/admin/kid-numerology/${numerologyId}/relation`,
        method: "PATCH",
        accessToken,
        body: { content, relation: type },
      })
      return { message: "Cập nhật thành công" }
    } catch (error) {
      throw error
    }
  },
}

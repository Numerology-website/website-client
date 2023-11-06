import { FormCreateNumerologyProps } from "@/components/admin/numerology/FormCreateNumerology"
import {
  INumerology,
  INumerologyContent,
} from "@/interfaces/numerology.interface"
import { toastify } from "@/libs/toastify"
import { GetAPI, PostAPI } from "@/utils/fetch"

export const NumerologyService = {
  async getAllNumerology() {
    try {
      const { items } = await GetAPI<{
        total: number
        items: INumerology[]
      }>("/admin/numerology")
      return items
    } catch (error) {
      throw error
    }
  },
  async getNumerologyById(id: string) {
    const numerologyDocument = await GetAPI<INumerology>(
      `/admin/numerology/${id}`,
    )
    return numerologyDocument
  },
  async getNumerologyContentById(
    id: string,
    blockOrder: number,
  ): Promise<INumerologyContent> {
    const numerologyContent = await GetAPI<INumerologyContent>(
      `/admin/numerology/${id}/${blockOrder}`,
    )
    return numerologyContent
  },
  async updateDescription(
    id: string,
    description: string,
    accessToken: string,
  ) {
    try {
      await PostAPI({
        url: `/admin/numerology/${id}/description`,
        method: "PATCH",
        accessToken,
        body: { description },
      })
      return { message: "Cập nhật thành công" }
    } catch (error) {
      throw error
    }
  },
  async updateNumerologyContentById(
    id: string,
    data: INumerologyContent,
    accessToken: string,
  ) {
    const numerologyContent = await PostAPI<INumerologyContent>({
      url: `/admin/numerology/${id}/${data.blockOrder}`,
      body: data,
      method: "PATCH",
      accessToken,
    })
    return numerologyContent
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
  async updatePdfContent({
    content,
    vipPdf,
    accessToken,
    numerologyId,
  }: {
    content: string
    vipPdf: boolean
    accessToken: string
    numerologyId: string
  }) {
    try {
      return await PostAPI<{ message: string }>({
        url: `/admin/numerology/${numerologyId}/pdf-content`,
        method: "PATCH",
        accessToken,
        body: { content, vipPdf },
      })
    } catch (error) {
      throw error
    }
  },
}

import { FormCreatePlanProps } from "@/components/admin/plans/FormCreatePlan"
import { FormEditPlanProps } from "@/components/admin/plans/FormEditPlan"
import { IPlan } from "@/interfaces/plans.interface"
import { GetAPI, PostAPI } from "@/utils/fetch"

export const AdminPlanService = {
  async getPlans() {
    return await GetAPI<{ total: number; items: IPlan[] }>("/admin/plans")
  },
  async getPlan(id: string) {
    return await GetAPI<IPlan>(`/admin/plans/${id}`)
  },
  async editPlan(id: string, body: FormEditPlanProps, accessToken: string) {
    return await PostAPI<IPlan>({
      method: "PATCH",
      url: `/admin/plans/${id}`,
      body,
      accessToken,
    })
  },
  async createPlan(body: FormCreatePlanProps, accessToken: string) {
    return await PostAPI<IPlan>({
      url: `/admin/plans`,
      body,
      accessToken,
    })
  },
}

export const PlanService = {
  async getPlans() {
    return await GetAPI<{ total: number; items: IPlan[] }>("/plans")
  },
}

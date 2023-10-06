import { FormEditPlanProps } from "@/components/admin/plans/FormEditPlan"
import { IPlan } from "@/interfaces/plans.interface"
import { GetAPI, PostAPI } from "@/utils/fetch"

export const PlanService = {
  async getPlans() {
    return await GetAPI<{ count: number; items: IPlan[] }>("/admin/plans")
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
}

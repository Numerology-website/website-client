import { AdminPlanService } from "@/app/services/plans/plans.service"
import { BackButton } from "@/components/admin/layout/common/BackButton"
import { FormEditPlan } from "@/components/admin/plans/FormEditPlan"

interface IEditAdminPlanPage {
  params: {
    id: string
  }
}
export default async function EditAdminPlan({ params }: IEditAdminPlanPage) {
  const plan = await AdminPlanService.getPlan(params.id)
  return (
    <section>
      <div className="mb-5 flex items-center gap-5">
        <BackButton href="/admin/plans" />
        <h1>Edit Plan</h1>
      </div>
      <FormEditPlan plan={plan} />
    </section>
  )
}

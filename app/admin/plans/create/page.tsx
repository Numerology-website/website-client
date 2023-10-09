import { BackButton } from "@/components/admin/layout/common/BackButton"
import { FormCreatePlan } from "@/components/admin/plans/FormCreatePlan"

export default async function CreateAdminPlan() {
  return (
    <section>
      <div className="mb-5 flex items-center gap-5">
        <BackButton href="/admin/plans" />
        <h1>Create Plan</h1>
      </div>
      <FormCreatePlan />
    </section>
  )
}

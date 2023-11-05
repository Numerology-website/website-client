import { FormCreateBlog } from "@/components/admin/blogs/FormCreateBlog"
import { BackButton } from "@/components/admin/layout/common/BackButton"

export default async function CreateAdminPlan() {
  return (
    <section>
      <div className="mb-5 flex items-center gap-5">
        <BackButton href="/admin/blogs" />
        <h1>Create Blog</h1>
      </div>
      <FormCreateBlog />
    </section>
  )
}

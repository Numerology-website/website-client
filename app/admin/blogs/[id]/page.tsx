import { AdminBlogService } from "@/app/services/blogs/admin.blogs.service"
import { FormEditBlog } from "@/components/admin/blogs/FormEditBlog"
import { BackButton } from "@/components/admin/layout/common/BackButton"

interface IEditAdminBlogPage {
  params: {
    id: string
  }
}
export default async function EditAdminBlog({ params }: IEditAdminBlogPage) {
  const blog = await AdminBlogService.getBlog(params.id)
  return (
    <section>
      <div className="mb-5 flex items-center gap-5">
        <BackButton href="/admin/blogs" />
        <h1>Edit Blog</h1>
      </div>
      <FormEditBlog blog={blog} />
    </section>
  )
}

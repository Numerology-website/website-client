import { AdminBlogService } from "@/app/services/blogs/admin.blogs.service"
import { FormEditBlog } from "@/components/admin/blogs/FormEditBlog"
import { BackButton } from "@/components/admin/layout/common/BackButton"

interface BlogPage {
  params: {
    slug: string
  }
}
export default async function Blog({ params }: BlogPage) {
  const blog = await AdminBlogService.getBlogBySlug(params.slug)
  console.log(blog)

  return (
    <section>
      {/* <div className="mb-5 flex items-center gap-5">
        <BackButton href="/admin/blogs" />
        <h1>Edit Plan</h1>
      </div>
      <FormEditBlog blog={blog} /> */}
    </section>
  )
}

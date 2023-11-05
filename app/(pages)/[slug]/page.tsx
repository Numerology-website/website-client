import { BlogService } from "@/app/services/blogs/blogs.service"
import ContentBlog from "@/components/blogs/ContentBlog"
import LatestBlogs from "@/components/blogs/LatestBlogs"
import RelatedBlogs from "@/components/blogs/RelatedBlogs"

interface BlogPage {
  params: {
    slug: string
  }
}
export default async function Blog({ params }: BlogPage) {
  const blog = await BlogService.getBlogBySlug(params.slug)
  return (
    <section>
      <div className=" bg-[#af368929] py-[10px]">
        <div className="container mx-auto block  w-full max-w-[1230px]  px-[15px]">
          <a href="" className="inline pr-1 text-[#af3689] hover:text-black">
            Trang chủ
          </a>
          {/* » {blog.title} */}
          <span> »</span>
          <div className="ml-3 inline">{blog.title}</div>
        </div>
      </div>
      <div className="pb-[30px]">
        <div className=" mx-auto flex w-full max-w-[1230px] flex-row flex-wrap px-0">
          <div className="relative w-full  p-[60px_30px_30px] md:max-w-[75%]  md:basis-[75%]">
            <ContentBlog document={blog} />
            <RelatedBlogs type={blog.type} />
          </div>
          <div className="relative w-full p-[0_15px_30px] md:max-w-[25%] md:basis-[25%]  md:border-l">
            <div className="pt-16">
              <RelatedBlogs type={blog.type} />
              <LatestBlogs />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

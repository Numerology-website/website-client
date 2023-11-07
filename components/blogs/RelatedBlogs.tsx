import { EBlogType } from "@/interfaces/blogs.interface"
import { BlogService } from "@/app/services/blogs/blogs.service"
import Link from "next/link"

interface MyComponentProps {
  type: EBlogType
}

export default async function RelatedBlogs({ type }: MyComponentProps) {
  const relatedBlogs = await BlogService.getBlogsByType(type)
  return (
    <>
      <div className="mb-8">
        <span className=" text-lg font-semibold uppercase">
          Bài viết liên quan
        </span>
        <div className="mt-3">
          <ul className="text-base text-[#af3689]">
            {relatedBlogs.items.map((item, index) => (
              <li key={index + 1} className="mb-2">
                <Link href={`/${item.slug}`} target="_blank">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

import { BlogService } from "@/app/services/blogs/blogs.service"
import Link from "next/link"

export default async function LatestBlogs() {
  const latestBlogs = await BlogService.getLatestBlogs()

  return (
    <>
      <div className="mb-8">
        <span className=" text-lg font-semibold uppercase">
          Bài viết mới nhất
        </span>
        <div className="mt-3">
          <ul className="text-sm italic">
            {latestBlogs.items.map((item, index) => (
              <li
                key={index + 1}
                className="border-b hover:text-[#af3689] hover:underline"
              >
                <Link
                  className="inline-block py-2"
                  href={item.slug}
                  target="_blank"
                >
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

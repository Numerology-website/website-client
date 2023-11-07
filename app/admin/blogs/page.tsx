import { AdminBlogService } from "@/app/services/blogs/admin.blogs.service"
import { PlusIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default async function AdminBlogsPage() {
  const blogs = await AdminBlogService.listBlogs()
  return (
    <div className="relative overflow-x-auto sm:rounded-lg">
      <h3>List Blog</h3>
      <table className="mb-10 w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              title
            </th>
            <th scope="col" className="px-6 py-3">
              slug
            </th>
            <th scope="col" className="px-6 py-3">
              type
            </th>
            <th scope="col" className="px-6 py-3">
              status
            </th>
            <th scope="col" className="px-6 py-3">
              <Link href={"/admin/blogs/create"} className="float-right">
                <PlusIcon className="h-6 w-6" />
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog, index) => (
            <tr
              key={index}
              className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                {blog.title}
              </th>
              <td className="px-6 py-4">{blog.slug}</td>
              <td className="px-6 py-4">{blog.type}</td>
              <td className="px-6 py-4">{blog.status}</td>
              <td className="px-6 py-4 text-right">
                <Link
                  href={`/admin/blogs/` + blog.id}
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

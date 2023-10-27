import { TBlog, TCreateBlog } from "@/interfaces/blogs.interface"
import { GetAPI, PostAPI } from "@/utils/fetch"

export const AdminBlogService = {
  async uploadThumbnail(
    file: File,
    accessToken: string,
  ): Promise<{ url: string }> {
    const formData = new FormData()
    formData.append("name", "upload")
    formData.append("file", file)
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/upload/images/blog",
        {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
          },
          body: formData,
        },
      )
      const response = await res.json()
      if (!res.ok) {
        throw response.message
      }
      return response
    } catch (error) {
      throw error
    }
  },
  async createBlog(blog: TCreateBlog, accessToken: string) {
    try {
      return await PostAPI<{ message: string }>({
        url: "/admin/blogs",
        method: "POST",
        accessToken,
        body: blog,
      })
    } catch (error) {
      throw error
    }
  },
  async updateBlog(blog: TBlog, accessToken: string) {
    try {
      return await PostAPI<{ message: string }>({
        url: `/admin/blogs/${blog.id}`,
        method: "PUT",
        accessToken,
        body: blog,
      })
    } catch (error) {
      throw error
    }
  },
  async listBlogs() {
    try {
      const { items } = await GetAPI<{ total: number; items: TBlog[] }>(
        "/admin/blogs",
      )
      return items
    } catch (error) {
      throw error
    }
  },
}

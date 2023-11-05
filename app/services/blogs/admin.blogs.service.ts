import { TBlog, TCreateBlog } from "@/interfaces/blogs.interface"
import { GetAPI, PostAPI } from "@/utils/fetch"
import { FormEditBlogProps } from "@/components/admin/blogs/FormEditBlog"

export const AdminBlogService = {
  async uploadThumbnail(
    file: File,
    accessToken: string,
  ): Promise<{ url: string }> {
    const formData = new FormData()
    // formData.append("name", "upload")
    formData.append("upload", file)
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/upload/images/blog",
        {
          method: "POST",
          headers: {
            // "Content-Type": "multipart/form-data",
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
  async getBlog(id: string) {
    return await GetAPI<TBlog>(`/admin/blogs/${id}`)
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

  async updateBlog(id: string,blog: FormEditBlogProps, accessToken: string) {
    try {
      return await PostAPI<{ message: string }>({
        url: `/admin/blogs/${id}`,
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

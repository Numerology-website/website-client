import { EBlogType, TBlog } from "@/interfaces/blogs.interface"
import { GetAPI } from "@/utils/fetch"

export const BlogService = {
  async getBlogBySlug(slug: string) {
    try {
      return await GetAPI<TBlog>(`/blogs/${slug}`)
    } catch (error) {
      throw error
    }
  },
  async getHighlightBlogsByType(type: EBlogType) {
    try {
      return await GetAPI<{ total: number; items: TBlog[] }>(
        `/blogs/highlight?type=${type}`,
      )
    } catch (error) {
      throw error
    }
  },
  async getTopBlogByType(type: EBlogType) {
    try {
      return await GetAPI<TBlog>(
        `/blogs/top?type=${type}`,
      )
    } catch (error) {
      console.log("err", error );
      
      throw error
    }
  },
  async getBlogsByType(type: EBlogType) {
    try {
      return await GetAPI<{ total: number; items: TBlog[] }>(
        `/blogs?type=${type}`,
      )
    } catch (error) {
      throw error
    }
  },
  async getLatestBlogs(limit: number = 5) {
    try {
      return await GetAPI<{ total: number; items: TBlog[] }>(
        `/blogs?limit=${limit}`,
      )
    } catch (error) {
      throw error
    }
  },
}

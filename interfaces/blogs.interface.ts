export interface IBlog {
  content: string
  description: string
}

export enum EBlogStatus {
  DRAFT = "draft",
  PUBLISH = "publish",
  ARCHIVE = "archive",
}

export enum EBlogType {
  NUMEROLOGY = "numerology",
  DISC = "disc",
  KNOWLEDGE = "knowledge",
  CHILD = "child",
  HOROSCOPE = "horoscope",
  LOVE = "love",
  OTHER = "other",
}

export type TCreateBlog = {
  title: string
  slug: string
  content: string
  thumbnail_img_link?: string
  description: string
  status?: EBlogStatus
  type: EBlogType
  is_show_on_navbar?: boolean
  category?: EBlogType[]
  is_top?: boolean
  is_highlight?: boolean
}

export type TBlog = {
  _id: string
  id: string
  title: string
  slug: string
  content: string
  thumbnail_img_link?: string
  description: string
  status: EBlogStatus
  type: EBlogType
  is_show_on_navbar: boolean
  category: EBlogType[]
  is_top: boolean
  is_highlight?: boolean
  created_at: string
  updated_at: string
  deleted_at: string
}

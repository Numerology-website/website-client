import { IUsers } from "@/interfaces/users.interface"

export interface INumerology {
  id: string
  number: number
  description: string
  contents: INumerologyContent[]
  created_by: IUsers
  free_pdf: string
  paid_pdf: string
}

export interface INumerologyContent {
  blockOrder: number
  value: string
  title?: string
  description: string
}

import { IUsers } from "@/interfaces/users.interface"

export interface INumerology {
  id: string
  number: number
  description: string
  contents: INumerologyContent[]
  created_by: IUsers
}

export interface INumerologyContent {
  blockOrder: number
  value: string
  title: string
  description?: string
}

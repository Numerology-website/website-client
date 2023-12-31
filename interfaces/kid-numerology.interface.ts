import { IUsers } from "@/interfaces/users.interface"

export type TKidNumerology = {
  id: string
  number: number
  description: string
  matchNumerology: TKidNumerologyInteract
  againstNumerology: TKidNumerologyInteract
  contents: KidNumerologyContent[]
  created_by: IUsers
  free_pdf: string
  paid_pdf: string
}

export type TKidNumerologyInteract = {
  fatherContent: string
  motherContent: string
  number: number[]
}
export enum EKidNumerologySectionType {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
}
type KidNumerologyContent = {
  sectionType: EKidNumerologySectionType
  blockOrder: number
  value: string
  title: string
  tableOfContentTitle: string
  id: string
  description: string
}

export enum EKidNumerologyPlan {
  Vip = "Vip",
  Free = "Free",
}

import { IUsers } from "@/interfaces/users.interface"

export type TKidNumerology = {
  id: string
  number: number
  description: string
  matchNumerology: TKidNumerologyInteract
  againstNumerology: TKidNumerologyInteract
  contents: KidNumerologyContent[]
  created_by: IUsers
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

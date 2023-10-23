import {
  EKidNumerologyPlan,
  TKidNumerology,
} from "@/interfaces/kid-numerology.interface"
import { IUsers } from "@/interfaces/users.interface"
import { EGenderType } from "@/utils/constant"

export type TCreateKidNumerologyRecord = {
  full_name: string
  gender: EGenderType
  birthday: string
  father: TParent
  mother: TParent
}

type TParent = {
  full_name: string
  birthday: string
}

export type TKidNumerologyRecord = {
  expose_id: string
  full_name: string
  gender: string
  birthday: string
  is_read?: boolean
  numerology: TKidNumerology
  user?: IUsers
  plan: EKidNumerologyPlan
  relation: {
    father: {
      is_match: boolean
      numerology_number: number
      content: string
      full_name: string
      birthday: string
    }
    mother: {
      is_match: boolean
      numerology_number: number
      content: string
      full_name: string
      birthday: string
    }
  }
}

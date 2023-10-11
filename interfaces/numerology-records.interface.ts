import { INumerology } from "@/interfaces/numerology.interface"
import { EGenderType } from "@/utils/constant"

export type TCreateNumerologyRecord = {
  full_name: string
  nickname?: string
  gender: EGenderType
  birthday: string
  phone_number?: string[]
  partner?: {
    full_name: string
    birthday: string
  }
}

export type TNumerologyRecord = {
  expose_id: string
  full_name: string
  nickname?: string
  gender: EGenderType
  birthday: string
  phone_number?: string[]
  partner?: {
    full_name: string
    birthday: string
  }
  pdf_url?: string
  numerology: INumerology
  created_at: string
  updated_at: string
  plan: ENumerologyRecordPlanType
}

export enum ENumerologyRecordPlanType {
  Free = "Free",
  OnlineVip = "OnlineVip",
  Vip = "Vip",
}

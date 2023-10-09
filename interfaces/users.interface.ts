export interface IMyProfile {
  full_name: string
  phone_number: string
  id: string
  first_name: string
  last_name: string
  created_at: string
  updated_at: string
  deleted_at: string
  vip_turn_remain: number
  online_turn_remain: number
  can_affiliate: boolean
  affiliate_id: string
}

export interface IUsers extends IMyProfile {
  role: string
}

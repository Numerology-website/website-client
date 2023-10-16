export enum EPlanType {
  OWNER = "owner",
  KID = "kid",
}

export interface IPlan {
  id: string
  name: string
  full_name: string
  price: {
    vnd: number
    usd: number
  }
  price_after_discount: {
    vnd: number
    usd: number
  }
  discount: number
  type: EPlanType
  recommend_text?: string
  gift_text?: string
}

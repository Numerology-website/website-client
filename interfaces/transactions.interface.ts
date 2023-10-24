import { IPlan } from "@/interfaces/plans.interface"
import { IUsers } from "@/interfaces/users.interface"

export enum ETransactionStatus {
  PENDING = "PENDING",
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  CANCELLED = "CANCELLED",
}

export enum ETransactionCurrency {
  VND = "VND",
  USD = "USD",
}

export type TTransaction = {
  id: string
  invoice_id: string
  customer: IUsers
  plan: IPlan
  status: ETransactionStatus
  created_at: string
}

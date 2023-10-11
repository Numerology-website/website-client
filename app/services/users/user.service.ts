import { TNumerologyRecord } from "@/interfaces/numerology-records.interface"
import { IUsers } from "@/interfaces/users.interface"
import { GetAPI } from "@/utils/fetch"

export const UserService = {
  async myProfile() {
    const response = await GetAPI<IUsers>("/users/me")
    return response
  },
}

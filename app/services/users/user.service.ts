import { IUsers } from "@/interfaces/users.interface"
import { GetAPI, PostAPI } from "@/utils/fetch"
type TChangeNameForm = {
  first_name: string
  last_name: string
}
export const UserService = {
  async myProfile() {
    const response = await GetAPI<IUsers>("/users/me")
    return response
  },
  async changePassword(
    oldPassword: string,
    newPassword: string,
    accessToken: string,
  ): Promise<string> {
    try {
      return await PostAPI<string>({
        url: "/users/password",
        method: "PATCH",
        accessToken,
        body: { old_password: oldPassword, password: newPassword },
      })
    } catch (error) {
      throw error
    }
  },
  async changeName(
    { first_name, last_name }: TChangeNameForm,
    accessToken: string,
  ): Promise<IUsers> {
    try {
      return await PostAPI<IUsers>({
        url: "/users/me",
        method: "PATCH",
        accessToken,
        body: { first_name, last_name },
      })
    } catch (error) {
      throw error
    }
  },
}

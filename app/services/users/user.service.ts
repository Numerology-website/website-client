import { IFormEditUser } from "@/components/admin/users/FormEditUser"
import { IAdminUsers, IUsers } from "@/interfaces/users.interface"
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

export const AdminUserService = {
  async getUser(userId: string) {
    const response = await GetAPI<IAdminUsers>(`/admin/users/${userId}`)
    return response
  },
  async editUser(
    payload: Partial<IFormEditUser>,
    userId: string,
    accessToken: string,
  ) {
    try {
      return await PostAPI<IAdminUsers>({
        url: `/admin/users/${userId}`,
        method: "PUT",
        accessToken,
        body: {
          vip_turn_remain: payload.vip_turn_remain,
          online_turn_remain: payload.online_turn_remain,
          kid_turn_remain: payload.kid_turn_remain,
          can_affiliate: payload.can_affiliate,
          affiliate_id: payload.affiliate_id,
        },
      })
    } catch (error) {
      throw error
    }
  },
  async deleteUser(userId: string, accessToken: string) {
    try {
      return await PostAPI<IAdminUsers>({
        url: `/admin/users/${userId}/block`,
        method: "PATCH",
        accessToken,
      })
    } catch (error) {
      throw error
    }
  },
  async activeUser(userId: string, accessToken: string) {
    try {
      return await PostAPI<IAdminUsers>({
        url: `/admin/users/${userId}/restore`,
        method: "PATCH",
        accessToken,
      })
    } catch (error) {
      throw error
    }
  },
}

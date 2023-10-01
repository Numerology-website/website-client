import { IUsers } from "@/interfaces/users.interface";
import { PostAPI } from "@/utils/fetch";

interface IRegisterProps {
  phone_number: string;
  password: string;
  first_name: string;
  last_name: string;
}
export const AuthService = {
  async register(data: IRegisterProps) {
    const response = await PostAPI<{
      user: IUsers;
      access_token: string;
      refresh_token: string;
    }>({
      url: "/auth/sign-up",
      body: data,
    });
    return response;
  },
};

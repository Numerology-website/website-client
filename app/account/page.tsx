import UserInformation from "@/components/account/UserInformation"
import { getServerSession } from "next-auth"
import { UserService } from "@/app/services/users/user.service"
import { authOptions } from "@/utils/authOptions"
import { IUsers } from "@/interfaces/users.interface"
export default async function account() {
  let myProfile: IUsers | undefined = undefined
  myProfile = await UserService.myProfile()
  return (
    <>
      <UserInformation document={myProfile} />
    </>
  )
}

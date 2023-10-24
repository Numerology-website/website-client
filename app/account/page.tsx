import UserInformation from "@/components/account/UserInformation"
import { getServerSession } from "next-auth"
import { UserService } from "@/app/services/users/user.service"
import { authOptions } from "@/utils/authOptions"
import { IUsers } from "@/interfaces/users.interface"
export default async function account() {
  // const session = await getServerSession(authOptions)
  let myProfile: IUsers | undefined = undefined
  // if (session) {
  //   myProfile = await UserService.myProfile()
  //   console.log(myProfile)
  // }
  myProfile = await UserService.myProfile()
  console.log(myProfile)
  return (
    <>
      <UserInformation document={myProfile} />
    </>
  )
}

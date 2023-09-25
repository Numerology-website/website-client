import { IMyProfile } from "@/interfaces/users.interface"
import { authOptions } from "@/utils/authOptions"
import { GetAPI } from "@/utils/fetch"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

const getMyProfile = async () => {
  const myProfile = await GetAPI<IMyProfile>("/users/me")
  return myProfile
}

export default async function Profile() {
  const session = await getServerSession(authOptions)
  if (!session) {
    return redirect("/login")
  }
  const myProfile = await getMyProfile()
  return (
    <div>
      <h1>
        Hello, {myProfile.full_name} - {myProfile.phone_number}
      </h1>
    </div>
  )
}

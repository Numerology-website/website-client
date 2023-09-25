import { getServerSession } from "next-auth"
import { authOptions } from "./authOptions"
import { useSession } from "next-auth/react"

export const GetAPI = async <T>(path: string): Promise<T> => {
  const session = await getServerSession(authOptions)
  let accessToken: string = ""
  if (session) {
    accessToken = session.accessToken
  }
  const url = process.env.NEXT_PUBLIC_API_URL + path
  const res = await fetch(url, {
    next: {
      revalidate: 5,
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
  const response = await res.json()
  return response
}

export const ClientGetAPI = async <T>(path: string): Promise<T> => {
  const { data, status } = useSession()
  let accessToken: string = ""
  if (status === "authenticated") {
    accessToken = data.accessToken
  }
  const url = process.env.NEXT_PUBLIC_API_URL + path
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
  const response = await res.json()
  return response
}

export const PostAPI = async <T>(
  path: string,
  option: RequestInit
): Promise<T> => {
  const session = await getServerSession(authOptions)
  let accessToken: string = ""
  if (session) {
    accessToken = session.accessToken
  }
  const url = process.env.NEXT_PUBLIC_API_URL + path
  const res = await fetch(url, {
    ...option,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
  const response = await res.json()
  return response
}

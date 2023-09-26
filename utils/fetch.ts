import { getServerSession } from "next-auth"
import { authOptions } from "./authOptions"
import { useSession } from "next-auth/react"
import { merge } from "lodash"

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

type PostMethod = "POST" | "PUT" | "DELETE"
interface IPostAPIProps {
  path: string
  options: {
    method?: PostMethod
  } & RequestInit
  accessToken?: string
}
export const PostAPI = async <T>({
  path,
  options = {
    method: "POST",
  },
}: IPostAPIProps): Promise<T> => {
  const session = await getServerSession(authOptions)
  let accessToken: string = ""
  if (session) {
    accessToken = session.accessToken
  }
  const url = process.env.NEXT_PUBLIC_API_URL + path
  const mergedOption = merge(options, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
  const res = await fetch(url, mergedOption)
  const response = await res.json()
  return response
}

export const ClientPostAPI = async <T>({
  path,
  options = {
    method: "POST",
  },
  accessToken,
}: IPostAPIProps): Promise<T | undefined> => {
  const url = process.env.NEXT_PUBLIC_API_URL + path
  const mergedOption = merge(options, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  })
  try {
    const res = await fetch(url, mergedOption)
    const response = await res.json()
    return response
  } catch (error) {
    console.error(error)
  }
}

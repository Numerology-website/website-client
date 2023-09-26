import Axios, { AxiosError, AxiosHeaders } from "axios"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"
import { authOptions } from "./authOptions"

const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
})

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
  url: string
  method?: PostMethod
  accessToken?: string
  body?: any
  headers?: any
}

export const PostAPI = async <T>({
  url,
  method = "POST",
  accessToken,
  body,
  headers,
}: IPostAPIProps): Promise<T> => {
  try {
    const res = await axios({
      method,
      url,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...headers,
      },
      data: body,
    })
    return res.data as T
  } catch (error) {
    const axiosError = error as AxiosError
    throw {
      name: "AxiosError",
      code: axiosError.code,
      message: axiosError.message,
      statusCode: axiosError.response?.status,
    }
  }
}

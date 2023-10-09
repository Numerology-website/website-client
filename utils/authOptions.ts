import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone_number: {
          label: "PhoneNumber",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.phone_number || !credentials?.password)
          throw new Error("Missing credentials")
        const { phone_number, password } = credentials
        try {
          const url = process.env.NEXT_PUBLIC_API_URL + "/auth/sign-in"
          const res = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ phone_number, password }),
          })
          const response = await res.json()
          if (response) {
            return {
              id: response.user.id,
              role: response.user.role,
              first_name: response.user.first_name,
              last_name: response.user.last_name,
              accessToken: response.access_token,
            }
          }
          return null
        } catch (error) {
          console.log(error)
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt(params) {
      const { token, user } = params
      if (user) {
        token.id = user.id
        token.role = user.role
        token.accessToken = user.accessToken
        token.full_name = user.first_name + " " + user.last_name
      }
      return token
    },
    session(params) {
      const { session, token } = params
      session.user.role = token.role
      session.user.id = token.id
      session.accessToken = token.accessToken
      session.user.full_name = token.full_name
      return session
    },
  },
}

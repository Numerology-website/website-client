// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    accessToken: string
    user: {
      id: string
      role: string
      full_name: string
    } & DefaultSession
  }

  interface User extends DefaultUser {
    role: string
    accessToken: string
    last_name: string
    first_name: string
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string
    role: string
    accessToken: string
    full_name: string
  }
}

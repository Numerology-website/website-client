import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                phone_number: { label: "PhoneNumber", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if(!credentials?.phone_number || !credentials?.password) throw new Error("Missing credentials")
                const { phone_number, password } = credentials;
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ phone_number, password })
                });
                const user = await res.json();
                if (res.ok && user) {
                    return user;
                }
                if (res.status === 401 || res.status === 403) {
                    console.log(res.statusText)
                    return null;
                }
            }
        })
    ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST}
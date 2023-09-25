import { NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { ERole } from "./utils/constant"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    const pathname = request.nextUrl.pathname
    const role = request.nextauth.token?.role
    if (pathname.startsWith("/admin") && role !== ERole.Admin) {
      return NextResponse.rewrite(new URL("/", request.url))
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: ["/admin/:path*"],
}

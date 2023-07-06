import { authMiddleware } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import { clerkClient } from "@clerk/nextjs"

export default authMiddleware({
  signInUrl: "/sign-in",
  publicRoutes: [
    "/",
    "/sign-up",
    "/sign-in(.*)",
    "/sign-out(.*)",
    "/sso-callback(.*)",
    "/tos(.*)",
    "/privacy(.*)",
    "/pricing(.*)",
    "/api(.*)",
   
  ],

})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}

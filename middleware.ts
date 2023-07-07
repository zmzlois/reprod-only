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
    // "/roadmap", // Public page but user needs to sign in to vote + list a feature
  ],
  async afterAuth(auth, req) {
    if (auth.isPublicRoute) {
      // Don't do anything for public routes
      return NextResponse.next();
    }

    const url = new URL(req.nextUrl.origin);
    //const parts = req.nextUrl.pathname.split("/").filter(Boolean);

    if (!auth.userId) {
      // User is not signed in
      url.pathname = "/sign-in";
      return NextResponse.redirect(url);
    }


    return NextResponse.next();
  },
  // TODO: ComCord route will be changed to [projectName] once we are able to query organisation + user name
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
}

import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
    signInUrl: "/signin",
    publicRoutes: [
        "/",
        "/opengraph-image.png",
        "/signin(.*)",
        "/sso-callback(.*)",
        "/terms(.*)",
        "/pricing(.*)",
        "/privacy(.*)",
        "/api(.*)",
        "/invite-link(.*)",
        "/verify/(.*)",
        "/verify",
        "/blogs",
        "/blogs(.*)",
    ],
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

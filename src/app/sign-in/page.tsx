import type { Route } from "next"
import Link from "next/link"

import { EmailSignIn } from "./email-signin"
import { OAuthSignIn } from "./oauth-signin"
import { Balancer } from "react-wrap-balancer"

// export const runtime = "edge"

export default function AuthenticationPage() {
  return (
    <div className="mx-auto flex w-screen h-screen flex-col items-center justify-center  space-y-6 sm:w-[350px]">
      <div className="w-full">
        <div className="flex-col hidden space-y-2 text-center lg:flex">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <div className="grid gap-6">
          <EmailSignIn />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="px-2 bg-background text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <OAuthSignIn />
        </div>
      </div>
      <Balancer className="px-8 text-xs text-center text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link
          href={"/tos" as Route}
          className="underline hover:text-primary underline-offset-4"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href={"/privacy" as Route}
          className="underline hover:text-primary underline-offset-4"
        >
          Privacy Policy
        </Link>
        .
      </Balancer>
    </div>
  )
}

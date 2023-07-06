"use client"

import { useEffect } from "react"
import { useClerk } from "@clerk/nextjs"
import type { HandleOAuthCallbackParams } from "@clerk/types"
import { AuthenticateWithRedirectCallback } from "@clerk/nextjs"
import { Loader2 as Spinner } from "lucide-react"

export const runtime = "edge"

export default function SSOCallback(props: {
  searchParams: HandleOAuthCallbackParams
}) {
  const { handleRedirectCallback } = useClerk()

  useEffect(() => {
    void handleRedirectCallback(props.searchParams)
  }, [props.searchParams, handleRedirectCallback])

  return (
    <div className="flex items-center justify-center">
      <Spinner className="w-16 h-16 mr-2 animate-spin" />
      <AuthenticateWithRedirectCallback
        afterSignInUrl="/dashboard"
        afterSignUpUrl="/dashboard"
      />
    </div>
  )
}

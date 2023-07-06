"use client"

import * as React from "react"
import { useSignIn } from "@clerk/nextjs"
import type { OAuthStrategy } from "@clerk/types"

import { Button } from "@/components/ui/button"
import { Loader2 as Spinner } from "lucide-react"
import DiscordIcon from "@/components/icon/discord"

import { useToast } from "@/components/ui/use-toast"

export function OAuthSignIn() {
  const [isLoading, setIsLoading] = React.useState<OAuthStrategy | null>(null)
  const { signIn, isLoaded: signInLoaded } = useSignIn()
  const { toast } = useToast()

  const oauthSignIn = async (provider: OAuthStrategy) => {
    if (!signInLoaded) return null
    try {
      setIsLoading(provider)
      await signIn.authenticateWithRedirect({
        strategy: provider,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
      })
    } catch (cause) {
      console.error(cause)
      setIsLoading(null)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong, please try again.",
      })
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <Button
        variant="outline"
        className="bg-background"
        onClick={() => oauthSignIn("oauth_discord")}
      >
        {isLoading === "oauth_discord" ? (
          <Spinner className="w-8 h-8 mr-2 animate-spin" />
        ) : (
          <DiscordIcon className="w-8 h-8 mr-2 " />
        )}
        Discord
      </Button>
    </div>
  )
}

import type React from "react"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { ClientSidebar } from "@/components/client/sidebar"

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser()

  if (error || !user) {
    redirect("/auth/login")
  }

  return (
    <div className="min-h-screen bg-background flex">
      <ClientSidebar user={user} />
      <main className="flex-1 p-6 lg:p-8 ml-0 lg:ml-64">{children}</main>
    </div>
  )
}

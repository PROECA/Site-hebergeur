"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Server, ShoppingCart, Ticket, Settings, LogOut, Menu, X, Home } from "lucide-react"
import { useState } from "react"
import type { User } from "@supabase/supabase-js"

const navItems = [
  { label: "Dashboard", href: "/client", icon: LayoutDashboard },
  { label: "Mes serveurs", href: "/client/servers", icon: Server },
  { label: "Commandes", href: "/client/orders", icon: ShoppingCart },
  { label: "Tickets", href: "/client/tickets", icon: Ticket },
  { label: "Parametres", href: "/client/settings", icon: Settings },
]

export function ClientSidebar({ user }: { user: User }) {
  const pathname = usePathname()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
  }

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-accent/20 rounded-lg"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 h-full w-64 bg-card/95 border-r border-accent/20 z-40
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
      `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-accent/20">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/nexahost-logo.png" alt="Net Vora" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold text-accent">Net Vora</span>
            </Link>
          </div>

          {/* User info */}
          <div className="p-4 border-b border-accent/20">
            <p className="font-medium truncate">{user.user_metadata?.first_name || "Client"}</p>
            <p className="text-sm text-muted-foreground truncate">{user.email}</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-accent/20 text-accent"
                        : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                    }
                  `}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Bottom actions */}
          <div className="p-4 border-t border-accent/20 space-y-2">
            <Link href="/">
              <Button
                variant="outline"
                className="w-full justify-start border-accent/30 hover:bg-accent/10 bg-transparent"
              >
                <Home className="w-4 h-4 mr-2" />
                Retour au site
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:bg-red-500/10 hover:text-red-500"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Deconnexion
            </Button>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsOpen(false)} />}
    </>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50 animate-pulse-glow">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover-glow rounded-lg p-2 -m-2">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 rounded-lg blur-lg animate-pulse-glow"></div>
            <Image
              src="/nexahost-logo.png"
              alt="Nexa-Host Logo"
              width={50}
              height={40}
              className="h-10 w-auto relative z-10"
            />
          </div>
          <span className="text-lg font-bold text-accent hidden sm:inline animate-neon">Nexa-Host</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#games" className="nav-link">
            Jeux
          </Link>
          <Link href="#pricing" className="nav-link">
            Tarifs
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => window.open("https://discord.gg/BAzdvJDVXq", "_blank")}
            className="btn-glow"
          >
            Discord
          </Button>
          <Button onClick={() => window.open("https://panel.nexahost.m1x.ovh", "_blank")} className="btn-glow">
            Panel
          </Button>
          <Button
            className="bg-accent hover:bg-accent/90 btn-premium text-accent-foreground"
            onClick={() => window.open("https://nexahost.m1x.ovh/", "_blank")}
          >
            Commander
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 hover:bg-secondary rounded-lg transition" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-card/80 backdrop-blur-sm opacity-100 transform transition-all duration-300">
          <div className="px-4 py-4 flex flex-col gap-3">
            <Link href="#games" className="hover:text-accent transition py-2">
              Jeux
            </Link>
            <Link href="#pricing" className="hover:text-accent transition py-2">
              Tarifs
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                className="w-full bg-transparent btn-glow"
                onClick={() => window.open("https://discord.gg/BAzdvJDVXq", "_blank")}
              >
                Discord
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent btn-glow"
                onClick={() => window.open("https://panel.nexahost.m1x.ovh", "_blank")}
              >
                Panel
              </Button>
              <Button
                className="w-full bg-accent hover:bg-accent/90 btn-premium text-accent-foreground"
                onClick={() => window.open("https://nexahost.m1x.ovh/", "_blank")}
              >
                Commander
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

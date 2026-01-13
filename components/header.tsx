"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="border-b border-accent/20 bg-background/80 backdrop-blur-md sticky top-0 z-50">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-accent/10 via-transparent to-accent/5 pointer-events-none hidden"></div>
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50 hidden"></div>

      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between relative z-10">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 rounded-lg p-2 -m-2">
          <div className="relative">
            <Image src="/nexahost-logo.png" alt="Nexa-Host Logo" width={50} height={40} className="h-10 w-auto" />
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-accent via-cyan-300 to-accent bg-clip-text text-transparent hidden sm:inline">
            Nexa-Host
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#games" className="text-foreground hover:text-accent transition-colors duration-300">
            Jeux
          </Link>
          <Link href="#pricing" className="text-foreground hover:text-accent transition-colors duration-300">
            Tarifs
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => window.open("https://discord.gg/BAzdvJDVXq", "_blank")}
            className="border-accent/50 hover:border-accent hover:text-accent"
          >
            Discord
          </Button>
          <Button
            onClick={() => window.open("https://panel.nexahost.m1x.ovh", "_blank")}
            className="border border-accent/70 text-accent hover:bg-accent/20 hover:border-accent bg-transparent"
          >
            Panel
          </Button>
          <Button
            className="bg-gradient-to-r from-accent to-cyan-400 hover:from-cyan-400 hover:to-accent text-background font-bold"
            onClick={() => window.open("https://nexahost.m1x.ovh/", "_blank")}
          >
            Commander
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 hover:bg-accent/10 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-accent/20 bg-background/90 backdrop-blur-md">
          <div className="px-4 py-4 flex flex-col gap-3">
            <Link href="#games" className="hover:text-accent transition-colors duration-300 py-2">
              Jeux
            </Link>
            <Link href="#pricing" className="hover:text-accent transition-colors duration-300 py-2">
              Tarifs
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                className="w-full border-accent/50 hover:border-accent hover:text-accent bg-transparent"
                onClick={() => window.open("https://discord.gg/BAzdvJDVXq", "_blank")}
              >
                Discord
              </Button>
              <Button
                className="w-full border border-accent/70 text-accent hover:bg-accent/20 hover:border-accent bg-transparent"
                onClick={() => window.open("https://panel.nexahost.m1x.ovh", "_blank")}
              >
                Panel
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-accent to-cyan-400 hover:from-cyan-400 hover:to-accent text-background font-bold"
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

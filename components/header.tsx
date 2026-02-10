"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, Gamepad2, Globe, Car, Sword, MessageSquare, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { name: "Minecraft", icon: Cpu, href: "#pricing", color: "text-green-400" },
  { name: "FiveM", icon: Gamepad2, href: "#pricing", color: "text-blue-400" },
  { name: "RedM", icon: Sword, href: "#pricing", color: "text-red-400" },
  { name: "Garry's Mod", icon: Gamepad2, href: "#pricing", color: "text-yellow-400" },
  { name: "Jeux de Survie", icon: Globe, href: "#pricing", color: "text-amber-400" },
  { name: "Nova Life", icon: Globe, href: "#pricing", color: "text-cyan-400" },
  { name: "Assetto Corsa", icon: Car, href: "#pricing", color: "text-orange-400" },
  { name: "Bot Discord", icon: MessageSquare, href: "#pricing", color: "text-purple-400" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/nexahost-logo.png" alt="Net Vora" width={36} height={36} className="h-9 w-auto rounded" />
          <span className="text-lg font-bold text-foreground">Net Vora</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          <Link href="/" className="px-4 py-2 text-sm text-foreground hover:text-accent transition rounded-full">
            Accueil
          </Link>
          <a href="https://nexahost.m1x.ovh/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm text-foreground hover:text-accent transition rounded-full">
            Boutique
          </a>
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="px-4 py-2 text-sm text-foreground hover:text-accent transition rounded-full flex items-center gap-1"
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-2xl py-2 animate-fadeIn">
                {services.map((s) => {
                  const Icon = s.icon
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-secondary transition text-sm"
                    >
                      <Icon className={`w-4 h-4 ${s.color}`} />
                      {s.name}
                    </a>
                  )
                })}
              </div>
            )}
          </div>
          <a href="https://discord.gg/Wkk4qFxpcm" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm text-foreground hover:text-accent transition rounded-full flex items-center gap-1.5">
            <MessageSquare className="w-4 h-4" />
            Discord
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            size="sm"
            variant="outline"
            className="bg-transparent border-border hover:border-accent hover:text-accent"
            onClick={() => window.open("http://89.187.7.128/auth/login", "_blank")}
          >
            Panel
          </Button>
          <Button
            size="sm"
            className="bg-accent hover:bg-accent/80 text-accent-foreground font-semibold"
            onClick={() => window.open("https://nexahost.m1x.ovh/", "_blank")}
          >
            Commander
          </Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 flex flex-col gap-2">
            <Link href="/" className="py-2 hover:text-accent transition" onClick={() => setIsOpen(false)}>Accueil</Link>
            <a href="https://nexahost.m1x.ovh/" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-accent transition">Boutique</a>
            <div className="py-2">
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 hover:text-accent transition">
                Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="mt-2 ml-4 flex flex-col gap-1">
                  {services.map((s) => {
                    const Icon = s.icon
                    return (
                      <a key={s.name} href={s.href} onClick={() => { setServicesOpen(false); setIsOpen(false) }} className="flex items-center gap-2 py-1.5 text-sm hover:text-accent transition">
                        <Icon className={`w-4 h-4 ${s.color}`} />
                        {s.name}
                      </a>
                    )
                  })}
                </div>
              )}
            </div>
            <a href="https://discord.gg/Wkk4qFxpcm" target="_blank" rel="noopener noreferrer" className="py-2 hover:text-accent transition flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4" /> Discord
            </a>
            <div className="flex flex-col gap-2 pt-3 border-t border-border">
              <Button variant="outline" className="w-full bg-transparent border-border" onClick={() => window.open("http://89.187.7.128/auth/login", "_blank")}>Panel</Button>
              <Button className="w-full bg-accent hover:bg-accent/80 text-accent-foreground font-semibold" onClick={() => window.open("https://nexahost.m1x.ovh/", "_blank")}>Commander</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

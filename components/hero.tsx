"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 animate-fadeInUp">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-foreground uppercase mb-6 text-balance">
          Serveurs de jeu{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {"&"} VPS
          </span>
          <br />
          Haute Performance
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty animate-fadeInUp" style={{ animationDelay: "0.15s" }}>
          Hebergez vos serveurs Minecraft, FiveM, Gmod, Rust et plus.
          <br className="hidden sm:block" />
          Performances exceptionnelles, support 24/7.
        </p>

        <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold px-10 py-6 text-lg rounded-full shadow-lg shadow-purple-500/30"
            onClick={() => window.open("https://nexahost.m1x.ovh/", "_blank")}
          >
            Commencer maintenant
          </Button>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-foreground transition animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  )
}

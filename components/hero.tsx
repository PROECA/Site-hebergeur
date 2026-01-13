"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

export default function Hero() {
  const logoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (logoRef.current) {
        const rect = logoRef.current.getBoundingClientRect()
        const scrollProgress = Math.max(0, (window.innerHeight - rect.top) / window.innerHeight)
        logoRef.current.style.transform = `translateY(${Math.max(0, scrollProgress * 40)}px) scale(${0.95 + scrollProgress * 0.05})`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/30 rounded-full animate-fadeInUp">
              <Zap className="w-4 h-4 text-accent animate-float" style={{ animationDelay: "0.5s" }} />
              <span className="text-sm text-accent">Performance extrême garantie</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance animate-fadeInUp">
              Hébérgez vos serveurs
              <br />
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent animate-neon">
                à la vitesse de l'éclair
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Infrastructure hautement performante pour tous vos jeux préférés. Ping minimal, uptime maximal, support
              24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 transition-all hover:scale-110 hover:shadow-xl hover:shadow-accent/50 btn-premium"
                onClick={() => window.open("https://nexahost.m1x.ovh/", "_blank")}
              >
                Commencer maintenant
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transition-all hover:scale-110 hover:bg-accent/10 bg-transparent"
                onClick={() => window.open("https://discord.gg/BAzdvJDVXq", "_blank")}
              >
                Rejoindre Discord
              </Button>
            </div>

            <div className="flex gap-8 pt-8 text-sm">
              <div className="animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
                <p className="font-bold text-accent text-lg">99.9%</p>
                <p className="text-muted-foreground">Uptime garanti</p>
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: "0.8s" }}>
                <p className="font-bold text-accent text-lg">24/7</p>
                <p className="text-muted-foreground">Support client</p>
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: "1s" }}>
                <p className="font-bold text-accent text-lg">8+</p>
                <p className="text-muted-foreground">Types de jeux</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center h-96" ref={logoRef}>
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl blur-3xl animate-glow"></div>
            <div
              className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-xl blur-2xl animate-glow"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <Image
              src="/nexahost-logo.png"
              alt="Nexa-Host Logo"
              width={300}
              height={300}
              className="w-64 h-64 relative z-10 drop-shadow-2xl animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

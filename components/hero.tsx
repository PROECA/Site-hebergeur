"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, Clock, Server } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse-glow" style={{ animationDelay: "1s" }}></div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full animate-fadeInUp">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm text-accent font-medium">Infrastructure haute performance</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              Votre serveur de jeu,{" "}
              <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
                en quelques clics.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
              Net Vora met a votre disposition des serveurs de jeux performants, stables et abordables.
              Concentrez-vous sur le jeu, on s{"'"}occupe du reste.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 btn-premium"
                onClick={() => window.open("https://nexahost.m1x.ovh/", "_blank")}
              >
                Voir les offres
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent hover:bg-accent/10"
                onClick={() => window.open("https://discord.gg/BAzdvJDVXq", "_blank")}
              >
                Rejoindre le Discord
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="animate-fadeInUp" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-4 h-4 text-accent" />
                  <p className="font-bold text-accent text-lg">99.9%</p>
                </div>
                <p className="text-sm text-muted-foreground">Uptime garanti</p>
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: "0.6s" }}>
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-accent" />
                  <p className="font-bold text-accent text-lg">24/7</p>
                </div>
                <p className="text-sm text-muted-foreground">Support reactif</p>
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: "0.7s" }}>
                <div className="flex items-center gap-2 mb-1">
                  <Server className="w-4 h-4 text-accent" />
                  <p className="font-bold text-accent text-lg">NVMe</p>
                </div>
                <p className="text-sm text-muted-foreground">Stockage rapide</p>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-3xl animate-glow"></div>
            <Image
              src="/nexahost-logo.png"
              alt="Net Vora"
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

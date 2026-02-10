'use client';

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gamepad2, Globe, Car, Sword, MessageSquare, Cpu, Flame } from "lucide-react"

const services = [
  {
    title: "Minecraft Hosting",
    description: "Serveurs haute frequence pour Vanilla, Modded ou Plugins.",
    icon: Cpu,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
  },
  {
    title: "FiveM",
    description: "La reference pour vos serveurs GTA V Roleplay.",
    icon: Gamepad2,
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    title: "RedM",
    description: "L'univers du Far West accessible a petit prix.",
    icon: Sword,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
  },
  {
    title: "Garry's Mod",
    description: "Stabilite maximale pour DarkRP, TTT et plus.",
    icon: Gamepad2,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
  },
  {
    title: "Nova Life",
    description: "Hebergement specialise pour la communaute Nova Life RP.",
    icon: Globe,
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
  },
  {
    title: "Jeux de Survie",
    description: "ARK, Rust, DayZ, Palworld. Des serveurs robustes.",
    icon: Flame,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    title: "Assetto Corsa",
    description: "Infrastructure performante pour vos courses.",
    icon: Car,
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
  },
  {
    title: "Bot Discord",
    description: "Hebergez vos bots NodeJS, Python, Java 24/7.",
    icon: MessageSquare,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
  },
]

export default function GameCategories() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Nos Services</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Decouvrez notre gamme complete de solutions d{"'"}hebergement.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="bg-card border-border hover:border-accent/40 transition-all group">
                <CardContent className="pt-6 flex flex-col h-full gap-4">
                  <div className={`w-12 h-12 rounded-xl ${service.bgColor} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1.5">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent border-border hover:border-accent hover:text-accent group-hover:border-accent/50 mt-auto"
                    onClick={() => {
                      const el = document.getElementById("pricing")
                      if (el) el.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {"Decouvrir"}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

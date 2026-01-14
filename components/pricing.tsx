"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

const pricingTiers = [
  {
    name: "Gmod",
    description: "Serveurs optimisés Garry's Mod",
    plans: [
      {
        tier: "Starter",
        price: "2,50",
        ram: "4 Go",
        cores: "2 vCores",
        storage: "25 Go NVMe",
        features: ["Idéal pour débuter", "Mod support", "Mise à jour automatique"],
      },
      {
        tier: "Performance",
        price: "5,90",
        ram: "8 Go",
        cores: "3 vCores",
        storage: "50 Go NVMe",
        features: ["High FPS stable", "Support mod avancé", "Priorité support"],
      },
      {
        tier: "Élite",
        price: "11,50",
        ram: "16 Go",
        cores: "4 vCores",
        storage: "80 Go NVMe",
        features: ["Performance maximale", "Infos détaillées", "Support VIP"],
      },
    ],
  },
  {
    name: "Minecraft",
    description: "Hébergement fluide sans se ruiner",
    plans: [
      {
        tier: "Starter",
        price: "1,99",
        ram: "4 Go",
        cores: "2 vCores",
        storage: "NVMe Illimité",
        features: ["Jusqu'à 20 joueurs", "Mods support", "Backups automatiques"],
      },
      {
        tier: "Performance",
        price: "4,90",
        ram: "10 Go",
        cores: "4 vCores",
        storage: "NVMe Illimité",
        features: ["Jusqu'à 50 joueurs", "Plugins illimités", "Lag zéro"],
      },
      {
        tier: "Élite",
        price: "9,50",
        ram: "20 Go",
        cores: "6 vCores",
        storage: "NVMe Illimité",
        features: ["Jusqu'à 128 joueurs", "Support 24/7", "Protection DDoS"],
      },
    ],
  },
  {
    name: "Jeux de Survie",
    description: "ARK, Rust, DayZ, Palworld...",
    plans: [
      {
        tier: "Starter",
        price: "7,50",
        ram: "8 Go",
        cores: "2 vCores",
        storage: "40 Go NVMe",
        features: ["Jusqu'à 30 joueurs", "Tames rapides", "Stockage ample"],
      },
      {
        tier: "Performance",
        price: "14,90",
        ram: "16 Go",
        cores: "4 vCores",
        storage: "80 Go NVMe",
        features: ["Jusqu'à 70 joueurs", "Spawns optimisés", "Lag zéro"],
      },
      {
        tier: "Élite",
        price: "26,00",
        ram: "32 Go",
        cores: "6 vCores",
        storage: "120 Go NVMe",
        features: ["Jusqu'à 128 joueurs", "Parfait pour pro", "Support 24/7"],
      },
    ],
  },
  {
    name: "Assetto Corsa",
    description: "Infrastructure pro pour les courses",
    plans: [
      {
        tier: "Starter",
        price: "3,90",
        ram: "6 Go",
        cores: "2 vCores",
        storage: "30 Go NVMe",
        features: ["Drift et balade", "Ping stable", "CSP compatible"],
      },
      {
        tier: "Performance",
        price: "8,50",
        ram: "12 Go",
        cores: "4 vCores",
        storage: "60 Go NVMe",
        features: ["Courses ligue", "Content Manager", "CSP/SP complet"],
      },
      {
        tier: "Élite",
        price: "16,00",
        ram: "24 Go",
        cores: "6 vCores",
        storage: "100 Go NVMe",
        features: ["Endurances 24h", "Circuits modifiés", "Infrastructure pro"],
      },
    ],
  },
  {
    name: "RedM",
    description: "RedM (Jeu de rôle RDR2) - L'univers du Far West enfin accessible à petit prix",
    plans: [
      {
        tier: "Starter",
        price: "4,90",
        ram: "8 Go",
        cores: "2 vCores",
        storage: "40 Go NVMe",
        features: ["Petit serveur RP", "Scripts stables", "Testable"],
      },
      {
        tier: "Performance",
        price: "11,50",
        ram: "16 Go",
        cores: "4 vCores",
        storage: "80 Go NVMe",
        features: ["Moyen serveur RP", "Fluidité constante", "Support prioritaire"],
      },
      {
        tier: "Élite",
        price: "22,00",
        ram: "32 Go",
        cores: "6 vCores",
        storage: "150 Go NVMe",
        features: ["Gros serveur RP", "Référence du marché", "Support VIP 24/7"],
      },
    ],
  },
  {
    name: "FiveM",
    description: "FiveM (GTA V Roleplay) - La puissance au meilleur prix pour vos serveurs RP",
    plans: [
      {
        tier: "Starter",
        price: "3,50",
        ram: "6 Go",
        cores: "2 vCores",
        storage: "30 Go NVMe",
        features: ["Idéal pour le développement et les petits projets", "Scripts test", "Mise à jour auto"],
      },
      {
        tier: "Performance",
        price: "8,90",
        ram: "12 Go",
        cores: "4 vCores",
        storage: "60 Go NVMe",
        features: ["Le meilleur rapport qualité/prix pour 48-64 emplacements", "Scripts avancés", "Lag zéro"],
      },
      {
        tier: "Élite",
        price: "17,50",
        ram: "24 Go",
        cores: "6 vCores",
        storage: "100 Go NVMe",
        features: ["Le must pour les grosses communautés avec mapping", "Support VIP", "Protection DDoS"],
      },
    ],
  },
  {
    name: "Nova Life",
    description: "Des ressources boostées pour l'économie",
    plans: [
      {
        tier: "Starter",
        price: "4,50",
        ram: "8 Go",
        cores: "2 vCores",
        storage: "40 Go NVMe",
        features: ["Petite ville", "Mods stables", "Testable"],
      },
      {
        tier: "Performance",
        price: "9,90",
        ram: "16 Go",
        cores: "4 vCores",
        storage: "80 Go NVMe",
        features: ["Population stable", "Fluidité constante", "Scripts optimisés"],
      },
      {
        tier: "Élite",
        price: "18,50",
        ram: "32 Go",
        cores: "6 vCores",
        storage: "120 Go NVMe",
        features: ["Puissance maximale", "Référence du serveur", "Support prioritaire"],
      },
    ],
  },
  {
    name: "🤖 Bot Discord",
    description: "En ligne 24h/24, 7j/7",
    plans: [
      {
        tier: "Starter",
        price: "0,50",
        ram: "512 Mo",
        cores: "0,2 vCore",
        storage: "-",
        features: ["Bot simple", "Basique", "Pas cher"],
      },
      {
        tier: "Performance",
        price: "1,90",
        ram: "2 Go",
        cores: "1 vCore",
        storage: "-",
        features: ["Fonctionnalités avancées", "Stable", "Recommandé"],
      },
      {
        tier: "Élite",
        price: "3,50",
        ram: "4 Go",
        cores: "2 vCores",
        storage: "-",
        features: ["Tout illimité", "Aucune limite", "Support VIP"],
      },
    ],
  },
]

export default function Pricing() {
  const { ref, isVisible } = useIntersectionObserver()

  const handleCommander = (gameName: string, tierName: string, tierPrice: string) => {
    const encodedPrice = tierPrice.replace(",", ".")
    window.location.href = `/checkout?game=${encodeURIComponent(gameName)}&tier=${encodeURIComponent(tierName)}&price=${encodedPrice}`
  }

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Tarification flexible</h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.1s" }}
          >
            Des plans pour tous les budgets et tous les besoins
          </p>
        </div>

        {pricingTiers.map((category, categoryIndex) => (
          <div
            key={category.name}
            ref={categoryIndex === 0 ? ref : undefined}
            className={`mb-16 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
            style={{ animationDelay: `${0.2 + categoryIndex * 0.1}s` }}
          >
            <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
            <p className="text-muted-foreground mb-6">{category.description}</p>

            <div className="grid md:grid-cols-3 gap-6">
              {category.plans.map((plan, planIndex) => (
                <div
                  key={`${category.name}-${plan.tier}`}
                  className={`${isVisible ? "animate-fadeInUp" : "opacity-0"} transition-all`}
                  style={{ animationDelay: `${0.25 + categoryIndex * 0.1 + planIndex * 0.05}s` }}
                >
                  <Card className="border-border bg-card flex flex-col transition-all card-glow">
                    <CardHeader>
                      <CardTitle className="text-lg">{plan.tier}</CardTitle>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-accent">{plan.price}€</span>
                        <span className="text-muted-foreground">/mois</span>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col gap-6">
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-1 border-b border-border">
                          <span className="text-muted-foreground">🧠 RAM</span>
                          <span className="font-semibold">{plan.ram}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-border">
                          <span className="text-muted-foreground">🔧 Processeur</span>
                          <span className="font-semibold">{plan.cores}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-muted-foreground">💾 Stockage</span>
                          <span className="font-semibold">{plan.storage}</span>
                        </div>
                      </div>

                      <div className="space-y-2 flex-1">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex gap-2 items-start">
                            <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Button
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-accent/50 btn-premium"
                        onClick={() => handleCommander(category.name, plan.tier, plan.price)}
                      >
                        Commander
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

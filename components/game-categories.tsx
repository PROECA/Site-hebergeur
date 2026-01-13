import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gamepad2, Wind, Zap, Cpu, Shirt, Dices } from "lucide-react"

const games = [
  {
    id: "gmod",
    title: "Garry's Mod",
    description: "Serveurs optimisés pour les gamemodes populaires",
    icon: Gamepad2,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "minecraft",
    title: "Minecraft",
    description: "Hébergement fluide sans se ruiner",
    icon: Cpu,
    color: "from-green-400 to-green-600",
  },
  {
    id: "survival",
    title: "Jeux de Survie",
    description: "ARK, Rust, DayZ, Palworld et plus",
    icon: Wind,
    color: "from-amber-500 to-amber-600",
  },
  {
    id: "racing",
    title: "Assetto Corsa",
    description: "Infrastructure pro pour les courses",
    icon: Zap,
    color: "from-orange-500 to-orange-600",
  },
  {
    id: "redm",
    title: "RedM",
    description: "L'univers du Far West enfin accessible à petit prix",
    icon: Shirt,
    color: "from-red-500 to-red-600",
  },
  {
    id: "fivem",
    title: "FiveM",
    description: "La puissance au meilleur prix pour vos serveurs RP",
    icon: Dices,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "life",
    title: "Nova Life",
    description: "Serveurs robustes pour les simulateurs de vie",
    icon: Gamepad2,
    color: "from-cyan-500 to-cyan-600",
  },
]

export default function GameCategories() {
  return (
    <section id="games" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse-glow"></div>
      <div
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">Jeux supportés</h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            Des serveurs optimisés et performants pour tous vos jeux préférés
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game, index) => {
            const Icon = game.icon
            return (
              <div key={game.id} className="animate-fadeInUp" style={{ animationDelay: `${0.1 + index * 0.08}s` }}>
                <Card className="border-border bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 overflow-hidden group h-full">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${game.color} flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{game.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{game.description}</p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>

        <div
          className="mt-12 p-6 bg-gradient-to-r from-card to-card/50 border border-accent/30 rounded-lg animate-fadeInUp"
          style={{ animationDelay: "0.8s" }}
        >
          <h3 className="text-lg font-bold mb-2 text-accent">🤖 Bot Discord</h3>
          <p className="text-muted-foreground">
            Ton bot en ligne 24h/24 et 7j/7 pour le prix d'un café. À partir de 0,50€/mois!
          </p>
        </div>
      </div>
    </section>
  )
}

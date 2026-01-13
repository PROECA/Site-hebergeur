import { Header } from "@/components/header"
import Hero from "@/components/hero"
import GameCategories from "@/components/game-categories"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <AnimatedBackground />

      <div className="fixed top-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div
        className="fixed bottom-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="fixed top-1/2 right-1/4 w-48 h-48 bg-accent/3 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDelay: "4s" }}
      />

      <Header />
      <Hero />
      <GameCategories />
      <Pricing />
      <Footer />
    </div>
  )
}

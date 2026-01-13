import { Header } from "@/components/header"
import Hero from "@/components/hero"
import GameCategories from "@/components/game-categories"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <GameCategories />
      <Pricing />
      <Footer />
    </div>
  )
}

import { Header } from "@/components/header"
import Hero from "@/components/hero"
import GameCategories from "@/components/game-categories"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <GameCategories />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

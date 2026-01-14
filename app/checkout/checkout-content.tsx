"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CheckoutContent() {
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null)

  const game = searchParams.get("game") || "Unknown"
  const tier = searchParams.get("tier") || "Unknown"
  const price = searchParams.get("price") || "0"

  const handlePayPal = async () => {
    setIsLoading(true)
    try {
      const response = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          game,
          tier,
          price: Number.parseFloat(price),
        }),
      })

      const { approveUrl } = await response.json()
      if (approveUrl) {
        window.location.href = approveUrl
      }
    } catch (error) {
      console.error("Payment error:", error)
      alert("Erreur lors de la création du paiement")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle>
              Commande - {game} {tier}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Jeu</p>
              <p className="font-semibold">{game}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Offre</p>
              <p className="font-semibold">{tier}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Prix</p>
              <p className="text-2xl font-bold text-accent">{price}€/mois</p>
            </div>
            <Button onClick={handlePayPal} disabled={isLoading} className="w-full bg-accent hover:bg-accent/90">
              {isLoading ? "Chargement..." : "Payer avec PayPal"}
            </Button>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

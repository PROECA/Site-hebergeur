"use client"

import { useSearchParams } from "next/navigation"
import { useState } from "react"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Server, CreditCard, Mail } from "lucide-react"

export default function CheckoutContent() {
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [serverName, setServerName] = useState("")

  const game = searchParams.get("game") || "Unknown"
  const tier = searchParams.get("tier") || "Unknown"
  const price = searchParams.get("price") || "0"

  const planKey = `${game.toLowerCase().replace(/\s+/g, "")}-${tier.toLowerCase()}`

  const handlePayPal = async () => {
    if (!email) {
      alert("Veuillez entrer votre email")
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/paypal/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          game,
          tier,
          price: Number.parseFloat(price),
          email,
          serverName: serverName || `${game}-Server`,
          planKey,
        }),
      })

      const data = await response.json()
      if (data.approveUrl) {
        // Stocker les infos dans localStorage pour les récupérer après paiement
        localStorage.setItem(
          "pendingOrder",
          JSON.stringify({
            email,
            serverName: serverName || `${game}-Server`,
            game,
            tier,
            planKey,
          }),
        )
        window.location.href = data.approveUrl
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
        <Card className="max-w-lg mx-auto border-accent/20">
          <CardHeader className="border-b border-accent/10">
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-accent" />
              Finaliser votre commande
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            {/* Récapitulatif */}
            <div className="bg-accent/5 rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Jeu</span>
                <span className="font-semibold">{game}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Offre</span>
                <span className="font-semibold">{tier}</span>
              </div>
              <div className="flex justify-between border-t border-accent/10 pt-3">
                <span className="text-muted-foreground">Total</span>
                <span className="text-2xl font-bold text-accent">{price}€/mois</span>
              </div>
            </div>

            {/* Formulaire */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email (requis)
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-accent/20 focus:border-accent"
                />
                <p className="text-xs text-muted-foreground">
                  Vos identifiants de connexion au panel seront envoyés à cette adresse
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="serverName" className="flex items-center gap-2">
                  <Server className="w-4 h-4" />
                  Nom du serveur (optionnel)
                </Label>
                <Input
                  id="serverName"
                  type="text"
                  placeholder={`${game}-Server`}
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                  className="border-accent/20 focus:border-accent"
                />
              </div>
            </div>

            {/* Bouton PayPal */}
            <Button
              onClick={handlePayPal}
              disabled={isLoading || !email}
              className="w-full h-12 bg-[#0070ba] hover:bg-[#003087] text-white font-semibold"
            >
              {isLoading ? (
                "Redirection vers PayPal..."
              ) : (
                <span className="flex items-center gap-2">Payer avec PayPal</span>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Paiement sécurisé via PayPal. Votre serveur sera créé automatiquement après le paiement.
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, CheckCircle, XCircle, Server, Key, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type ServerResult = {
  success: boolean
  server?: {
    id: number
    name: string
    identifier: string
  }
  user?: {
    id: number
    email: string
    username: string
    password?: string
  }
  panelUrl?: string
  error?: string
}

export default function PaymentCallbackContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<"processing" | "success" | "error">("processing")
  const [message, setMessage] = useState("Vérification du paiement...")
  const [serverResult, setServerResult] = useState<ServerResult | null>(null)

  const token = searchParams.get("token")
  const payerId = searchParams.get("PayerID")

  useEffect(() => {
    if (!token || !payerId) {
      setStatus("error")
      setMessage("Paramètres de paiement manquants")
      return
    }

    const processPayment = async () => {
      try {
        // Étape 1: Capturer le paiement PayPal
        setMessage("Capture du paiement en cours...")

        const captureResponse = await fetch("/api/paypal/capture-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ orderId: token }),
        })

        const captureData = await captureResponse.json()

        if (!captureData.success) {
          throw new Error(captureData.error || "Erreur lors de la capture du paiement")
        }

        // Étape 2: Créer le serveur Pterodactyl
        setMessage("Création de votre serveur...")

        const { email, serverName, game, planKey } = captureData.orderInfo

        const serverResponse = await fetch("/api/pterodactyl/create-server", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            gameType: game,
            planKey,
            serverName,
            paymentId: token,
          }),
        })

        const serverData = await serverResponse.json()

        if (!serverData.success) {
          throw new Error(serverData.error || "Erreur lors de la création du serveur")
        }

        setServerResult(serverData)
        setStatus("success")
        setMessage("Votre serveur a été créé avec succès!")
      } catch (error) {
        console.error("Payment processing error:", error)
        setStatus("error")
        setMessage(error instanceof Error ? error.message : "Une erreur est survenue")
      }
    }

    processPayment()
  }, [token, payerId])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-lg mx-auto border-accent/20">
          <CardHeader className="text-center border-b border-accent/10">
            {status === "processing" && (
              <>
                <Loader2 className="w-16 h-16 text-accent mx-auto animate-spin mb-4" />
                <CardTitle>Traitement en cours</CardTitle>
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-green-500">Serveur créé avec succès!</CardTitle>
              </>
            )}
            {status === "error" && (
              <>
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-red-500">Erreur</CardTitle>
              </>
            )}
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <p className="text-center text-muted-foreground">{message}</p>

            {status === "success" && serverResult && (
              <div className="space-y-4">
                {/* Infos Serveur */}
                <div className="bg-accent/10 rounded-lg p-4 space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Server className="w-4 h-4 text-accent" />
                    Informations du serveur
                  </h3>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nom</span>
                      <span className="font-mono">{serverResult.server?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Identifiant</span>
                      <span className="font-mono">{serverResult.server?.identifier}</span>
                    </div>
                  </div>
                </div>

                {/* Infos Connexion */}
                <div className="bg-green-500/10 rounded-lg p-4 space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Key className="w-4 h-4 text-green-500" />
                    Identifiants de connexion
                  </h3>
                  <div className="text-sm space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email</span>
                      <span className="font-mono">{serverResult.user?.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nom d'utilisateur</span>
                      <span className="font-mono">{serverResult.user?.username}</span>
                    </div>
                    {serverResult.user?.password && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Mot de passe</span>
                        <span className="font-mono bg-yellow-500/20 px-2 py-1 rounded">
                          {serverResult.user?.password}
                        </span>
                      </div>
                    )}
                  </div>
                  {serverResult.user?.password && (
                    <p className="text-xs text-yellow-500 mt-2">Notez ce mot de passe! Il ne sera plus affiché.</p>
                  )}
                </div>

                {/* Lien Panel */}
                <div className="bg-accent/10 rounded-lg p-4">
                  <h3 className="font-semibold flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-accent" />
                    Accéder au panel
                  </h3>
                  <a
                    href={serverResult.panelUrl || "https://panel.nexahost.m1x.ovh"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline text-sm"
                  >
                    {serverResult.panelUrl || "https://panel.nexahost.m1x.ovh"}
                  </a>
                </div>

                <Button asChild className="w-full bg-accent hover:bg-accent/90">
                  <a href={serverResult.panelUrl || "https://panel.nexahost.m1x.ovh"} target="_blank" rel="noreferrer">
                    Accéder à mon serveur
                  </a>
                </Button>
              </div>
            )}

            {status === "error" && (
              <div className="space-y-4">
                <p className="text-sm text-center text-muted-foreground">
                  Si vous avez été débité, veuillez contacter le support sur Discord.
                </p>
                <div className="flex gap-2">
                  <Button asChild variant="outline" className="flex-1 bg-transparent">
                    <Link href="/">Retour à l'accueil</Link>
                  </Button>
                  <Button asChild className="flex-1 bg-accent hover:bg-accent/90">
                    <a href="https://discord.gg/BAzdvJDVXq" target="_blank" rel="noreferrer">
                      Contacter le support
                    </a>
                  </Button>
                </div>
              </div>
            )}

            {status === "success" && (
              <Link href="/">
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  Retour à l'accueil
                </Button>
              </Link>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

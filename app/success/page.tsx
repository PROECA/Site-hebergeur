import { Header } from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-accent" />
            </div>
            <CardTitle>Paiement réussi!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Votre serveur est en cours de création. Vous recevrez les détails par email dans quelques minutes.
            </p>
            <p className="text-sm text-muted-foreground">
              Vous pouvez accéder à votre serveur sur le panel:{" "}
              <a href="https://panel.nexahost.m1x.ovh" className="text-accent hover:underline">
                panel.nexahost.m1x.ovh
              </a>
            </p>
            <Link href="/">
              <Button className="w-full bg-accent hover:bg-accent/90">Retour à l'accueil</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Mail } from "lucide-react"

export default function SignUpSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/nexahost-logo.png" alt="Nexa-Host" width={50} height={50} className="rounded-lg" />
            <span className="text-2xl font-bold text-accent">Nexa-Host</span>
          </Link>

          <Card className="w-full bg-card/50 border-accent/20">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <CardTitle className="text-2xl">Compte cree avec succes !</CardTitle>
              <CardDescription>Verifiez votre email pour confirmer votre compte</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Nous vous avons envoye un email de confirmation. Cliquez sur le lien dans l&apos;email pour activer
                votre compte et acceder a votre espace client.
              </p>
              <Link href="/auth/login" className="text-accent hover:underline text-sm">
                Retour a la connexion
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

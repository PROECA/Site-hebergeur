import { Header } from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Conditions d'Utilisation - Nexa-Host",
  description: "Conditions d'utilisation de Nexa-Host",
}

export default function ConditionsUtilisation() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Conditions d'Utilisation</h1>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptation des conditions</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  En accédant à et en utilisant le site Nexa-Host, vous acceptez d'être lié par ces Conditions
                  d'Utilisation. Si vous ne les acceptez pas, veuillez cesser d'utiliser le site immédiatement.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Utilisation du service</h2>
              <div className="text-muted-foreground space-y-2">
                <p>Vous vous engagez à :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Utiliser le service de manière conforme à la loi</li>
                  <li>Ne pas utiliser le service à des fins illégales ou nuisibles</li>
                  <li>Ne pas contourner ou désactiver les mesures de sécurité</li>
                  <li>Respecter les droits de propriété intellectuelle</li>
                  <li>Ne pas faire de spam ou harcèlement</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Comptes utilisateur</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Si vous créez un compte utilisateur, vous êtes responsable de maintenir la confidentialité de vos
                  identifiants et de votre mot de passe. Vous acceptez l'entière responsabilité de toutes les activités
                  effectuées sous votre compte.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Serveurs et contenu</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  En hébergeant votre serveur chez Nexa-Host, vous déclarez que le contenu que vous hébergez est légal
                  et n'enfreint pas les droits de tiers. Vous êtes entièrement responsable du contenu de votre serveur.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Suspension et résiliation</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Nexa-Host se réserve le droit de suspendre ou de résilier votre service si vous violez ces Conditions
                  d'Utilisation ou la loi, sans notification préalable et sans remboursement.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Limitation de responsabilité</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  DANS TOUTE LA MESURE PERMISE PAR LA LOI, NEXA-HOST NE SERA PAS RESPONSABLE DE TOUT DOMMAGE INDIRECT,
                  SPÉCIAL, CONSÉCUTIF OU PUNITIF, Y COMPRIS LES PERTES DE PROFIT, MÊME SI ELLE A ÉTÉ AVISÉE DE LA
                  POSSIBILITÉ DE TELS DOMMAGES.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Garantie</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Le service est fourni « tel quel » sans aucune garantie, expresse ou implicite. Nexa-Host ne garantit
                  pas que le service sera ininterrompu ou exempt d'erreurs.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Frais et paiement</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Les frais d'hébergement sont facturés selon la tarification affichée sur le site. Le paiement doit
                  être effectué conformément aux conditions de votre plan d'hébergement. Le non-paiement peut entraîner
                  la suspension de votre service.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Modifications des conditions</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Nexa-Host peut modifier ces Conditions d'Utilisation à tout moment. Les modifications prendront effet
                  dès leur publication. Votre utilisation continue du service après les modifications constitue votre
                  acceptation des nouvelles conditions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Pour toute question concernant ces Conditions d'Utilisation, veuillez nous contacter à :
                  support@nexa-host.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

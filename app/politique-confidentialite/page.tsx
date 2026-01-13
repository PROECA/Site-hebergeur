import { Header } from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Politique de Confidentialité - Nexa-Host",
  description: "Politique de confidentialité de Nexa-Host",
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Nexa-Host (« nous », « notre », « nos ») s'engage à protéger votre vie privée. Cette Politique de
                  Confidentialité explique comment nous collectons, utilisons, divulguons et traitons vos données
                  personnelles lorsque vous visitez notre site web.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Données collectées</h2>
              <div className="text-muted-foreground space-y-2">
                <p>Nous pouvons collecter les données suivantes :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Informations de contact (nom, email, adresse)</li>
                  <li>Données de navigation (adresse IP, navigateur, pages visitées)</li>
                  <li>Données de serveur et de commande (détails de la commande, configuration serveur)</li>
                  <li>Cookies et technologies de suivi similaires</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Utilisation des données</h2>
              <div className="text-muted-foreground space-y-2">
                <p>Vos données personnelles sont utilisées pour :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Traiter et gérer vos commandes</li>
                  <li>Communiquer avec vous concernant votre service</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Analyser l'utilisation du site (analytics)</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Partage des données</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Nous ne partageons pas vos données personnelles avec des tiers, sauf si cela est nécessaire pour :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fournir nos services</li>
                  <li>Respecter la loi</li>
                  <li>Protéger nos droits et votre sécurité</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Notre site utilise des cookies pour améliorer votre expérience utilisateur. Vous pouvez configurer
                  votre navigateur pour refuser les cookies, bien que cela puisse affecter certaines fonctionnalités du
                  site.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Sécurité des données</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Nous mettons en place des mesures de sécurité raisonnables pour protéger vos données personnelles
                  contre l'accès non autorisé, l'altération, la divulgation ou la destruction.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Vos droits</h2>
              <div className="text-muted-foreground space-y-2">
                <p>Conformément à la loi applicable, vous avez le droit de :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Accéder à vos données personnelles</li>
                  <li>Corriger vos données inexactes</li>
                  <li>Demander la suppression de vos données</li>
                  <li>Vous opposer au traitement de vos données</li>
                  <li>Demander la portabilité de vos données</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Modifications de cette politique</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Nexa-Host peut modifier cette Politique de Confidentialité à tout moment. Les modifications prendront
                  effet dès leur publication sur le site. Votre utilisation continue du site après les modifications
                  signifie votre acceptation des nouvelles conditions.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Si vous avez des questions ou des préoccupations concernant cette Politique de Confidentialité,
                  veuillez nous contacter à : support@nexa-host.com
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

import { Header } from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Politique de confidentialite - Net Vora",
}

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Politique de confidentialite</h1>
          <p className="text-muted-foreground mb-10">Derniere mise a jour : 10 fevrier 2026</p>

          <div className="space-y-8 text-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
              <p>
                Chez Net Vora, nous prenons la protection de vos donnees au serieux. Cette page vous explique simplement quelles informations nous collectons, pourquoi nous les collectons, et comment nous les utilisons.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Quelles donnees collectons-nous ?</h2>
              <p>Lorsque vous utilisez nos services, nous pouvons etre amenes a collecter :</p>
              <ul className="mt-3 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Votre adresse e-mail, lors de la creation de votre compte ou d{"'"}une commande</li>
                <li>Votre nom d{"'"}utilisateur sur notre plateforme</li>
                <li>Les informations techniques liees a votre connexion (adresse IP, type de navigateur)</li>
                <li>L{"'"}historique de vos commandes et services actifs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Pourquoi collectons-nous ces donnees ?</h2>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>Pour creer et gerer votre compte client</li>
                <li>Pour traiter vos commandes et mettre en place vos serveurs</li>
                <li>Pour vous envoyer des informations importantes concernant votre service</li>
                <li>Pour ameliorer la qualite de nos services</li>
                <li>Pour assurer la securite de notre plateforme</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Partage de vos donnees</h2>
              <p>
                Nous ne vendons jamais vos donnees personnelles. Elles peuvent etre partagees uniquement avec nos prestataires techniques (hebergement, paiement) dans le cadre strict de la fourniture de nos services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Duree de conservation</h2>
              <p>
                Vos donnees sont conservees pendant toute la duree de votre utilisation de nos services, puis supprimees dans un delai de 12 mois apres la fermeture de votre compte, sauf obligation legale contraire.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Vos droits</h2>
              <p>Conformement au RGPD, vous disposez des droits suivants :</p>
              <ul className="mt-3 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Droit d{"'"}acces a vos donnees personnelles</li>
                <li>Droit de rectification en cas d{"'"}erreur</li>
                <li>Droit de suppression de vos donnees</li>
                <li>Droit a la portabilite de vos donnees</li>
                <li>Droit d{"'"}opposition au traitement</li>
              </ul>
              <p className="mt-3">
                Pour exercer ces droits, contactez-nous a{" "}
                <a href="mailto:contact@nexa-host.zk-web.fr" className="text-accent hover:underline">contact@nexa-host.zk-web.fr</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
              <p>
                Nous utilisons des cookies strictement necessaires au fonctionnement du site (authentification, preferences). Aucun cookie publicitaire n{"'"}est utilise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Modifications</h2>
              <p>
                Nous nous reservons le droit de modifier cette politique a tout moment. Les changements importants seront communiques par e-mail ou via une notification sur le site.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

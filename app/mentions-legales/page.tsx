import Link from "next/link"
import { Header } from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions legales - Net Vora",
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Mentions legales</h1>
          <p className="text-muted-foreground mb-10">Derniere mise a jour : 10 fevrier 2026</p>

          <div className="space-y-8 text-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Editeur du site</h2>
              <p>Le site netvora.pro est edite par l{"'"}association Net Vora, declaree au Registre National des Associations.</p>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                <li>Denomination : Net Vora</li>
                <li>Numero SIREN : 999 288 335</li>
                <li>Numero SIRET : 999 288 335 00014</li>
                <li>Numero RNA : W771022922</li>
                <li>Adresse e-mail : <a href="mailto:contact@nexa-host.zk-web.fr" className="text-accent hover:underline">contact@nexa-host.zk-web.fr</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Directeur de la publication</h2>
              <p>Le directeur de la publication est le representant legal de l{"'"}association Net Vora.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Hebergement du site</h2>
              <p>Ce site est heberge par :</p>
              <ul className="mt-3 space-y-1 text-muted-foreground">
                <li>Vercel Inc.</li>
                <li>440 N Barranca Ave #4133, Covina, CA 91723, Etats-Unis</li>
                <li>Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">vercel.com</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Propriete intellectuelle</h2>
              <p>
                L{"'"}ensemble du contenu de ce site (textes, images, logo, charte graphique) est la propriete exclusive de Net Vora, sauf indication contraire. Toute reproduction, meme partielle, sans autorisation prealable est interdite.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Donnees personnelles</h2>
              <p>
                Les informations collectees via ce site sont traitees conformement a notre{" "}
                <Link href="/politique-confidentialite" className="text-accent hover:underline">politique de confidentialite</Link>.
                Vous disposez d{"'"}un droit d{"'"}acces, de rectification et de suppression de vos donnees en nous contactant a{" "}
                <a href="mailto:contact@nexa-host.zk-web.fr" className="text-accent hover:underline">contact@nexa-host.zk-web.fr</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Limitation de responsabilite</h2>
              <p>
                Net Vora met tout en oeuvre pour assurer l{"'"}exactitude des informations publiees sur ce site. Toutefois, nous ne pouvons garantir l{"'"}exhaustivite ou l{"'"}absence d{"'"}erreur. L{"'"}utilisation des informations se fait sous la responsabilite de l{"'"}utilisateur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <p>
                Pour toute question relative a ces mentions legales, vous pouvez nous ecrire a{" "}
                <a href="mailto:contact@nexa-host.zk-web.fr" className="text-accent hover:underline">contact@nexa-host.zk-web.fr</a>{" "}
                ou nous retrouver sur notre <a href="https://discord.gg/BAzdvJDVXq" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">serveur Discord</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

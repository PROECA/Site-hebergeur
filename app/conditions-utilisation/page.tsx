import { Header } from "@/components/header"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conditions generales d'utilisation - Net Vora",
}

export default function ConditionsUtilisation() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">{"Conditions generales d'utilisation"}</h1>
          <p className="text-muted-foreground mb-10">Derniere mise a jour : 10 fevrier 2026</p>

          <div className="space-y-8 text-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Article 1 - Objet</h2>
              <p>
                Les presentes conditions generales regissent l{"'"}utilisation des services proposes par Net Vora, association immatriculee sous le numero SIREN 999 288 335. En utilisant nos services, vous acceptez sans reserve l{"'"}ensemble de ces conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Article 2 - Description des services</h2>
              <p>
                Net Vora propose des services d{"'"}hebergement de serveurs de jeux video. Nos offres comprennent la mise a disposition de ressources materielles (processeur, memoire, stockage) et d{"'"}un panneau de gestion pour administrer votre serveur.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Article 3 - Inscription et compte</h2>
              <p>
                Pour utiliser nos services, vous devez creer un compte en fournissant des informations exactes et a jour. Vous etes responsable de la confidentialite de vos identifiants de connexion. Toute activite realisee depuis votre compte est consideree comme effectuee par vous.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Article 4 - Tarification et paiement</h2>
              <p>Nos tarifs sont indiques en euros TTC sur notre site. Le paiement s{"'"}effectue :</p>
              <ul className="mt-3 space-y-2 text-muted-foreground list-disc list-inside">
                <li>A la commande, pour la premiere periode de service</li>
                <li>De maniere recurrente (mensuelle) pour les renouvellements</li>
              </ul>
              <p className="mt-3">
                En cas de non-paiement a echeance, le service pourra etre suspendu apres un delai de grace raisonnable. Nous vous enverrons un rappel par e-mail avant toute suspension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Article 5 - Utilisation acceptable</h2>
              <p>Vous vous engagez a ne pas utiliser nos services pour :</p>
              <ul className="mt-3 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Toute activite illegale ou contraire a l{"'"}ordre public</li>
                <li>La diffusion de contenus haineux, discriminatoires ou violents</li>
                <li>Des attaques informatiques (DDoS, phishing, etc.)</li>
                <li>Le minage de crypto-monnaies sans autorisation prealable</li>
                <li>La revente de nos services sans accord ecrit</li>
              </ul>
              <p className="mt-3">
                Tout manquement pourra entrainer la suspension ou la resiliation de votre service sans preavis ni remboursement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Article 6 - Disponibilite et support</h2>
              <p>
                Nous faisons notre possible pour garantir une disponibilite de 99,9% sur l{"'"}ensemble de nos services. En cas de panne, notre equipe intervient dans les meilleurs delais. Le support est accessible via notre serveur Discord et par e-mail.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Article 7 - Sauvegardes</h2>
              <p>
                Bien que nous effectuions des sauvegardes regulieres, il est de votre responsabilite de conserver vos propres copies de sauvegarde. Net Vora ne pourra etre tenu responsable en cas de perte de donnees.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Article 8 - Resiliation</h2>
              <p>
                Vous pouvez resilier votre abonnement a tout moment depuis votre espace client ou en nous contactant. La resiliation prend effet a la fin de la periode de facturation en cours. Aucun remboursement au prorata ne sera effectue.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Article 9 - Limitation de responsabilite</h2>
              <p>
                Net Vora ne saurait etre tenue responsable des dommages indirects resultant de l{"'"}utilisation ou de l{"'"}impossibilite d{"'"}utiliser ses services. Notre responsabilite totale est limitee au montant des sommes versees par le client au cours des 3 derniers mois.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Article 10 - Droit applicable</h2>
              <p>
                Les presentes conditions sont soumises au droit francais. En cas de litige, les parties s{"'"}engagent a rechercher une solution amiable avant toute action judiciaire. A defaut, les tribunaux competents seront ceux du siege social de l{"'"}association.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact</h2>
              <p>
                Pour toute question concernant ces conditions, contactez-nous a{" "}
                <a href="mailto:contact@nexa-host.zk-web.fr" className="text-accent hover:underline">contact@nexa-host.zk-web.fr</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

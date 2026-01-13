import { Header } from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Mentions Légales - Nexa-Host",
  description: "Mentions légales de Nexa-Host",
}

export default function MentionsLegales() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Éditeur du site</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Raison sociale :</strong> Nexa-Host
                </p>
                <p>
                  <strong>Numéro SIREN :</strong> 999288335
                </p>
                <p>
                  <strong>Numéro SIRET :</strong> 99928833500014
                </p>
                <p>
                  <strong>RNA :</strong> W771022922
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Responsable de publication</h2>
              <div className="text-muted-foreground space-y-2">
                <p>Le site Nexa-Host est édité et maintenu par l'équipe Nexa-Host.</p>
                <p>
                  <strong>Email :</strong> support@nexa-host.com
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Hébergeur</h2>
              <div className="text-muted-foreground space-y-2">
                <p>Ce site est heberger par Nexa-Host</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Conditions d'utilisation</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  L'utilisateur s'engage à utiliser le site Nexa-Host de manière conforme à la loi et aux présentes
                  mentions légales. Toute utilisation du site à des fins illégales ou contraires à l'ordre public est
                  interdite.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Droits de propriété intellectuelle</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Tous les contenus du site (textes, images, logos, vidéos, graphiques, etc.) sont la propriété
                  exclusive de Nexa-Host ou de ses partenaires et sont protégés par les lois relatives aux droits
                  d'auteur et à la propriété intellectuelle.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Limitation de responsabilité</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Nexa-Host ne peut être tenue responsable des dommages directs ou indirects résultant de l'accès ou de
                  l'utilisation du site, notamment les pertes de données, les interruptions de service ou les erreurs
                  techniques.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Modification des conditions</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  Nexa-Host se réserve le droit de modifier ces mentions légales à tout moment. Les utilisateurs sont
                  invités à consulter régulièrement cette page pour se tenir informés des éventuelles modifications.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
              <div className="text-muted-foreground space-y-2">
                <p>Pour toute question concernant ces mentions légales, veuillez contacter : support@nexa-host.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

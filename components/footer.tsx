import Link from "next/link"
import { Mail, MessageSquare } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <span className="font-bold text-lg text-foreground mb-4 block">Net Vora</span>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Hebergement de serveurs de jeux performant et accessible. Infrastructure fiable basee en France.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Nos offres</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#services" className="hover:text-foreground transition">Tous les services</Link></li>
              <li><Link href="#pricing" className="hover:text-foreground transition">Grille tarifaire</Link></li>
              <li><a href="https://nexahost.m1x.ovh/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">Boutique</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Liens utiles</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://discord.gg/Wkk4qFxpcm" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">Discord</a></li>
              <li><a href="http://89.187.7.128/auth/login" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition">Panel de gestion</a></li>
              <li><Link href="#faq" className="hover:text-foreground transition">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="https://discord.gg/Wkk4qFxpcm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition">
                <MessageSquare className="w-4 h-4" /> Discord
              </a>
              <a href="mailto:contact@nexa-host.zk-web.fr" className="flex items-center gap-2 hover:text-foreground transition">
                <Mail className="w-4 h-4" /> contact@nexa-host.zk-web.fr
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>2026 Net Vora. Tous droits reserves. SIREN : 999288335</p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-foreground transition">Mentions legales</Link>
              <Link href="/politique-confidentialite" className="hover:text-foreground transition">Confidentialite</Link>
              <Link href="/conditions-utilisation" className="hover:text-foreground transition">CGU</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

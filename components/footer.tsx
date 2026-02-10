"use client"

import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-accent mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-accent-foreground">NV</span>
              </div>
              <span>Net Vora</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Hebergement de serveurs de jeux performant et accessible. Une infrastructure fiable pour votre communaute.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Nos offres</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#games" className="hover:text-accent transition">Tous les jeux</Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-accent transition">Grille tarifaire</Link>
              </li>
              <li>
                <a href="https://nexahost.m1x.ovh/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                  Commander un serveur
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Ressources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="https://discord.gg/BAzdvJDVXq" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                  Serveur Discord
                </a>
              </li>
              <li>
                <a href="https://panel.nexahost.m1x.ovh" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
                  Panel de gestion
                </a>
              </li>
              <li>
                <a href="mailto:contact@nexa-host.zk-web.fr" className="hover:text-accent transition">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Communaute</h4>
            <div className="space-y-3">
              <button
                onClick={() => window.open("https://discord.gg/BAzdvJDVXq", "_blank")}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition"
              >
                <MessageCircle className="w-4 h-4" />
                Discord
              </button>
              <a
                href="mailto:contact@nexa-host.zk-web.fr"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition"
              >
                <Mail className="w-4 h-4" />
                contact@nexa-host.zk-web.fr
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>2026 Net Vora. Tous droits reserves. SIREN : 999288335</p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-accent transition">Mentions legales</Link>
              <Link href="/politique-confidentialite" className="hover:text-accent transition">Confidentialite</Link>
              <Link href="/conditions-utilisation" className="hover:text-accent transition">CGU</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

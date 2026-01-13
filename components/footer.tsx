"use client"

import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-lg text-accent mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold">NX</span>
              </div>
              <span>Nexa-Host</span>
            </div>
            <p className="text-muted-foreground text-sm">Hébergement haute performance pour vos serveurs de jeux</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Produits</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#games" className="hover:text-accent transition">
                  Tous les jeux
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-accent transition">
                  Tarification
                </Link>
              </li>
              <li>
                <a
                  href="https://nexahost.m1x.ovh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition"
                >
                  Commander
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://discord.gg/BAzdvJDVXq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://panel.nexahost.m1x.ovh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition"
                >
                  Control Panel
                </a>
              </li>
              <li>
                <a href="mailto:support@nexa-host.com" className="hover:text-accent transition">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Rejoignez-nous</h4>
            <div className="space-y-2">
              <button
                onClick={() => window.open("https://discord.gg/BAzdvJDVXq", "_blank")}
                className="flex items-center gap-2 text-sm hover:text-accent transition"
              >
                <MessageCircle className="w-4 h-4" />
                Discord
              </button>
              <button
                onClick={() => (window.location.href = "mailto:support@nexa-host.com")}
                className="flex items-center gap-2 text-sm hover:text-accent transition"
              >
                <Mail className="w-4 h-4" />
                Email
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; 2026 Nexa-Host. Tous droits réservés.</p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="hover:text-accent transition">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="hover:text-accent transition">
                Politique de confidentialité
              </Link>
              <Link href="/conditions-utilisation" className="hover:text-accent transition">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

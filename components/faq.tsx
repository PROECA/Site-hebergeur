"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Comment fonctionne la livraison de mon serveur ?",
    answer: "Votre serveur est livre automatiquement apres votre commande sur notre boutique. Vous recevez vos identifiants de connexion au panel par email en quelques minutes.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons PayPal et les virements bancaires. Toutes les transactions sont securisees.",
  },
  {
    question: "Puis-je changer d'offre en cours de route ?",
    answer: "Oui, vous pouvez upgrader ou downgrader votre offre a tout moment depuis votre espace client. La difference est calculee au prorata.",
  },
  {
    question: "Quel est le taux de disponibilite de vos serveurs ?",
    answer: "Nous garantissons un uptime de 99.9% sur l'ensemble de notre infrastructure. Nos serveurs sont heberges dans des datacenters certifies en France.",
  },
  {
    question: "Comment contacter le support ?",
    answer: "Notre equipe est disponible 24h/24 et 7j/7 sur notre serveur Discord. Vous pouvez egalement nous envoyer un email a contact@nexa-host.zk-web.fr.",
  },
  {
    question: "Proposez-vous une protection DDoS ?",
    answer: "Oui, tous nos serveurs beneficient d'une protection anti-DDoS incluse dans chaque offre, sans cout supplementaire.",
  },
  {
    question: "Est-ce que je peux installer mes propres mods ?",
    answer: "Absolument. Vous avez un acces complet via le panel Pterodactyl pour installer vos mods, plugins, scripts et configurations personnalisees.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Questions frequentes</h2>
          <p className="text-muted-foreground text-lg">
            Tout ce que vous devez savoir avant de commander.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden bg-card">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-secondary/50 transition"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

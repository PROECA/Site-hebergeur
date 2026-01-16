import { type NextRequest, NextResponse } from "next/server"
import { createPterodactylServer, getOrCreatePterodactylUser } from "@/lib/pterodactyl"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, gameType, planKey, serverName, paymentId } = body

    if (!email || !gameType || !planKey) {
      return NextResponse.json({ error: "Paramètres manquants" }, { status: 400 })
    }

    console.log("[Pterodactyl] Création serveur pour:", email, gameType, planKey)

    // 1. Créer ou récupérer l'utilisateur Pterodactyl
    const user = await getOrCreatePterodactylUser(email)
    console.log("[Pterodactyl] Utilisateur:", user.id, user.email)

    // 2. Créer le serveur
    const server = await createPterodactylServer({
      userId: user.id,
      serverName: serverName || `${gameType}-${Date.now()}`,
      gameType,
      planKey,
      email,
    })

    console.log("[Pterodactyl] Serveur créé:", server.id, server.name)

    return NextResponse.json({
      success: true,
      server: {
        id: server.id,
        name: server.name,
        identifier: server.identifier,
      },
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        password: user.password, // Seulement si nouvel utilisateur
      },
      panelUrl: process.env.PTERODACTYL_URL || "https://panel.nexahost.m1x.ovh",
    })
  } catch (error) {
    console.error("[Pterodactyl] Erreur:", error)
    return NextResponse.json({ error: error instanceof Error ? error.message : "Erreur interne" }, { status: 500 })
  }
}

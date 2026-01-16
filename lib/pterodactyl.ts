// Configuration Pterodactyl pour Nexa-Host
// Panel: https://panel.nexahost.m1x.ovh

export const PTERODACTYL_CONFIG = {
  panelUrl: process.env.PTERODACTYL_URL || "https://panel.nexahost.m1x.ovh",
  apiKey: process.env.PTERODACTYL_API_KEY || "",

  // IDs à configurer selon ton panel
  locationId: Number.parseInt(process.env.PTERODACTYL_LOCATION_ID || "1"),
  nodeId: Number.parseInt(process.env.PTERODACTYL_NODE_ID || "1"),
}

// Mapping des jeux vers les Nests et Eggs Pterodactyl
export const GAME_CONFIG: Record<
  string,
  {
    nestId: number
    eggId: number
    dockerImage: string
    startupCommand: string
    defaultPort: number
  }
> = {
  // Nest 1 - Minecraft
  minecraft: {
    nestId: 1,
    eggId: 2, // Paper (meilleur performance)
    dockerImage: "ghcr.io/pterodactyl/yolks:java_17",
    startupCommand: "java -Xms128M -Xmx{{SERVER_MEMORY}}M -jar {{SERVER_JARFILE}}",
    defaultPort: 25565,
  },

  // Nest 2 - Source Engine
  gmod: {
    nestId: 2,
    eggId: 11, // Garrys Mod
    dockerImage: "ghcr.io/pterodactyl/games:source",
    startupCommand:
      "./srcds_run -game garrysmod -console -port {{SERVER_PORT}} +map {{SRCDS_MAP}} +maxplayers {{MAX_PLAYERS}}",
    defaultPort: 27015,
  },
  ark: {
    nestId: 2,
    eggId: 7, // ARK
    dockerImage: "ghcr.io/pterodactyl/games:source",
    startupCommand: "./ShooterGame/Binaries/Linux/ShooterGameServer",
    defaultPort: 7777,
  },

  // Nest 4 - Rust
  rust: {
    nestId: 4,
    eggId: 14, // Rust
    dockerImage: "ghcr.io/pterodactyl/games:rust",
    startupCommand:
      "./RustDedicated -batchmode +server.port {{SERVER_PORT}} +server.level {{LEVEL}} +server.hostname {{HOSTNAME}}",
    defaultPort: 28015,
  },

  // Survival games (utilisent le même config selon le jeu)
  dayz: {
    nestId: 2,
    eggId: 6, // Custom Source Engine
    dockerImage: "ghcr.io/pterodactyl/games:source",
    startupCommand: "./DayZServer",
    defaultPort: 2302,
  },
  palworld: {
    nestId: 2,
    eggId: 6, // Custom Source Engine
    dockerImage: "ghcr.io/pterodactyl/games:source",
    startupCommand: "./PalServer.sh",
    defaultPort: 8211,
  },

  // FiveM / RedM (Custom)
  fivem: {
    nestId: 2,
    eggId: 6, // Custom
    dockerImage: "ghcr.io/pterodactyl/games:source",
    startupCommand: "./run.sh",
    defaultPort: 30120,
  },
  redm: {
    nestId: 2,
    eggId: 6, // Custom
    dockerImage: "ghcr.io/pterodactyl/games:source",
    startupCommand: "./run.sh",
    defaultPort: 30120,
  },

  // Nova Life / Assetto Corsa
  novalife: {
    nestId: 2,
    eggId: 6,
    dockerImage: "ghcr.io/pterodactyl/games:source",
    startupCommand: "./server",
    defaultPort: 7777,
  },
  assettocorsa: {
    nestId: 2,
    eggId: 6,
    dockerImage: "ghcr.io/pterodactyl/games:source",
    startupCommand: "./acServer",
    defaultPort: 9600,
  },

  // Bot Discord (utilise Node.js)
  bot: {
    nestId: 1, // On utilise le nest Minecraft car il a Node
    eggId: 1, // On devra créer un egg custom ou utiliser un générique
    dockerImage: "ghcr.io/pterodactyl/yolks:nodejs_18",
    startupCommand: "npm start",
    defaultPort: 3000,
  },
}

// Mapping des plans vers les ressources
export const PLAN_RESOURCES: Record<
  string,
  {
    memory: number // MB
    disk: number // MB
    cpu: number // %
  }
> = {
  // Minecraft
  "minecraft-starter": { memory: 4096, disk: 0, cpu: 200 }, // NVMe Illimité = 0
  "minecraft-performance": { memory: 10240, disk: 0, cpu: 400 },
  "minecraft-elite": { memory: 20480, disk: 0, cpu: 600 },

  // Gmod
  "gmod-starter": { memory: 4096, disk: 25600, cpu: 200 },
  "gmod-performance": { memory: 8192, disk: 51200, cpu: 300 },
  "gmod-elite": { memory: 16384, disk: 81920, cpu: 400 },

  // FiveM
  "fivem-starter": { memory: 6144, disk: 30720, cpu: 200 },
  "fivem-performance": { memory: 12288, disk: 61440, cpu: 400 },
  "fivem-elite": { memory: 24576, disk: 102400, cpu: 600 },

  // RedM
  "redm-starter": { memory: 8192, disk: 40960, cpu: 200 },
  "redm-performance": { memory: 16384, disk: 81920, cpu: 400 },
  "redm-elite": { memory: 32768, disk: 153600, cpu: 600 },

  // Survival (ARK, Rust, DayZ, Palworld)
  "survival-starter": { memory: 8192, disk: 40960, cpu: 200 },
  "survival-performance": { memory: 16384, disk: 81920, cpu: 400 },
  "survival-elite": { memory: 32768, disk: 122880, cpu: 600 },

  // Assetto Corsa
  "assettocorsa-starter": { memory: 4096, disk: 20480, cpu: 200 },
  "assettocorsa-performance": { memory: 8192, disk: 40960, cpu: 300 },
  "assettocorsa-elite": { memory: 16384, disk: 81920, cpu: 400 },

  // Nova Life
  "novalife-starter": { memory: 8192, disk: 40960, cpu: 200 },
  "novalife-performance": { memory: 16384, disk: 81920, cpu: 400 },
  "novalife-elite": { memory: 32768, disk: 122880, cpu: 600 },

  // Bot Discord
  "bot-starter": { memory: 512, disk: 5120, cpu: 20 },
  "bot-performance": { memory: 2048, disk: 10240, cpu: 100 },
  "bot-elite": { memory: 4096, disk: 20480, cpu: 200 },
}

// Fonction pour créer un serveur via l'API Pterodactyl
export async function createPterodactylServer(params: {
  userId: number // ID utilisateur Pterodactyl
  serverName: string
  gameType: string
  planKey: string
  email: string
}) {
  const { userId, serverName, gameType, planKey, email } = params

  const gameConfig = GAME_CONFIG[gameType.toLowerCase()]
  const resources = PLAN_RESOURCES[planKey]

  if (!gameConfig || !resources) {
    throw new Error(`Configuration non trouvée pour: ${gameType} / ${planKey}`)
  }

  const response = await fetch(`${PTERODACTYL_CONFIG.panelUrl}/api/application/servers`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PTERODACTYL_CONFIG.apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: serverName,
      user: userId,
      nest: gameConfig.nestId,
      egg: gameConfig.eggId,
      docker_image: gameConfig.dockerImage,
      startup: gameConfig.startupCommand,
      environment: {
        SERVER_JARFILE: "server.jar",
        VANILLA_VERSION: "latest",
        STARTUP_CMD: "npm start",
        SRCDS_MAP: "gm_flatgrass",
        MAX_PLAYERS: "32",
        LEVEL: "Procedural Map",
        HOSTNAME: serverName,
      },
      limits: {
        memory: resources.memory,
        swap: 0,
        disk: resources.disk,
        io: 500,
        cpu: resources.cpu,
      },
      feature_limits: {
        databases: 1,
        backups: 2,
        allocations: 1,
      },
      allocation: {
        default: await getNextAllocation(),
      },
      deploy: {
        locations: [PTERODACTYL_CONFIG.locationId],
        dedicated_ip: false,
        port_range: [],
      },
      start_on_completion: true,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error("[Pterodactyl] Erreur création serveur:", error)
    throw new Error(`Erreur Pterodactyl: ${response.status}`)
  }

  const data = await response.json()
  return data.attributes
}

// Fonction pour créer ou récupérer un utilisateur Pterodactyl
export async function getOrCreatePterodactylUser(email: string, username?: string) {
  // Chercher l'utilisateur existant
  const searchResponse = await fetch(
    `${PTERODACTYL_CONFIG.panelUrl}/api/application/users?filter[email]=${encodeURIComponent(email)}`,
    {
      headers: {
        Authorization: `Bearer ${PTERODACTYL_CONFIG.apiKey}`,
        Accept: "application/json",
      },
    },
  )

  if (searchResponse.ok) {
    const searchData = await searchResponse.json()
    if (searchData.data && searchData.data.length > 0) {
      return searchData.data[0].attributes
    }
  }

  // Créer un nouvel utilisateur
  const generatedUsername =
    username || email.split("@")[0].replace(/[^a-zA-Z0-9]/g, "") + Math.random().toString(36).substring(2, 6)
  const generatedPassword = generateSecurePassword()

  const createResponse = await fetch(`${PTERODACTYL_CONFIG.panelUrl}/api/application/users`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PTERODACTYL_CONFIG.apiKey}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: email,
      username: generatedUsername,
      first_name: "Client",
      last_name: "NexaHost",
      password: generatedPassword,
    }),
  })

  if (!createResponse.ok) {
    const error = await createResponse.text()
    console.error("[Pterodactyl] Erreur création utilisateur:", error)
    throw new Error(`Erreur création utilisateur: ${createResponse.status}`)
  }

  const userData = await createResponse.json()
  return { ...userData.attributes, password: generatedPassword }
}

// Fonction pour obtenir une allocation disponible
async function getNextAllocation(): Promise<number> {
  const response = await fetch(
    `${PTERODACTYL_CONFIG.panelUrl}/api/application/nodes/${PTERODACTYL_CONFIG.nodeId}/allocations?filter[server_id]=null`,
    {
      headers: {
        Authorization: `Bearer ${PTERODACTYL_CONFIG.apiKey}`,
        Accept: "application/json",
      },
    },
  )

  if (!response.ok) {
    throw new Error("Impossible de récupérer les allocations")
  }

  const data = await response.json()
  if (data.data && data.data.length > 0) {
    return data.data[0].attributes.id
  }

  throw new Error("Aucune allocation disponible")
}

// Générer un mot de passe sécurisé
function generateSecurePassword(): string {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%"
  let password = ""
  for (let i = 0; i < 16; i++) {
    password += chars[Math.floor(Math.random() * chars.length)]
  }
  return password
}

// Alias export for createPterodactylUser
export const createPterodactylUserAlias = getOrCreatePterodactylUser

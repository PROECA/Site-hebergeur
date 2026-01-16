import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Server, ExternalLink, Cpu } from "lucide-react"
import Link from "next/link"

export default async function ServersPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: servers } = await supabase
    .from("servers")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Mes serveurs</h1>
          <p className="text-muted-foreground mt-1">Gerez vos serveurs de jeux</p>
        </div>
        <Link href="/#tarifs">
          <Button className="bg-accent hover:bg-accent/80 text-black">Nouveau serveur</Button>
        </Link>
      </div>

      {servers && servers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servers.map((server) => (
            <Card key={server.id} className="bg-card/50 border-accent/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Server className="w-5 h-5 text-accent" />
                    {server.name}
                  </CardTitle>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      server.status === "active" ? "bg-green-500/20 text-green-500" : "bg-yellow-500/20 text-yellow-500"
                    }`}
                  >
                    {server.status === "active" ? "Actif" : "En cours"}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Jeu</p>
                    <p className="font-medium">{server.game}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Plan</p>
                    <p className="font-medium">{server.plan}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">RAM</p>
                    <p className="font-medium">{server.ram}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">CPU</p>
                    <p className="font-medium">{server.cpu}</p>
                  </div>
                </div>

                {server.ip_address && (
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">Adresse de connexion</p>
                    <p className="font-mono text-accent">
                      {server.ip_address}:{server.port}
                    </p>
                  </div>
                )}

                <div className="flex gap-2">
                  <a href="https://panel.nexahost.m1x.ovh" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full border-accent/30 hover:bg-accent/10 bg-transparent">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Panel
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="bg-card/50 border-accent/20">
          <CardContent className="py-12 text-center">
            <Cpu className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-xl font-semibold mb-2">Aucun serveur</h3>
            <p className="text-muted-foreground mb-4">Vous n&apos;avez pas encore de serveur heberge</p>
            <Link href="/#tarifs">
              <Button className="bg-accent hover:bg-accent/80 text-black">Commander un serveur</Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

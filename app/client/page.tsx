import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server, ShoppingCart, Ticket, Cpu } from "lucide-react"
import Link from "next/link"

export default async function ClientDashboard() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: servers } = await supabase.from("servers").select("*").eq("user_id", user?.id)

  const { data: orders } = await supabase.from("orders").select("*").eq("user_id", user?.id)

  const { data: tickets } = await supabase.from("tickets").select("*").eq("user_id", user?.id).eq("status", "open")

  const stats = [
    {
      label: "Serveurs actifs",
      value: servers?.length || 0,
      icon: Server,
      href: "/client/servers",
      color: "text-green-500",
    },
    {
      label: "Commandes",
      value: orders?.length || 0,
      icon: ShoppingCart,
      href: "/client/orders",
      color: "text-blue-500",
    },
    {
      label: "Tickets ouverts",
      value: tickets?.length || 0,
      icon: Ticket,
      href: "/client/tickets",
      color: "text-yellow-500",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Bienvenue, {user?.user_metadata?.first_name || "Client"} !</h1>
        <p className="text-muted-foreground mt-1">Voici un apercu de votre compte Net Vora</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Link key={stat.label} href={stat.href}>
            <Card className="bg-card/50 border-accent/20 hover:border-accent/50 transition-colors cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.label}</CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5 text-accent" />
              Mes serveurs recents
            </CardTitle>
          </CardHeader>
          <CardContent>
            {servers && servers.length > 0 ? (
              <div className="space-y-3">
                {servers.slice(0, 5).map((server) => (
                  <div key={server.id} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                    <div>
                      <p className="font-medium">{server.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {server.game} - {server.plan}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        server.status === "active"
                          ? "bg-green-500/20 text-green-500"
                          : "bg-yellow-500/20 text-yellow-500"
                      }`}
                    >
                      {server.status === "active" ? "Actif" : "En cours"}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Cpu className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Aucun serveur pour le moment</p>
                <Link href="/#tarifs" className="text-accent hover:underline text-sm">
                  Commander un serveur
                </Link>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ticket className="w-5 h-5 text-accent" />
              Tickets recents
            </CardTitle>
          </CardHeader>
          <CardContent>
            {tickets && tickets.length > 0 ? (
              <div className="space-y-3">
                {tickets.slice(0, 5).map((ticket) => (
                  <Link key={ticket.id} href={`/client/tickets/${ticket.id}`}>
                    <div className="flex items-center justify-between p-3 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                      <div>
                        <p className="font-medium">{ticket.subject}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(ticket.created_at).toLocaleDateString("fr-FR")}
                        </p>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          ticket.status === "open" ? "bg-green-500/20 text-green-500" : "bg-gray-500/20 text-gray-500"
                        }`}
                      >
                        {ticket.status === "open" ? "Ouvert" : "Ferme"}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <Ticket className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Aucun ticket ouvert</p>
                <Link href="/client/tickets/new" className="text-accent hover:underline text-sm">
                  Ouvrir un ticket
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

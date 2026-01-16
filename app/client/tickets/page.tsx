import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ticket, Plus, MessageSquare } from "lucide-react"
import Link from "next/link"

export default async function TicketsPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: tickets } = await supabase
    .from("tickets")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Support</h1>
          <p className="text-muted-foreground mt-1">Gerez vos tickets de support</p>
        </div>
        <Link href="/client/tickets/new">
          <Button className="bg-accent hover:bg-accent/80 text-black">
            <Plus className="w-4 h-4 mr-2" />
            Nouveau ticket
          </Button>
        </Link>
      </div>

      {tickets && tickets.length > 0 ? (
        <div className="space-y-4">
          {tickets.map((ticket) => (
            <Link key={ticket.id} href={`/client/tickets/${ticket.id}`}>
              <Card className="bg-card/50 border-accent/20 hover:border-accent/50 transition-colors cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">{ticket.subject}</p>
                        <p className="text-sm text-muted-foreground">
                          Cree le {new Date(ticket.created_at).toLocaleDateString("fr-FR")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          ticket.priority === "high"
                            ? "bg-red-500/20 text-red-500"
                            : ticket.priority === "normal"
                              ? "bg-blue-500/20 text-blue-500"
                              : "bg-gray-500/20 text-gray-500"
                        }`}
                      >
                        {ticket.priority === "high" ? "Urgent" : ticket.priority === "normal" ? "Normal" : "Faible"}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          ticket.status === "open"
                            ? "bg-green-500/20 text-green-500"
                            : ticket.status === "answered"
                              ? "bg-blue-500/20 text-blue-500"
                              : "bg-gray-500/20 text-gray-500"
                        }`}
                      >
                        {ticket.status === "open" ? "Ouvert" : ticket.status === "answered" ? "Repondu" : "Ferme"}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <Card className="bg-card/50 border-accent/20">
          <CardContent className="py-12 text-center">
            <Ticket className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-xl font-semibold mb-2">Aucun ticket</h3>
            <p className="text-muted-foreground mb-4">Besoin d&apos;aide ? Ouvrez un ticket de support</p>
            <Link href="/client/tickets/new">
              <Button className="bg-accent hover:bg-accent/80 text-black">
                <Plus className="w-4 h-4 mr-2" />
                Ouvrir un ticket
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

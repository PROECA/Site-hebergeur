import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound, redirect } from "next/navigation"
import { TicketMessages } from "@/components/client/ticket-messages"

export default async function TicketDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  if (id === "new") {
    redirect("/client/tickets/new")
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: ticket } = await supabase.from("tickets").select("*").eq("id", id).eq("user_id", user?.id).single()

  if (!ticket) {
    notFound()
  }

  const { data: messages } = await supabase
    .from("ticket_messages")
    .select("*")
    .eq("ticket_id", id)
    .order("created_at", { ascending: true })

  return (
    <div className="space-y-6 max-w-3xl">
      <Link href="/client/tickets" className="inline-flex items-center text-muted-foreground hover:text-accent">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour aux tickets
      </Link>

      <Card className="bg-card/50 border-accent/20">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{ticket.subject}</CardTitle>
            <div className="flex items-center gap-2">
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
          <p className="text-sm text-muted-foreground">
            Cree le{" "}
            {new Date(ticket.created_at).toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </CardHeader>
        <CardContent>
          <TicketMessages ticketId={ticket.id} initialMessages={messages || []} userId={user?.id || ""} />
        </CardContent>
      </Card>
    </div>
  )
}

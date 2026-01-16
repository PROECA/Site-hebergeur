"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NewTicketPage() {
  const router = useRouter()
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [priority, setPriority] = useState("normal")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) throw new Error("Non authentifie")

      // Create ticket
      const { data: ticket, error: ticketError } = await supabase
        .from("tickets")
        .insert({
          user_id: user.id,
          subject,
          priority,
          status: "open",
        })
        .select()
        .single()

      if (ticketError) throw ticketError

      // Create first message
      const { error: messageError } = await supabase.from("ticket_messages").insert({
        ticket_id: ticket.id,
        user_id: user.id,
        message,
        is_admin: false,
      })

      if (messageError) throw messageError

      router.push(`/client/tickets/${ticket.id}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <Link href="/client/tickets" className="inline-flex items-center text-muted-foreground hover:text-accent">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Retour aux tickets
      </Link>

      <Card className="bg-card/50 border-accent/20">
        <CardHeader>
          <CardTitle>Nouveau ticket</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="subject">Sujet</Label>
              <Input
                id="subject"
                placeholder="Decrivez brievement votre probleme"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="bg-background/50 border-accent/30"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="priority">Priorite</Label>
              <Select value={priority} onValueChange={setPriority}>
                <SelectTrigger className="bg-background/50 border-accent/30">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Faible</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Decrivez votre probleme en detail..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                className="bg-background/50 border-accent/30"
              />
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" className="w-full bg-accent hover:bg-accent/80 text-black" disabled={isLoading}>
              {isLoading ? "Creation..." : "Creer le ticket"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

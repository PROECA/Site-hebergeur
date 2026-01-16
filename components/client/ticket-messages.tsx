"use client"

import type React from "react"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, User, Shield } from "lucide-react"

interface Message {
  id: string
  message: string
  is_admin: boolean
  created_at: string
  user_id: string
}

export function TicketMessages({
  ticketId,
  initialMessages,
  userId,
}: {
  ticketId: string
  initialMessages: Message[]
  userId: string
}) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    setIsLoading(true)
    try {
      const supabase = createClient()
      const { data, error } = await supabase
        .from("ticket_messages")
        .insert({
          ticket_id: ticketId,
          user_id: userId,
          message: newMessage,
          is_admin: false,
        })
        .select()
        .single()

      if (error) throw error

      setMessages([...messages, data])
      setNewMessage("")
    } catch (err) {
      console.error("Error sending message:", err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.is_admin ? "" : "flex-row-reverse"}`}>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                msg.is_admin ? "bg-accent/20" : "bg-blue-500/20"
              }`}
            >
              {msg.is_admin ? <Shield className="w-4 h-4 text-accent" /> : <User className="w-4 h-4 text-blue-500" />}
            </div>
            <div className={`max-w-[80%] ${msg.is_admin ? "" : "text-right"}`}>
              <div
                className={`p-3 rounded-lg ${
                  msg.is_admin ? "bg-accent/10 border border-accent/20" : "bg-blue-500/10 border border-blue-500/20"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{msg.message}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {msg.is_admin ? "Support" : "Vous"} - {new Date(msg.created_at).toLocaleString("fr-FR")}
              </p>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSendMessage} className="flex gap-2">
        <Textarea
          placeholder="Votre message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          rows={2}
          className="bg-background/50 border-accent/30 flex-1"
        />
        <Button
          type="submit"
          className="bg-accent hover:bg-accent/80 text-black self-end"
          disabled={isLoading || !newMessage.trim()}
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </div>
  )
}

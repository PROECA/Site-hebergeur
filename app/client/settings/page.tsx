"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Mail, Save } from "lucide-react"

export default function SettingsPage() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    const loadProfile = async () => {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      if (user) {
        setEmail(user.email || "")
        setFirstName(user.user_metadata?.first_name || "")
        setLastName(user.user_metadata?.last_name || "")
      }
    }
    loadProfile()
  }, [])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const supabase = createClient()
      const { error } = await supabase.auth.updateUser({
        data: {
          first_name: firstName,
          last_name: lastName,
        },
      })

      if (error) throw error
      setMessage({ type: "success", text: "Profil mis a jour avec succes !" })
    } catch (err) {
      setMessage({ type: "error", text: err instanceof Error ? err.message : "Erreur" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h1 className="text-3xl font-bold">Parametres</h1>
        <p className="text-muted-foreground mt-1">Gerez votre profil et vos preferences</p>
      </div>

      <Card className="bg-card/50 border-accent/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5 text-accent" />
            Informations personnelles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="firstName">Prenom</Label>
                <Input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-background/50 border-accent/30"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-background/50 border-accent/30"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <Input id="email" value={email} disabled className="bg-background/30 border-accent/20" />
              </div>
              <p className="text-xs text-muted-foreground">L&apos;email ne peut pas etre modifie</p>
            </div>

            {message && (
              <p className={`text-sm ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
                {message.text}
              </p>
            )}

            <Button type="submit" className="bg-accent hover:bg-accent/80 text-black" disabled={isLoading}>
              <Save className="w-4 h-4 mr-2" />
              {isLoading ? "Sauvegarde..." : "Sauvegarder"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

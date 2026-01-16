import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

export default async function OrdersPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user?.id)
    .order("created_at", { ascending: false })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Mes commandes</h1>
        <p className="text-muted-foreground mt-1">Historique de vos commandes</p>
      </div>

      {orders && orders.length > 0 ? (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="bg-card/50 border-accent/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">
                        {order.game} - {order.plan}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(order.created_at).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-accent">{order.price} EUR</p>
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        order.status === "completed"
                          ? "bg-green-500/20 text-green-500"
                          : order.status === "pending"
                            ? "bg-yellow-500/20 text-yellow-500"
                            : "bg-red-500/20 text-red-500"
                      }`}
                    >
                      {order.status === "completed" ? "Complete" : order.status === "pending" ? "En attente" : "Annule"}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="bg-card/50 border-accent/20">
          <CardContent className="py-12 text-center">
            <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
            <h3 className="text-xl font-semibold mb-2">Aucune commande</h3>
            <p className="text-muted-foreground">Vous n&apos;avez pas encore passe de commande</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

import { type NextRequest, NextResponse } from "next/server"
import { createPterodactylServer, getOrCreatePterodactylUser } from "@/lib/pterodactyl"
import { createClient } from "@/lib/supabase/server"

const PAYPAL_BASE_URL =
  process.env.PAYPAL_MODE === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com"

export async function POST(request: NextRequest) {
  try {
    const { orderId, userId } = await request.json()

    const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`).toString("base64")

    // Get access token
    const tokenResponse = await fetch(`${PAYPAL_BASE_URL}/v1/oauth2/token`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    })

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json()
      console.error("PayPal token error:", errorData)
      return NextResponse.json({ error: "PayPal authentication failed" }, { status: 401 })
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token

    // Capture the order
    const captureResponse = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const captureData = await captureResponse.json()

    if (captureData.status === "COMPLETED") {
      const customId = captureData.purchase_units?.[0]?.payments?.captures?.[0]?.custom_id
      let orderInfo: any = {}

      try {
        orderInfo = customId ? JSON.parse(customId) : {}
      } catch {
        const refId = captureData.purchase_units?.[0]?.reference_id
        if (refId) {
          try {
            orderInfo = JSON.parse(refId)
          } catch {}
        }
      }

      let pterodactylUser = null
      let pterodactylServer = null

      try {
        // Create or get Pterodactyl user
        const email = orderInfo.email
        pterodactylUser = await getOrCreatePterodactylUser(email)

        // Create server
        pterodactylServer = await createPterodactylServer({
          userId: pterodactylUser.id,
          serverName: orderInfo.serverName || `Server-${Date.now()}`,
          gameType: orderInfo.game,
          planKey: orderInfo.planKey,
          email: email,
        })
      } catch (serverError) {
        console.error("Pterodactyl error:", serverError)
      }

      if (userId) {
        const supabase = await createClient()

        await supabase.from("orders").insert({
          user_id: userId,
          game: orderInfo.game,
          plan: orderInfo.tier,
          price: captureData.purchase_units?.[0]?.amount?.value,
          status: "completed",
          paypal_transaction_id: captureData.id,
          pterodactyl_server_id: pterodactylServer?.id || null,
        })

        if (pterodactylServer) {
          await supabase.from("servers").insert({
            user_id: userId,
            name: orderInfo.serverName || `Server-${orderInfo.game}`,
            game: orderInfo.game,
            plan: orderInfo.tier,
            pterodactyl_id: pterodactylServer.id,
            pterodactyl_uuid: pterodactylServer.uuid,
            status: "active",
          })
        }
      }

      return NextResponse.json({
        success: true,
        transactionId: captureData.id,
        orderInfo,
        pterodactylUser: pterodactylUser
          ? {
              id: pterodactylUser.id,
              email: pterodactylUser.email,
              username: pterodactylUser.username,
              password: pterodactylUser.password,
            }
          : null,
        pterodactylServer: pterodactylServer
          ? {
              id: pterodactylServer.id,
              uuid: pterodactylServer.uuid,
              name: pterodactylServer.name,
            }
          : null,
      })
    }

    return NextResponse.json({ success: false, error: "Payment not completed" }, { status: 400 })
  } catch (error) {
    console.error("PayPal capture error:", error)
    return NextResponse.json({ success: false, error: "Failed to capture order" }, { status: 500 })
  }
}

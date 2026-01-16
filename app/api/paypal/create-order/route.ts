import { type NextRequest, NextResponse } from "next/server"

const PAYPAL_BASE_URL =
  process.env.PAYPAL_MODE === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com"

export async function POST(request: NextRequest) {
  try {
    const { game, tier, price, email, serverName, planKey } = await request.json()

    const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`).toString("base64")

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
      return NextResponse.json({ error: "PayPal authentication failed", details: errorData }, { status: 401 })
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token

    const orderData = JSON.stringify({ game, tier, email, serverName, planKey })

    const orderResponse = await fetch(`${PAYPAL_BASE_URL}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "EUR",
              value: price.toString(),
            },
            description: `NexaHost - ${game} ${tier}`,
            custom_id: orderData,
          },
        ],
        application_context: {
          brand_name: "NexaHost",
          landing_page: "LOGIN",
          user_action: "PAY_NOW",
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/payment-callback`,
          cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout?game=${game}&tier=${tier}&price=${price}`,
        },
      }),
    })

    const order = await orderResponse.json()

    if (!orderResponse.ok) {
      console.error("PayPal order error:", order)
      return NextResponse.json({ error: "Failed to create PayPal order", details: order }, { status: 400 })
    }

    const approveLink = order.links?.find((link: any) => link.rel === "approve")

    return NextResponse.json({
      id: order.id,
      approveUrl: approveLink?.href,
    })
  } catch (error) {
    console.error("PayPal create order error:", error)
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 })
  }
}

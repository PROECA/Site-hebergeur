import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { game, tier, price } = await request.json()

    const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_SECRET}`).toString("base64")

    const tokenResponse = await fetch("https://api-m.paypal.com/v1/oauth2/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    })

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token

    const orderResponse = await fetch("https://api-m.paypal.com/v2/checkout/orders", {
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
            description: `${game} - ${tier}`,
            custom_id: JSON.stringify({ game, tier }),
          },
        ],
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/success`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/checkout?game=${game}&tier=${tier}&price=${price}`,
      }),
    })

    const order = await orderResponse.json()

    // Find approve link
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

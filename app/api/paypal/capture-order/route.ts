import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { orderId, game, tier, price } = await request.json()

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

    const captureResponse = await fetch(`https://api-m.paypal.com/v2/checkout/orders/${orderId}/capture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })

    const captureData = await captureResponse.json()

    if (captureData.status === "COMPLETED") {
      // Create server
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/servers/create-server`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          game,
          tier,
          price,
          transactionId: orderId,
        }),
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: "Payment not completed" }, { status: 400 })
  } catch (error) {
    console.error("PayPal capture error:", error)
    return NextResponse.json({ error: "Failed to capture order" }, { status: 500 })
  }
}

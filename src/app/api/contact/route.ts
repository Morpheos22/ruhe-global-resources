import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body as Record<
      string,
      string
    >;

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // In production, this is where you'd forward to email/CRM/z-ai SDK.
    // For now we log it so the consultant can pick it up from server logs.
    console.log("[RUHE contact form]", {
      name,
      email,
      phone,
      service,
      message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[RUHE contact form] error", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}

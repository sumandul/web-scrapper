// app/api/scrape/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { url } = await req.json();

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { status: "error", message: "Invalid or missing URL" },
        { status: 400 }
      );
    }

    // Example: Backend call to external scraping service
    // Replace 'https://external-scraper.api/scrape' with your real endpoint
    const externalResponse = await fetch(`${process.env.BACKEND_API}scrape/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url }),
    });

    if (!externalResponse.ok) {
      return NextResponse.json(
        { status: "error", message: "External API failed" },
        { status: externalResponse.status }
      );
    }

    const data = await externalResponse.json();

    return NextResponse.json({ status: "success", data });
  } catch (error) {
    console.error("Error in /api/scrape:", error);
    return NextResponse.json(
      { status: "error", message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

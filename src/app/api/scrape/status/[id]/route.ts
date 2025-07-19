// app/api/scrape/status/[job_id]/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { job_id: string } }
) {
  const { job_id } = params;

  if (!job_id) {
    return NextResponse.json(
      { status: "error", message: "Missing job_id parameter" },
      { status: 400 }
    );
  }

  try {
    // Call your external backend API to get job status
    const externalResponse = await fetch(
      `${process.env.BACKEND_API}scrape/status/${job_id}`
    );

    if (!externalResponse.ok) {
      return NextResponse.json(
        { status: "error", message: "External API failed" },
        { status: externalResponse.status }
      );
    }

    const data = await externalResponse.json();

    return NextResponse.json({ status: "success", data });
  } catch (error) {
    console.error("Error in /api/scrape/status:", error);
    return NextResponse.json(
      { status: "error", message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

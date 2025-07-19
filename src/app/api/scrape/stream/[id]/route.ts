// app/api/scrape/status/[job_id]/route.ts

import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  if (!id) {
    return new Response("Missing job_id parameter", { status: 400 });
  }

  // Call FastAPI backend SSE stream
  const backendResponse = await fetch(
    `${process.env.BACKEND_API}scrape/stream/${id}`
  );

  // Check if response is valid
  if (!backendResponse.ok || !backendResponse.body) {
    return new Response("Failed to connect to backend SSE", { status: 500 });
  }

  // Forward backend SSE stream to client
  const stream = new ReadableStream({
    async start(controller) {
      const reader = backendResponse.body!.getReader();
      const decoder = new TextDecoder();
      const encoder = new TextEncoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        controller.enqueue(encoder.encode(chunk));
      }

      controller.close();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}

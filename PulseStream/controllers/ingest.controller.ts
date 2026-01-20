import type { PulseEvent } from "../types/event.type";

export async function ingestEvents(
  req: Request,
  server: typeof Bun.servers[number]
): Promise<Response> {
  try {
    const body = (await req.json()) as PulseEvent | PulseEvent[];
    const now = Date.now();

    const events: PulseEvent[] = Array.isArray(body)
      ? body.map((e) => ({ ...e, timestamp: e.timestamp ?? now }))
      : [{ ...body, timestamp: body.timestamp ?? now }];

    // TODO: push events to workers / storage / alert engine.

    // Broadcast events to WS clients for live dashboards.
    for (const event of events) {
      const enriched = { ...event, receivedAt: Date.now() };
      server.clients.forEach((client) => {
        client.send(JSON.stringify({ stream: "events", event: enriched }));
      });
    }

    return Response.json({ ok: true, ingested: events.length });
  } catch (error) {
    return Response.json(
      {
        ok: false,
        error: "Invalid JSON payload",
      },
      { status: 400 }
    );
  }
}


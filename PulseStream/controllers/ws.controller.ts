import type { PulseEvent } from "../types/event.type";

export function handleWsMessage(
  ws: ServerWebSocket<PulseEvent>,
  server: typeof Bun.servers[number],
  message: string | Uint8Array
) {
  try {
    const data =
      typeof message === "string"
        ? JSON.parse(message)
        : JSON.parse(new TextDecoder().decode(message));

    const event: PulseEvent = {
      ...data,
      timestamp: data.timestamp ?? Date.now(),
    };

    const enriched = {
      ...event,
      receivedAt: Date.now(),
    };

    ws.send(JSON.stringify({ ok: true, event: enriched }));

    server.clients.forEach((client) => {
      if (client !== ws) {
        client.send(JSON.stringify({ stream: "events", event: enriched }));
      }
    });
  } catch {
    ws.send(
      JSON.stringify({
        ok: false,
        error: "Invalid event format",
      })
    );
  }
}


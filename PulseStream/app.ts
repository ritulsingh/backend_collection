import { config } from "./config";
import type { PulseEvent } from "./types/event.type";
import { httpRoutes } from "./routes/http.routes";
import { handleWsMessage } from "./controllers/ws.controller";

const PORT = config.port;

const server = Bun.serve<PulseEvent>({
  port: PORT,
  fetch(req, server) {
    const url = new URL(req.url);

    // WebSocket upgrade for realtime streaming
    if (url.pathname === "/ws") {
      if (server.upgrade(req)) {
        // The `open` handler will run after successful upgrade.
        return;
      }
      return new Response("WebSocket upgrade failed", { status: 500 });
    }

    return httpRoutes.handle(req, server);
  },
  websocket: {
    open(ws) {
      ws.send(
        JSON.stringify({
          type: "system",
          message: "Connected to PulseStream WebSocket",
        })
      );
    },
    message(ws, message) {
      handleWsMessage(ws, server, message);
    },
    close(ws) {
      // You can add cleanup or logging here later.
    },
  },
});

console.log(
  `PulseStream server listening on http://localhost:${PORT} (Bun v${Bun.version})`
);


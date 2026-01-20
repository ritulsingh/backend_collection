import { ingestEvents } from "../controllers/ingest.controller";

export const httpRoutes = {
  async handle(req: Request, server: typeof Bun.servers[number]): Promise<Response> {
    const url = new URL(req.url);

    if (url.pathname === "/health") {
      return Response.json({ status: "ok", uptime: process.uptime() });
    }

    if (url.pathname === "/") {
      return new Response(
        `PulseStream running on Bun. HTTP on /, POST /ingest, WS on /ws, health at /health`,
        { status: 200, headers: { "Content-Type": "text/plain" } }
      );
    }

    if (url.pathname === "/ingest" && req.method === "POST") {
      return ingestEvents(req, server);
    }

    return new Response("Not found", { status: 404 });
  },
};


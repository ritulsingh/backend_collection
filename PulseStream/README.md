## PulseStream

**Tagline**: A high-performance real-time event ingestion, analytics, and alerting backend built on Bun.

### Overview

PulseStream is a backend system designed to receive millions of small events from clients (apps, servers, IoT devices, scripts), process them in real time, stream them to connected dashboards via WebSockets, store them efficiently, and trigger alerts based on live rules.

This project is intentionally built on **Bun** so you can explore its capabilities and benchmark it against traditional Node.js backends.

### Core Goals

- **Ultra-fast HTTP ingestion** using Bun's native server.
- **Native WebSockets** for streaming live metrics and alerts to dashboards.
- **Worker threads** (Bun workers) for parallel event processing and rule evaluation.
- **Efficient storage** for time-series / event data (pluggable backend, e.g. MongoDB, Postgres, or even local file-based sinks).
- **Alerting engine** that evaluates incoming events against user-defined rules in near real time.
- **File streaming APIs** for exporting/importing event data.
- **Built-in test runner** and **native bundler** via Bun tooling.
- **High-concurrency handling** to stress-test Bun in realistic production-style workloads.

### Project Structure (initial)

```bash
PulseStream/
├── app.ts          # Bun HTTP + WebSocket server entrypoint
├── package.json    # Bun-friendly package manifest
├── tsconfig.json   # TypeScript configuration
├── sample.env      # Example environment variables
└── README.md       # This file
```

As the project grows, you can extend it to follow a familiar structure:

```bash
PulseStream/
├── config/         # Configuration and environment loading
├── controllers/    # HTTP & WebSocket handlers, routing logic
├── workers/        # Bun workers for parallel processing
├── models/         # Persistence / data models
├── routes/         # HTTP routing
├── utils/          # Shared utilities (logging, metrics, etc.)
└── ...
```

### Requirements

- **Bun** (latest stable) installed locally. See installation instructions at `https://bun.sh`.

Optional, depending on storage choices you make later:

- A running database (e.g. MongoDB, Postgres, Redis) or file-system access.

### Getting Started

1. **Install dependencies (if any are added later)**:

   ```bash
   cd PulseStream
   bun install
   ```

2. **Configure environment variables**:

   ```bash
   cp sample.env .env
   # then edit .env to suit your environment
   ```

3. **Run the development server**:

   ```bash
   bun run app.ts
   # or, if you add a script:
   # bun run dev
   ```

4. **Test the HTTP endpoint**:

   ```bash
   curl http://localhost:4000/
   ```

5. **Test the WebSocket endpoint** (e.g. with `wscat` or a browser client):

   - Connect to: `ws://localhost:4000/ws`
   - Send a JSON event like:

   ```json
   {
     "type": "metric",
     "source": "demo-client",
     "payload": { "value": 42 }
   }
   ```

   - You should see the server acknowledge the event and broadcast it back.

### Benchmarking Ideas

- Simulate thousands of concurrent clients sending small JSON events.
- Compare raw HTTP throughput and latency between:
  - PulseStream (Bun) and
  - An equivalent Node.js/Express or Fastify implementation (e.g. your other subprojects).
- Measure:
  - Events ingested per second
  - WebSocket message fan-out latency
  - Worker throughput for rule evaluation

### Next Steps / Roadmap

- Add a simple in-memory event store and metrics aggregator.
- Implement a rule engine for alerts (e.g. threshold-based or pattern-based).
- Add persistence (database or append-only log files).
- Expose a dashboard-friendly API for querying aggregates.
- Add a `/health` and `/metrics` endpoint for monitoring.

This project is meant to be experimental and educational—feel free to iterate rapidly, break things, and use it to decide how comfortable you are using **Bun in production**.


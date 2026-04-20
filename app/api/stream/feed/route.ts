import type { NextRequest } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type FeedKind = "commit" | "deploy" | "post";

type FeedEvent = {
  id: string;
  kind: FeedKind;
  label: string; // short badge label (e.g. "commit", "deploy", "post")
  text: string; // main line, already shaped for the ticker
  href?: string;
  ts: number; // ms epoch
};

// TODO(real sources):
//  - commits: GitHub Events API for paramxclaudedev, filter PushEvent, take head_commit
//  - deploys: Vercel REST /v13/deployments?teamId=... (see vercel-mcp token)
//  - posts: Substack public RSS at https://<handle>.substack.com/feed
// For now we emit from this rotating pool every ~30s.
const MOCK_POOL: Omit<FeedEvent, "id" | "ts">[] = [
  {
    kind: "commit",
    label: "commit",
    text: "paramxclaudedev/keep — wire settler cron to Ultrahuman M1",
    href: "https://github.com/paramxclaudedev",
  },
  {
    kind: "deploy",
    label: "deploy",
    text: "keep-wine.vercel.app — production, 41s",
    href: "https://keep-wine.vercel.app",
  },
  {
    kind: "post",
    label: "post",
    text: "Substack — draft: the oracle is the moat (scheduled)",
    href: "https://theargumentmag.com",
  },
  {
    kind: "commit",
    label: "commit",
    text: "paramxclaudedev/life-os — friday-lessons agent, first real entry",
    href: "https://github.com/paramxclaudedev/life-os",
  },
  {
    kind: "deploy",
    label: "deploy",
    text: "likehearted.life — warm-paper theme, commit 6667b1e",
    href: "https://likehearted.life",
  },
  {
    kind: "commit",
    label: "commit",
    text: "paramxclaudedev/claude-code-playbook — 11 skills indexed",
    href: "https://github.com/paramxclaudedev/claude-code-playbook",
  },
  {
    kind: "post",
    label: "post",
    text: "LinkedIn — draft: what 388 Claude sessions in a week actually looks like",
    href: "https://linkedin.com/in/paramvaswani",
  },
  {
    kind: "deploy",
    label: "deploy",
    text: "biometric-oracle-protocol.vercel.app — v1 spec page",
    href: "https://biometric-oracle-protocol.vercel.app",
  },
];

function nextMockEvent(i: number): FeedEvent {
  const base = MOCK_POOL[i % MOCK_POOL.length];
  return {
    ...base,
    id: `${Date.now()}-${i}`,
    ts: Date.now(),
  };
}

export async function GET(req: NextRequest) {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    start(controller) {
      let i = 0;
      let closed = false;

      const send = (event: FeedEvent) => {
        if (closed) return;
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(event)}\n\n`),
        );
      };

      // push one immediately so the strip has something to show
      send(nextMockEvent(i++));

      const tick = setInterval(() => {
        send(nextMockEvent(i++));
      }, 30_000);

      // SSE keep-alive (comment frames) every 15s
      const ping = setInterval(() => {
        if (closed) return;
        controller.enqueue(encoder.encode(`: ping\n\n`));
      }, 15_000);

      req.signal.addEventListener("abort", () => {
        closed = true;
        clearInterval(tick);
        clearInterval(ping);
        try {
          controller.close();
        } catch {}
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}

"use client";

import { useEffect, useState } from "react";

type FeedEvent = {
  id: string;
  kind: "commit" | "deploy" | "post";
  label: string;
  text: string;
  href?: string;
  ts: number;
};

export function FeedStrip() {
  const [event, setEvent] = useState<FeedEvent | null>(null);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const es = new EventSource("/api/stream/feed");

    es.onmessage = (e) => {
      try {
        const next: FeedEvent = JSON.parse(e.data);
        setPhase("out");
        // short crossfade — keep it quiet
        window.setTimeout(() => {
          setEvent(next);
          setPhase("in");
        }, 180);
      } catch {
        // ignore malformed
      }
    };

    es.onerror = () => {
      // browser will auto-reconnect; if it doesn't, we just go silent.
    };

    return () => {
      es.close();
    };
  }, []);

  return (
    <div
      aria-label="Live activity feed"
      className="w-full border-b border-rule bg-bg"
      style={{ paddingTop: 4, paddingBottom: 4 }}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 font-mono text-[11px] leading-5 text-ink">
        <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden>
          <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-live opacity-80" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
        </span>
        <span className="shrink-0 uppercase tracking-widest text-ink-mute">
          live
        </span>
        <span className="shrink-0 text-ink-mute" aria-hidden>
          ·
        </span>
        <FeedLine event={event} phase={phase} />
      </div>
    </div>
  );
}

function FeedLine({
  event,
  phase,
}: {
  event: FeedEvent | null;
  phase: "in" | "out";
}) {
  if (!event) {
    return (
      <span
        className="truncate text-ink-mute"
        style={{
          opacity: 0.6,
          transition: "opacity 300ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        listening for commits, deploys, posts…
      </span>
    );
  }

  const body = (
    <span className="flex min-w-0 items-center gap-2">
      <span className="shrink-0 uppercase tracking-widest text-ink-mute">
        {event.label}
      </span>
      <span className="truncate">{event.text}</span>
      <span className="shrink-0 text-ink-mute">{relTime(event.ts)}</span>
    </span>
  );

  return (
    <span
      className="min-w-0 flex-1 truncate"
      style={{
        opacity: phase === "in" ? 1 : 0,
        transform: phase === "in" ? "translateY(0)" : "translateY(2px)",
        transition:
          "opacity 300ms cubic-bezier(0.16,1,0.3,1), transform 300ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {event.href ? (
        <a
          href={event.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-w-0 max-w-full items-center hover:text-accent"
        >
          {body}
        </a>
      ) : (
        body
      )}
    </span>
  );
}

function relTime(ts: number) {
  const s = Math.max(0, Math.floor((Date.now() - ts) / 1000));
  if (s < 5) return "now";
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  return `${h}h ago`;
}

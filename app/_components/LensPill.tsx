"use client";

import { useEffect, useState } from "react";
import { LENSES, type LensId } from "@/lib/lenses";
import { useLens } from "./LensContext";

export function LensPill() {
  const { primary, fork, active, hasChosen, choose, forkTo, swapActive } =
    useLens();
  const [mode, setMode] = useState<"closed" | "ask" | "chosen" | "fork">(
    "closed",
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Post-mount reveal to avoid SSR/hydration mismatch on the pill.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // open the asker only if the user hasn't picked yet
    const t = window.setTimeout(() => {
      setMode((m) => (m === "closed" ? (hasChosen ? "chosen" : "ask") : m));
    }, 900);
    return () => window.clearTimeout(t);
  }, [hasChosen]);

  if (!mounted) return null;

  const handleChoose = (id: LensId) => {
    choose(id);
    setMode("chosen");
  };
  const handleFork = (id: LensId) => {
    forkTo(id);
    setMode("chosen");
  };

  return (
    <div
      className="fixed bottom-5 right-5 z-50 font-mono text-[12px]"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(12px)",
        transition:
          "opacity 500ms cubic-bezier(0.16,1,0.3,1), transform 500ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {mode === "ask" && (
        <Panel>
          <div className="text-ink-mute">I&rsquo;m here as a…</div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {LENSES.map((l) => (
              <ChoiceButton
                key={l.id}
                onClick={() => handleChoose(l.id)}
                label={l.label}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMode("closed")}
            className="mt-3 text-[11px] text-ink-mute hover:text-ink"
          >
            skip
          </button>
        </Panel>
      )}

      {mode === "fork" && (
        <Panel>
          <div className="text-ink-mute">show me another angle…</div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {LENSES.filter((l) => l.id !== primary.id).map((l) => (
              <ChoiceButton
                key={l.id}
                onClick={() => handleFork(l.id)}
                label={l.label}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMode("chosen")}
            className="mt-3 text-[11px] text-ink-mute hover:text-ink"
          >
            cancel
          </button>
        </Panel>
      )}

      {mode === "chosen" && (
        <Panel compact>
          <div className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-ink-mute">viewing as</span>
            <span className="text-ink">{active.label}</span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px]">
            {fork ? (
              <button
                type="button"
                onClick={swapActive}
                className="text-ink-mute hover:text-ink"
                title={`toggle between ${primary.label} and ${fork.label}`}
              >
                swap ↔
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setMode("fork")}
                className="text-ink-mute hover:text-ink"
              >
                show me another angle →
              </button>
            )}
            <button
              type="button"
              onClick={() => setMode("ask")}
              className="text-ink-mute hover:text-ink"
            >
              change
            </button>
          </div>
        </Panel>
      )}

      {mode === "closed" && (
        <button
          type="button"
          onClick={() => setMode(hasChosen ? "chosen" : "ask")}
          className="rounded-full border border-rule bg-bg px-3 py-1.5 text-ink-mute shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-ink hover:text-ink"
        >
          {hasChosen ? `viewing as ${active.label}` : "tour →"}
        </button>
      )}
    </div>
  );
}

function Panel({
  children,
  compact = false,
}: {
  children: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      className="rounded-[10px] border border-rule bg-bg shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
      style={{
        padding: compact ? "10px 14px" : "14px 16px",
        minWidth: compact ? 180 : 260,
      }}
    >
      {children}
    </div>
  );
}

function ChoiceButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-rule px-2.5 py-1 text-ink hover:border-ink hover:bg-ink hover:text-bg"
    >
      {label}
    </button>
  );
}

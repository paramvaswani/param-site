"use client";

import { useLens } from "./LensContext";

export function ReadFirst() {
  const { active, hasChosen } = useLens();
  if (!hasChosen) return null;

  return (
    <section
      aria-label={`Read first — tailored for ${active.label}`}
      className="border-b border-rule bg-bg-alt"
    >
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <div className="flex items-baseline justify-between gap-4">
          <div className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
            tailored path · read first
          </div>
          <div className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
            for {active.label}
          </div>
        </div>
        <ol className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-3">
          {active.readFirst.map((r, i) => (
            <li key={`${active.id}-${r.name}`}>
              <a
                href={r.href}
                className="group block border-t border-rule pt-4 hover:text-accent"
              >
                <div className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-display text-2xl tracking-tight">
                  {r.name}
                </div>
                <div className="mt-1 font-serif text-lg italic text-ink-soft">
                  {r.why}
                </div>
                <div className="mt-3 flex items-center gap-1.5 font-mono text-[11px] text-ink-mute transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
                  go <span>→</span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

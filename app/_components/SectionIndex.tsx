"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "top", label: "hero" },
  { id: "manifesto", label: "manifesto" },
  { id: "origin", label: "origin" },
  { id: "products", label: "studio" },
  { id: "research", label: "research" },
  { id: "infrastructure", label: "infra" },
  { id: "process", label: "process" },
  { id: "live", label: "live" },
  { id: "currently", label: "currently" },
  { id: "log", label: "log" },
  { id: "cadence", label: "cadence" },
  { id: "beliefs", label: "beliefs" },
  { id: "library", label: "library" },
  { id: "conversations", label: "voices" },
  { id: "causes", label: "causes" },
  { id: "skills", label: "skills" },
  { id: "faq", label: "faq" },
  { id: "asks", label: "asks" },
  { id: "connect", label: "connect" },
];

export function SectionIndex() {
  const [active, setActive] = useState<string>("top");

  useEffect(() => {
    function update() {
      const probe = window.innerHeight * 0.35;
      let current = sections[0].id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= probe) current = s.id;
      }
      setActive(current);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <nav
      aria-label="section index"
      className="pointer-events-none fixed right-5 top-1/2 z-30 hidden -translate-y-1/2 lg:block"
    >
      <ul className="pointer-events-auto flex flex-col gap-3">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li
              key={s.id}
              className="group relative flex items-center justify-end"
            >
              <span
                className={`absolute right-7 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.22em] opacity-0 transition-opacity duration-200 group-hover:opacity-100 ${isActive ? "text-accent" : "text-ink-mute"}`}
              >
                {s.label}
              </span>
              <a
                href={`#${s.id}`}
                aria-label={s.label}
                className={`block h-2 w-2 rounded-full border transition-all ${isActive ? "scale-150 border-accent bg-accent" : "border-ink-mute bg-transparent hover:border-ink"}`}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

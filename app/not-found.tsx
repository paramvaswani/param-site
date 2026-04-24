import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center font-sans text-ink">
      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
        404 — wrong turn
      </div>
      <h1 className="font-display mt-8 text-[clamp(3rem,11vw,9rem)] leading-[0.92] tracking-[-0.035em]">
        You took a
        <br />
        <span className="font-serif italic text-accent">wrong turn.</span>
      </h1>
      <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
        The page you wanted is not here. The contra is, though. Twenty-plus
        builds, a manifesto, and the studio in motion are all{" "}
        <Link
          href="/"
          className="border-b border-ink hover:text-accent hover:border-accent transition"
        >
          one click back
        </Link>
        .
      </p>
      <Link
        href="/"
        className="group mt-14 inline-flex items-center gap-3 rounded-full border border-ink bg-ink px-7 py-4 font-mono text-[12px] uppercase tracking-[0.22em] text-bg hover:bg-accent hover:border-accent transition-colors"
      >
        <span>← back to the studio</span>
      </Link>
      <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        contra.ventures · est. 2026 · bangalore
      </p>
    </main>
  );
}

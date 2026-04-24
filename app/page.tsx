import {
  flagship,
  products,
  research,
  infrastructure,
  beliefs,
  causes,
  skills,
  writing,
  stats,
  type Project,
} from "@/lib/projects";
import { Reveal } from "./_components/Reveal";
import { Magnetic } from "./_components/Magnetic";

export default function Home() {
  return (
    <main className="font-sans text-ink">
      <TopBar />
      <Marquee />
      <Hero />
      <Manifesto />
      <StatsStrip />
      <StudioFlagship />
      <StudioGrid
        id="products"
        eyebrow="01 — the studio"
        title="Shipped."
        lede="Live and in use. Some pay rent, most feed the loop."
        items={products}
      />
      <StudioGrid
        id="research"
        eyebrow="02 — research"
        title="Measured."
        lede="Benchmarks I couldn't find, so I built them."
        items={research}
      />
      <StudioGrid
        id="infrastructure"
        eyebrow="03 — infrastructure"
        title="The machinery."
        lede="MCPs, hooks, agents. The scaffolding behind 122 commits a week."
        items={infrastructure}
      />
      <Beliefs />
      <Causes />
      <Skills />
      <Connect />
      <Footer />
    </main>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-[12px]">
        <a href="#top" className="font-mono tracking-tight">
          <span className="text-ink">contra</span>
          <span className="text-accent">.</span>
          <span className="text-ink-soft">ventures</span>
        </a>
        <nav className="hidden gap-8 font-mono uppercase tracking-[0.18em] text-ink-mute md:flex">
          <a href="#manifesto" className="hover:text-ink transition">
            manifesto
          </a>
          <a href="#products" className="hover:text-ink transition">
            studio
          </a>
          <a href="#beliefs" className="hover:text-ink transition">
            ideas
          </a>
          <a href="#connect" className="hover:text-ink transition">
            connect
          </a>
        </nav>
        <a
          href="mailto:param@contra.ventures"
          className="group inline-flex items-center gap-2 rounded-full border border-ink px-4 py-1.5 font-mono uppercase tracking-[0.18em] hover:bg-ink hover:text-bg transition-all"
        >
          say hi
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </div>
    </header>
  );
}

function Marquee() {
  const words = [
    "Take the power back",
    "Ship before permission",
    "Oracles over self-reports",
    "Tools, not platforms",
    "Solo is a structural advantage",
    "ADHD is a spec",
    "Commitment beats motivation",
    "Against resignation",
  ];
  return (
    <div className="overflow-hidden border-b border-rule bg-ink py-3 text-bg">
      <div className="marquee flex gap-12 whitespace-nowrap font-display text-lg tracking-tight">
        {[...Array(4)].flatMap((_, i) =>
          words.map((w, j) => (
            <span key={`${i}-${j}`} className="flex items-center gap-12">
              <span>{w}</span>
              <span className="text-accent">✺</span>
            </span>
          )),
        )}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-rule">
      <div className="hero-grain absolute inset-0 opacity-[0.04] pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pb-36 md:pt-32">
        <Reveal>
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>Est. 2026 · Bangalore, IN · {formattedDate()}</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="font-display mt-10 max-w-[18ch] text-[clamp(3.2rem,11vw,10.5rem)] font-medium leading-[0.92] tracking-[-0.035em]">
            Take the power
            <br />
            <span className="font-serif italic text-accent">back.</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-12 max-w-3xl text-xl leading-relaxed text-ink-soft md:text-2xl">
            <span className="font-serif italic">Contra.Ventures</span> is a
            product studio of one, building tools that return agency to the
            person holding them. Against extraction. Against resignation.
            Against the quiet assumption that someone else will fix it.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-14 flex flex-wrap gap-3 font-mono text-[12px] uppercase tracking-[0.2em]">
            <Magnetic
              href="#products"
              className="group inline-flex items-center gap-3 rounded-full border border-ink bg-ink px-6 py-3 text-bg hover:bg-accent hover:border-accent transition-colors"
              strength={0.2}
            >
              <span>See the studio</span>
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Magnetic>
            <Magnetic
              href="#manifesto"
              className="group inline-flex items-center gap-3 rounded-full border border-rule px-6 py-3 hover:border-ink transition-colors"
              strength={0.2}
            >
              <span>Read the manifesto</span>
              <span className="transition-transform group-hover:translate-x-0.5">
                ↓
              </span>
            </Magnetic>
            <Magnetic
              href="#connect"
              className="group inline-flex items-center gap-3 rounded-full border border-rule px-6 py-3 hover:border-ink transition-colors"
              strength={0.2}
            >
              <span>Connect</span>
            </Magnetic>
          </div>
        </Reveal>

        <div className="mt-24 flex items-end justify-between border-t border-rule pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
          <span>one person · twenty-plus builds · zero permission</span>
          <a href="#manifesto" className="hover:text-ink transition">
            scroll ↓
          </a>
        </div>
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section id="manifesto" className="border-b border-rule bg-bg-alt">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-12 md:py-36">
        <div className="md:col-span-4">
          <Reveal>
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              the manifesto
            </div>
            <h2 className="font-display mt-6 text-5xl leading-[0.95] tracking-[-0.02em] md:text-6xl">
              <span className="font-serif italic">Contra</span>
              <br />
              means
              <br />
              <span className="font-serif italic text-accent">against.</span>
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-8 md:pl-8">
          <Reveal delay={120}>
            <p className="font-serif text-3xl leading-[1.25] tracking-tight text-ink md:text-4xl">
              We are the last generation that remembers life before the
              algorithm, and the first one that can rewrite it.
            </p>
          </Reveal>
          <div className="mt-10 max-w-2xl space-y-6 text-lg leading-[1.65] text-ink-soft md:text-[19px]">
            <Reveal delay={180}>
              <p>
                Big tech asked us to opt in. What we got were tools built for
                their shareholders — every feed, every notification, every
                default optimized for quarters we don&apos;t share in.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p>
                Opting out isn&apos;t the answer. We live here now. The
                networks, the feeds, the AI — all of it is the world. We
                don&apos;t escape it. We reclaim it.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p>
                <span className="text-ink font-medium">
                  Contra.Ventures is a studio for the reclamation.
                </span>{" "}
                Tools that return agency. Oracles over self-reports. Contracts
                over willpower. Protocols that outlast any one platform. Built
                by one person, with AI as leverage, in Bangalore, and shipped
                before anyone was asked.
              </p>
            </Reveal>
            <Reveal delay={360}>
              <p className="font-serif italic text-2xl text-ink">
                Bet on your body. Commit with your wallet. Think in reverse.
                Wire yourself different. Take the power back.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-6">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-6 py-10 ${i % 2 === 0 ? "border-r" : ""} md:border-r ${i >= stats.length - 1 ? "md:border-r-0" : ""} ${i < 4 ? "border-b md:border-b-0" : ""} border-rule`.trim()}
          >
            <div className="font-display text-4xl tracking-[-0.02em] md:text-5xl">
              {s.value}
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StudioFlagship() {
  return (
    <section id="flagship" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            flagship · live
          </div>
        </Reveal>
        <div className="mt-10 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal delay={80}>
              <h2 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-[-0.035em]">
                {flagship.name}
                <span className="text-accent">.</span>
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 font-serif text-2xl italic text-ink-soft">
                Bet on yourself.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <Reveal delay={220}>
              <p className="text-xl leading-[1.5] md:text-2xl">
                {flagship.tagline}
              </p>
            </Reveal>
            <Reveal delay={280}>
              <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
                {flagship.body}
              </p>
            </Reveal>
            <Reveal delay={340}>
              <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-3 font-mono text-[12px] uppercase tracking-[0.18em]">
                {flagship.href && (
                  <a
                    href={flagship.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-baseline gap-2 border-b border-ink pb-1 hover:text-accent hover:border-accent transition-colors"
                  >
                    keep-wine.vercel.app
                    <span className="transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </a>
                )}
                <span className="text-ink-mute">play-money live</span>
                <span className="text-ink-mute">oracle v1</span>
                <span className="text-ink-mute">content-first gtm</span>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudioGrid({
  id,
  eyebrow,
  title,
  lede,
  items,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede: string;
  items: Project[];
}) {
  return (
    <section id={id} className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                {eyebrow}
              </div>
              <h2 className="font-display mt-4 text-5xl leading-[0.95] tracking-[-0.025em] md:text-6xl">
                {title}
              </h2>
              <p className="mt-5 max-w-xs font-serif text-xl italic text-ink-soft md:text-2xl">
                {lede}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <ul className="grid grid-cols-1 border-t border-l border-rule md:grid-cols-2">
              {items.map((p, i) => (
                <li key={p.name} className="border-b border-r border-rule">
                  <Reveal delay={60 + i * 40}>
                    <ProjectCard p={p} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const Wrap: React.ElementType = p.href ? "a" : "div";
  const wrapProps = p.href
    ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Wrap
      {...wrapProps}
      className="group relative block h-full overflow-hidden p-7 md:p-9"
    >
      <div className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100" />
      <div className="relative flex h-full flex-col justify-between gap-8 transition-colors duration-500 group-hover:text-bg">
        <div>
          <div className="flex items-center justify-between gap-4">
            <h3 className="font-display text-xl tracking-tight md:text-2xl">
              {p.name}
            </h3>
            <StatusChip s={p.status} />
          </div>
          <p className="mt-4 text-[15px] leading-[1.55] md:text-base">
            {p.tagline}
          </p>
          {p.body && (
            <p className="mt-3 text-sm leading-relaxed text-ink-soft group-hover:text-bg/70 transition-colors">
              {p.body}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute group-hover:text-bg/70 transition-colors">
          <span>{p.meta ?? p.repo ?? ""}</span>
          {p.href && (
            <span className="transition-transform group-hover:translate-x-1">
              open →
            </span>
          )}
        </div>
      </div>
    </Wrap>
  );
}

function StatusChip({ s }: { s: Project["status"] }) {
  const map = {
    live: { bg: "bg-live", label: "live" },
    wip: { bg: "bg-wip", label: "wip" },
    research: { bg: "bg-research", label: "research" },
    draft: { bg: "bg-ink-mute", label: "draft" },
  } as const;
  const { bg, label } = map[s];
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute group-hover:text-bg/70 transition-colors">
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${bg}`} />
      {label}
    </span>
  );
}

function Beliefs() {
  return (
    <section id="beliefs" className="border-b border-rule bg-bg-alt">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                04 — beliefs
              </div>
              <h2 className="font-display mt-4 text-5xl leading-[0.95] tracking-[-0.025em] md:text-6xl">
                Ideas I<br />
                <span className="font-serif italic">bet on.</span>
              </h2>
              <p className="mt-5 max-w-xs font-serif text-xl italic text-ink-soft md:text-2xl">
                Load-bearing convictions. Every build traces back to one.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-rule border-y border-rule">
              {beliefs.map((b, i) => (
                <li key={b.title}>
                  <Reveal delay={60 + i * 40}>
                    <div className="group grid gap-4 py-7 md:grid-cols-12 md:gap-8">
                      <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute md:col-span-1 md:pt-1.5">
                        0{i + 1}
                      </div>
                      <div className="md:col-span-4">
                        <h3 className="font-display text-2xl tracking-tight md:text-[28px] md:leading-[1.15]">
                          {b.title}
                        </h3>
                      </div>
                      <p className="text-[15px] leading-[1.6] text-ink-soft md:col-span-7 md:text-base">
                        {b.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Causes() {
  return (
    <section id="causes" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                05 — what this is for
              </div>
              <h2 className="font-display mt-4 text-5xl leading-[0.95] tracking-[-0.025em] md:text-7xl">
                Causes
                <br />I care
                <br />
                <span className="font-serif italic text-accent">about.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-7 md:pt-6">
            <ul className="space-y-12">
              {causes.map((c, i) => (
                <li key={c.title}>
                  <Reveal delay={80 + i * 60}>
                    <div>
                      <h3 className="font-display text-3xl leading-[1.1] tracking-[-0.02em] md:text-4xl">
                        {c.title}
                        <span className="text-accent">.</span>
                      </h3>
                      <p className="mt-4 max-w-2xl text-lg leading-[1.6] text-ink-soft">
                        {c.body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-b border-rule bg-bg-alt">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                06 — skills
              </div>
              <h2 className="font-display mt-4 text-5xl leading-[0.95] tracking-[-0.025em] md:text-6xl">
                What I<br />
                <span className="font-serif italic">actually do.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={100}>
              <ul className="flex flex-wrap gap-3">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-rule bg-bg px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-soft transition hover:border-ink hover:text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Connect() {
  return (
    <section id="connect" className="border-b border-rule">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <Reveal>
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            07 — connect
          </div>
          <h2 className="font-display mt-6 text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.92] tracking-[-0.03em]">
            If this sounds like
            <br />
            <span className="font-serif italic text-accent">your world —</span>
          </h2>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-soft md:text-2xl">
            Investors, operators, writers, solo builders, anyone betting on
            their body, their brain, or their time. Write directly. No forms.
          </p>
        </Reveal>

        <ul className="mt-16 grid gap-0 border-t border-rule md:grid-cols-2">
          {writing.map((w, i) => (
            <li
              key={w.name}
              className={`border-b border-rule ${i % 2 === 0 ? "md:border-r" : ""}`}
            >
              <Reveal delay={80 + i * 50}>
                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between gap-6 overflow-hidden px-8 py-10 md:px-12 md:py-14"
                >
                  <div className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                  <div className="relative transition-colors duration-500 group-hover:text-bg">
                    <div className="font-display text-3xl tracking-[-0.02em] md:text-4xl">
                      {w.name}
                    </div>
                    <div className="mt-2 max-w-md text-[15px] leading-relaxed text-ink-soft group-hover:text-bg/80 transition-colors">
                      {w.tagline}
                    </div>
                  </div>
                  <div className="relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors duration-500 group-hover:text-bg">
                    <span className="transition-transform group-hover:translate-x-1">
                      {w.label} →
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-8 font-mono md:grid-cols-3">
          <ContactLine
            label="email"
            value="param@contra.ventures"
            href="mailto:param@contra.ventures"
          />
          <ContactLine
            label="studio"
            value="contra.ventures"
            href="https://contra.ventures"
          />
          <ContactLine
            label="location"
            value="Bangalore, IN — GMT+5:30"
            href="#top"
          />
        </div>
      </div>
    </section>
  );
}

function ContactLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group block border-t border-rule pt-5 hover:text-accent transition"
    >
      <div className="text-[10px] uppercase tracking-[0.22em] text-ink-mute">
        {label}
      </div>
      <div className="mt-2 flex items-baseline justify-between gap-3">
        <span className="text-[15px]">{value}</span>
        <span className="text-ink-mute transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
          →
        </span>
      </div>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-bg">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="font-display text-[clamp(2rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.025em]">
              contra<span className="text-accent">.</span>ventures
            </div>
            <p className="mt-4 max-w-md font-serif text-xl italic text-bg/70">
              A product studio of one. Against extraction. For agency.
            </p>
          </div>
          <div className="md:col-span-6 md:text-right">
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-bg/50">
              operated by
            </div>
            <div className="mt-2 text-2xl">Param Vaswani</div>
            <div className="mt-1 font-mono text-[12px] text-bg/60">
              Bangalore · paramxclaudedev
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-bg/15 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-bg/50">
          <span>© 2026 contra.ventures · all rights reserved</span>
          <span>
            built in-house with Claude Code · shipped before permission
          </span>
        </div>
      </div>
    </footer>
  );
}

function formattedDate() {
  return new Date()
    .toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
    .toUpperCase();
}

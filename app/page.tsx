"use client";

import {
  products,
  research,
  infrastructure,
  writing,
  stats,
  type Project,
} from "@/lib/projects";
import { useLens } from "./_components/LensContext";
import { ReadFirst } from "./_components/ReadFirst";
import { reorder } from "@/lib/lenses";

export default function Home() {
  const { active, hasChosen } = useLens();

  const orderedProducts = hasChosen
    ? reorder(products, active.order.products)
    : products;
  const orderedResearch = hasChosen
    ? reorder(research, active.order.research)
    : research;
  const orderedInfra = hasChosen
    ? reorder(infrastructure, active.order.infrastructure)
    : infrastructure;

  return (
    <main className="font-sans text-ink">
      <TopBar />
      <Hero lede={active.heroLede} />
      <StatsStrip />
      <ReadFirst />
      <Flagship />
      <Section
        id="products"
        eyebrow="01 / products"
        title="What I ship"
        lede="Live and in use. Some pay rent, most feed the loop."
      >
        <Grid items={orderedProducts} />
      </Section>
      <Section
        id="research"
        eyebrow="02 / research & evals"
        title="What I measure"
        lede="Benchmarks I couldn't find, so I built them."
      >
        <Grid items={orderedResearch} />
      </Section>
      <Section
        id="infrastructure"
        eyebrow="03 / infrastructure"
        title="How I ship fast"
        lede="MCPs, hooks, agents. The machinery behind 122 commits a week."
      >
        <Grid items={orderedInfra} />
      </Section>
      <Section
        id="writing"
        eyebrow="04 / writing"
        title="Where to read me"
        lede="Long-form arrives this week. Links here update as posts land."
      >
        <WritingGrid />
      </Section>
      <Contact />
      <Footer />
    </main>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-[13px]">
        <a href="#top" className="font-mono tracking-tight">
          param.build
        </a>
        <nav className="hidden gap-7 font-mono text-ink-mute md:flex">
          <a href="#products" className="hover:text-ink">
            products
          </a>
          <a href="#research" className="hover:text-ink">
            research
          </a>
          <a href="#infrastructure" className="hover:text-ink">
            infra
          </a>
          <a href="#writing" className="hover:text-ink">
            writing
          </a>
          <a href="#contact" className="hover:text-ink">
            contact
          </a>
        </nav>
        <a
          href="mailto:param@param.build"
          className="rounded-full border border-ink px-3 py-1 font-mono hover:bg-ink hover:text-bg"
        >
          say hi →
        </a>
      </div>
    </header>
  );
}

function Hero({ lede }: { lede: string }) {
  return (
    <section id="top" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 pb-20 pt-24 md:pb-32 md:pt-36">
        <div className="flex items-center gap-3 font-mono text-[12px] uppercase tracking-widest text-ink-mute rise">
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-live opacity-80" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
          </span>
          <span>Bangalore · building Keep · {formattedDate()}</span>
        </div>
        <h1 className="font-display rise delay-1 mt-8 max-w-5xl text-[clamp(2.8rem,7.4vw,6.6rem)] font-medium leading-[1.02] tracking-tight">
          I build prediction markets
          <br />
          <span className="font-serif italic text-ink-soft">
            settled by your own body.
          </span>
        </h1>
        <p
          key={lede}
          className="rise delay-2 mt-10 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl"
        >
          {lede}
        </p>
        <div className="rise delay-3 mt-12 flex flex-wrap gap-3 font-mono text-[13px]">
          <CTA href="#flagship" primary>
            See Keep
          </CTA>
          <CTA href="#infrastructure">See the machinery</CTA>
          <CTA href="https://github.com/paramxclaudedev">GitHub</CTA>
          <CTA href="mailto:param@param.build">Email</CTA>
        </div>
      </div>
    </section>
  );
}

function StatsStrip() {
  return (
    <section className="border-b border-rule bg-bg-alt">
      <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-6">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-6 py-8 ${i !== stats.length - 1 ? "md:border-r border-rule" : ""} ${i < 4 ? "border-b md:border-b-0" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""}`.trim()}
          >
            <div className="font-display text-3xl md:text-4xl tracking-tight">
              {s.value}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ink-mute">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Flagship() {
  return (
    <section id="flagship" className="border-b border-rule">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12 md:gap-16 md:py-28">
        <div className="md:col-span-4">
          <div className="font-mono text-[11px] uppercase tracking-widest text-accent">
            flagship · live
          </div>
          <h2 className="font-display mt-4 text-5xl md:text-6xl leading-none tracking-tight">
            Keep.
          </h2>
          <p className="mt-4 font-serif text-2xl italic text-ink-soft">
            Bet on yourself.
          </p>
        </div>
        <div className="md:col-span-8">
          <p className="text-xl leading-relaxed md:text-2xl">
            You set a goal — 8 hours of sleep, 75% recovery, a sub-7:00 mile.
            You stake money behind it. If you miss, the money goes to a charity
            you actively dislike. An oracle reads your Whoop or Oura and settles
            the market — no self-reporting.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            This is Beeminder&rsquo;s idea with real markets, real stakes, and a
            cryptographic oracle underneath (
            <Link href="#infrastructure">BONP</Link>). Pre-seed, play money
            first, Gibraltar-licensed real money in 6–18 months.
          </p>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[13px]">
            <a
              href="https://keep-wine.vercel.app"
              className="group inline-flex items-baseline gap-2 border-b border-ink pb-0.5 hover:text-accent hover:border-accent"
            >
              keep-wine.vercel.app
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <span className="text-ink-mute">play money live</span>
            <span className="text-ink-mute">oracle v1 shipped</span>
            <span className="text-ink-mute">content-first GTM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
              {eyebrow}
            </div>
            <h2 className="font-display mt-4 text-4xl md:text-5xl leading-[1.05] tracking-tight">
              {title}
            </h2>
            <p className="mt-4 font-serif text-xl italic text-ink-soft md:text-2xl">
              {lede}
            </p>
          </div>
          <div className="md:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Grid({ items }: { items: Project[] }) {
  return (
    <ul className="grid grid-cols-1 border-t border-l border-rule md:grid-cols-2">
      {items.map((p) => (
        <li key={p.name} className="border-b border-r border-rule">
          <ProjectCard p={p} />
        </li>
      ))}
    </ul>
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
      className="group flex h-full flex-col justify-between gap-6 p-7 md:p-8 hover:bg-bg-alt"
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-xl tracking-tight md:text-2xl">
            {p.name}
          </h3>
          <StatusChip s={p.status} />
        </div>
        <p className="mt-3 text-[15px] leading-relaxed md:text-base">
          {p.tagline}
        </p>
        {p.body && (
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
        )}
      </div>
      <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-ink-mute">
        <span>{p.meta ?? p.repo ?? ""}</span>
        {p.href && (
          <span className="transition-transform group-hover:translate-x-0.5">
            open →
          </span>
        )}
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
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-ink-mute">
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${bg}`} />
      {label}
    </span>
  );
}

function WritingGrid() {
  return (
    <ul className="divide-y divide-rule border-y border-rule">
      {writing.map((w) => (
        <li key={w.name}>
          <a
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-6 py-6 hover:text-accent"
          >
            <div>
              <div className="font-display text-2xl tracking-tight">
                {w.name}
              </div>
              <div className="mt-1 text-sm text-ink-soft">{w.tagline}</div>
            </div>
            <span className="font-mono text-[12px] text-ink-mute transition-transform group-hover:translate-x-0.5 group-hover:text-accent">
              visit →
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-b border-rule">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="font-mono text-[11px] uppercase tracking-widest text-ink-mute">
          05 / contact
        </div>
        <h2 className="font-display mt-6 text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-tight">
          If you bet on your body,
          <br />
          <span className="font-serif italic text-accent">we should talk.</span>
        </h2>
        <p className="mt-8 max-w-2xl text-lg text-ink-soft">
          Investors, operators, people who want to commit to something and
          actually keep it — write directly. No forms.
        </p>
        <div className="mt-10 grid gap-6 font-mono text-[14px] md:grid-cols-3">
          <ContactLine
            label="email"
            value="param@param.build"
            href="mailto:param@param.build"
          />
          <ContactLine
            label="linkedin"
            value="paramvaswani"
            href="https://linkedin.com/in/paramvaswani"
          />
          <ContactLine
            label="github"
            value="paramxclaudedev"
            href="https://github.com/paramxclaudedev"
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
      className="group block border-t border-rule pt-5 hover:text-accent"
    >
      <div className="text-[11px] uppercase tracking-widest text-ink-mute">
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
  const { hasChosen, primary, fork, reset } = useLens();
  return (
    <footer className="bg-bg-alt">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 font-mono text-[11px] uppercase tracking-widest text-ink-mute">
        <span>© 2026 Param Vaswani · Bangalore</span>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {hasChosen && (
            <>
              <span>
                tour: {primary.label}
                {fork ? ` / ${fork.label}` : ""}
              </span>
              <button
                type="button"
                onClick={reset}
                className="underline-offset-4 hover:text-ink hover:underline"
              >
                reset tour
              </button>
            </>
          )}
          <span>made in 90 minutes with Claude Code</span>
        </div>
      </div>
    </footer>
  );
}

function CTA({
  href,
  children,
  primary = false,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full border px-4 py-2 transition";
  const style = primary
    ? "bg-ink text-bg border-ink hover:bg-accent hover:border-accent"
    : "border-rule hover:border-ink";
  return (
    <a href={href} className={`${base} ${style}`}>
      <span>{children}</span>
      <span>→</span>
    </a>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="border-b border-ink-mute text-ink hover:border-accent hover:text-accent"
    >
      {children}
    </a>
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

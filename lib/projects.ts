export type Status = "live" | "wip" | "research" | "draft";

export type Project = {
  name: string;
  tagline: string;
  body?: string;
  status: Status;
  href?: string;
  repo?: string;
  meta?: string;
};

export const flagship: Project = {
  name: "Keep",
  tagline:
    "Charity-forfeit commitment markets settled by your Whoop or Oura. Bet on yourself. Miss, you fund the cause you despise.",
  body: "Keep is what happens when you stop trusting your willpower and start trusting infrastructure. Set a goal — eight hours of sleep, 75% recovery, a sub-seven mile. Stake money behind it. Miss, and the money goes to a charity you actively dislike. Your Whoop or Oura settles the market. No self-reports. No loopholes. No I'll-start-Monday.\n\nBeeminder's idea, with real markets, real stakes, and a cryptographic oracle underneath. Pre-seed, play-money live, Gibraltar-licensed real money in 6–18 months. The thesis: the most underused asset in your life is the data your body is already generating.",
  status: "live",
  href: "https://keep-wine.vercel.app",
  repo: "paramxclaudedev/keep",
  meta: "2026 · pre-seed · Bangalore",
};

export const products: Project[] = [
  {
    name: "Param Hub",
    tagline: "Life OS dashboard. Seven tabs of everything I track.",
    status: "live",
    href: "https://likehearted.life",
    meta: "React · Vite",
  },
  {
    name: "Wired Different",
    tagline: "Vibecoding for ADHD brains. Course + community.",
    status: "live",
    href: "https://wired-different.vercel.app",
    meta: "landing · waitlist",
  },
  {
    name: "Think Forward-Reverse",
    tagline: "Decision-making by working backwards. Claude-native.",
    status: "live",
    href: "https://think-forward-reverse.vercel.app",
    meta: "Claude API",
  },
  {
    name: "Pickless",
    tagline: "Food decision agent. Tell it your vibe, it picks your meal.",
    status: "live",
    href: "https://picklessai.vercel.app",
    meta: "Gemini 2.5",
  },
  {
    name: "Build Yourself",
    tagline: "Protocols, habits, measurement. A private glow-up OS.",
    status: "live",
    href: "https://build-yourself-v3.vercel.app",
    meta: "v3",
  },
  {
    name: "Board of Directors",
    tagline: "An imaginary personal board. Scheduled check-ins. AI voices.",
    status: "wip",
    href: "https://board-of-directors-app.vercel.app",
    meta: "Next.js · Gemini 2.5 Pro",
  },
  {
    name: "arxiv-digest",
    tagline: "Arxiv URL → digest tailored to your stack. Cached prompts.",
    status: "live",
    href: "https://arxiv-digest-hazel.vercel.app",
    meta: "Opus 4.7",
  },
  {
    name: "Both, And",
    tagline:
      "Social and intellectual matching for people who hold contradictions.",
    status: "wip",
    meta: "relationship with Keep TBD",
  },
];

export const research: Project[] = [
  {
    name: "CMCHP",
    tagline: "Cross-Model Context Handoff Protocol v0.1.",
    body: "A spec for passing intent between different LLMs without re-priming. Paper plus benchmark.",
    status: "research",
    repo: "paramxclaudedev/cross-model-handoff",
  },
  {
    name: "MCP Tool-Selection Eval",
    tagline: "How accurately do models pick the right tool from a menu of 78?",
    body: "7 models, n=665. Opus 4.7 = Sonnet 4.6 = 97.7%. GPT-5 Mini beat GPT-5.",
    status: "research",
    meta: "cross-provider · open-sourcing",
  },
  {
    name: "biometric-json-eval",
    tagline: "29-case benchmark for settling biometric markets with LLMs.",
    body: "Opus 4.7 + Gemini quorum produced ~0 dangerous errors at ~$0.05 per settlement.",
    status: "research",
  },
  {
    name: "Voice-Preservation Eval",
    tagline: "How many rewrites before a model destroys your voice?",
    body: "Sequential rewrite chain per model. Opus judges drift each iteration.",
    status: "live",
    repo: "~/.claude/skills/voice-preservation-eval",
  },
  {
    name: "Claude-Code Hook Eval",
    tagline: "Actual wall-clock time saved per hook in my settings.",
    body: "Parses transcripts, counts fires, benchmarks latency. Outputs a keep/tune/drop verdict.",
    status: "live",
    repo: "~/.claude/skills/claude-code-hook-eval",
  },
  {
    name: "yt-tldr-eval",
    tagline: "100-video YouTube summarization bake-off. Opus judges.",
    status: "research",
  },
];

export const infrastructure: Project[] = [
  {
    name: "BONP",
    tagline: "Biometric Oracle Network Protocol. The spec under Keep.",
    status: "live",
    href: "https://biometric-oracle-protocol.vercel.app",
    repo: "paramxclaudedev/biometric-oracle-protocol",
  },
  {
    name: "whoop-mcp",
    tagline: "Whoop API as an MCP server. Public on GitHub. Published to npm.",
    status: "live",
    repo: "paramxclaudedev/whoop-mcp",
  },
  {
    name: "spaceship-mcp",
    tagline: "14 tools for the Spaceship domain registrar.",
    status: "live",
  },
  {
    name: "vercel-mcp",
    tagline: "15 tools for the Vercel REST API.",
    status: "live",
  },
  {
    name: "claude-code-hooks-mcp",
    tagline: "Read-only MCP for inspecting ~/.claude/settings.json hooks.",
    status: "live",
  },
  {
    name: "Claude Code Playbook",
    tagline: "4 MCPs, 11 skills, 15 hooks, 5 evals. A public monorepo.",
    status: "live",
    repo: "paramxclaudedev/claude-code-playbook",
  },
  {
    name: "Life OS",
    tagline: "Seven autonomous scheduled agents running my day.",
    body: "Morning brief. Keep monitor. Friday lessons. Monthly synthesis. Inbox triage. Cron + launchd.",
    status: "live",
    repo: "paramxclaudedev/life-os",
  },
  {
    name: "Compaction Predictor",
    tagline:
      "A hook that predicts Claude Code context compaction before it happens.",
    body: "Hybrid hard-rule plus logistic regression. Active in my settings.",
    status: "live",
    repo: "paramxclaudedev/context-compaction-predictor",
  },
  {
    name: "Inbox Triage",
    tagline: "launchd agent routing my Todoist inbox every 30 minutes.",
    status: "live",
  },
  {
    name: "Biometric Inference Proxy",
    tagline:
      "Hono proxy. Whoop recovery → four modes → rewrites temperature and thinking.",
    status: "wip",
  },
  {
    name: "mcp-red-team",
    tagline: "Adversarial MCP security scanner. Eight attack categories.",
    status: "wip",
  },
];

export type Belief = { title: string; body: string };

export const beliefs: Belief[] = [
  {
    title: "Biometric sovereignty",
    body: "Your body generates more data than any platform. It should settle your bets, gate your commitments, and stay encrypted. Oracles, not self-reports.",
  },
  {
    title: "Solo is a structural advantage",
    body: "With AI as a force multiplier, one person can run what used to need a team of ten. Fewer meetings, tighter loops, clearer taste.",
  },
  {
    title: "Commitment beats motivation",
    body: "Willpower is weather. Contracts with your wallet, your body, and your friends are climate. Build the climate.",
  },
  {
    title: "Tools, not platforms",
    body: "Platforms extract attention. Tools return agency. I build tools.",
  },
  {
    title: "Ship before permission",
    body: "The internet rewards the people who were already shipping when the moment arrived. Don't wait to be anointed.",
  },
  {
    title: "ADHD is a spec, not a bug",
    body: "Tools designed for neurotypical focus quietly exclude half the people who could use them best. Design for the brain you actually have.",
  },
];

export type Cause = { title: string; body: string };

export const causes: Cause[] = [
  {
    title: "Return agency to the individual",
    body: "The default has been: platforms set the terms, users comply. I'm building the opposite. Every tool here tries to give the user back a lever.",
  },
  {
    title: "Make the frontier legible",
    body: "AI is moving faster than most people's mental model of it. Writing, evals, and open playbooks narrow the gap.",
  },
  {
    title: "Bridge the tech-human divide",
    body: "We don't get to opt out of the networked world. We do get to reclaim how it's built. Contra means against — against resignation, against extraction, against the idea that someone else will fix it.",
  },
];

export const manifesto: { lead: string; paragraphs: string[]; close: string } =
  {
    lead: "We were promised the future. They handed us the engagement metric.",
    paragraphs: [
      "Twenty years of platform capitalism gave us a feed that runs on outrage, an attention economy that monetized the inside of our skulls, and a pile of products none of us would have asked for if we'd been asked. The prevailing mood is gratitude.",
      "Contra.Ventures starts from the opposite premise. The internet was supposed to be a liberation technology. It still can be. What it needs is people willing to build with that intent — not as customers, not as creators inside someone else's walls, but as owners.",
      "A studio of one is a contradiction in terms. That's the point. With AI as a leverage multiplier, one person can hold what used to take a team of ten. Tighter loops. No meetings. No political capital. No quarterly review. Just the work, the ship date, and the next idea.",
      "Every tool here traces back to one stake — return the lever to the person holding the device. If a product extracts your attention without giving you compounding agency, it's a platform. If a product hands you a lever you didn't have before, it's a tool. I build tools.",
      "Bet on your body, not the algorithm's read of it. Commit with your wallet, not a screenshot you'll forget. Think in reverse, because forward-only is how the platform thinks. Wire yourself different, because the default wiring was somebody else's project plan.",
    ],
    close:
      "Take the power back. Not by opting out — that's the easy fantasy. By opting in to the only world we have, and rebuilding it from the inside, one tool at a time.",
  };

export const origin: { eyebrow: string; title: string; body: string[] } = {
  eyebrow: "how this happened",
  title: "I deleted the standard plan.",
  body: [
    "Started Contra.Ventures in early 2026, in Bangalore, solo. No co-founder, no warm intro, no incubator. The plan was the standard plan: raise pre-seed, hire two engineers, ship in eighteen months, hope you don't run out before product-market fit lands.",
    "I wrote that plan. Then I deleted it.",
    "What changed: AI got good enough that one person plus a Claude Code window could sustain the cadence of a small team. So I started shipping. Keep first. Then BONP, the oracle protocol underneath it. Then Param Hub for the data, Wired Different for the community, a half-dozen smaller experiments. By month three, twelve products live, four MCP servers published, six evals open-sourced. All on GitHub. All settled by data my body produced.",
    "Contra.Ventures is the holding shape for the whole portfolio. A studio means I make things, I ship them, and the throughline is consistent enough to call it a body of work. Not a startup pretending to be a movement. Not a movement pretending to be a startup. A studio.",
    "The thesis I'm betting on: the next decade rewards people who can hold the entire stack — taste, distribution, code, content, biometrics, AI — alone or in tiny teams. The age of the indie maker is back, and this time the leverage is real.",
  ],
};

export const process: { eyebrow: string; title: string; body: string[] } = {
  eyebrow: "how i work",
  title: "Zero willpower on logistics.",
  body: [
    "Wake up. Whoop tells me what kind of day this is. Recovery green ships code. Yellow writes. Red reads.",
    "A morning brief runs at 7am via launchd — pulls Whoop data, Notion tasks, calendar, GitHub commits, and prints a single page of what to do. By 9am I'm in a Claude Code window. By noon something has shipped or a draft has gone live.",
    "The stack: Claude Code as the primary IDE. Cursor for visual work. Custom MCP servers for everything I touch repeatedly — Whoop, Spaceship, Vercel, Notion, Todoist. Hooks for compaction, formatting, sound cues. Skills for repeating workflows. Memory files so the system remembers me between sessions.",
    "Output, last seven days: 122 commits across 36+ repos. Three to five long-form pieces a month. One new product or eval per week.",
    "Inputs that move the needle: Wendell Berry, Hunter Thompson, Beeminder's archive, Patrick Collison's signal-boost feed, every Anthropic paper that drops. Sleep, lifting, walking, repeat. The point of the system isn't speed for its own sake. It's spending zero willpower on logistics so all the willpower lands on taste decisions, hard writing, and the next bet.",
  ],
};

export type Currently = { label: string; value: string };
export const currently: Currently[] = [
  {
    label: "Building",
    value:
      "Keep oracle v2, biometric-json eval going public, Anthropic Fellows app.",
  },
  {
    label: "Writing",
    value:
      "First Substack on oracle-as-moat. Drafts on solo-founder leverage and ADHD-as-spec.",
  },
  {
    label: "Reading",
    value:
      "Wendell Berry, Hannah Coulter. Latest Patrick Collison threads on progress. Constitutional AI papers.",
  },
  {
    label: "Recovering from",
    value: "Whoop 31% yesterday. Today is a write day.",
  },
  {
    label: "Listening to",
    value: "Mom's House for stupid. Conversations with Tyler for serious.",
  },
  {
    label: "Stake",
    value:
      "First long-form piece live by the end of this week. No more drafts.",
  },
];

export type LogEntry = {
  date: string;
  what: string;
  detail: string;
  href?: string;
  kind: "ship" | "write" | "open-source" | "eval";
};

export const buildLog: LogEntry[] = [
  {
    date: "2026-04-25",
    what: "contra.ventures launched",
    detail:
      "The studio site goes live. All twenty-plus builds, the manifesto, and the build log itself.",
    href: "https://contra.ventures",
    kind: "ship",
  },
  {
    date: "2026-04-24",
    what: "Pickless live",
    detail:
      "Consumer food-decision agent. Next.js 16 + Gemini 2.5. Sumi/Washi aesthetic.",
    href: "https://picklessai.vercel.app",
    kind: "ship",
  },
  {
    date: "2026-04-24",
    what: "Board of Directors unblocked",
    detail:
      "Resend + Todoist OAuth wired. Deliberation engine on Gemini 2.5 Pro.",
    href: "https://board-of-directors-app.vercel.app",
    kind: "ship",
  },
  {
    date: "2026-04-24",
    what: "Whoop OAuth complete",
    detail:
      "Keep oracle v1 fully wired. Real biometric data settling real markets.",
    kind: "ship",
  },
  {
    date: "2026-04-21",
    what: "150 skills installed",
    detail:
      "Writing, research, scientific, finance, ops — the full Claude Code surface.",
    kind: "open-source",
  },
  {
    date: "2026-04-20",
    what: "Param Hub v2 live",
    detail:
      "Japanese-Nordic overhaul. Warm-paper + warm-obsidian dual theme. Terracotta accent.",
    href: "https://likehearted.life",
    kind: "ship",
  },
  {
    date: "2026-04-20",
    what: "param-site live",
    detail:
      "Single-page consolidation portfolio at param-vaswani.vercel.app. Now reborn as contra.ventures.",
    kind: "ship",
  },
  {
    date: "2026-04-19",
    what: "Inbox triage agent shipped",
    detail:
      "launchd, every 30 minutes, Sonnet 4.6 routes Todoist inbox automatically.",
    kind: "ship",
  },
  {
    date: "2026-04-19",
    what: "14-agent parallel sweep",
    detail:
      "Auto-mode fan-out: 14 non-overlapping subagents, ~14/14 completion.",
    kind: "ship",
  },
  {
    date: "2026-04-17",
    what: "Lifebet → Keep pivot",
    detail: "Charity-forfeit commitment markets become the thesis. 90% focus.",
    kind: "ship",
  },
  {
    date: "2026-04-17",
    what: "biometric-json eval",
    detail:
      "29-case benchmark. Opus 4.7 + Gemini quorum hit ~0 dangerous errors at $0.05/settlement.",
    kind: "eval",
  },
  {
    date: "2026-04-15",
    what: "MCP Tool-Selection eval v2",
    detail:
      "7 models, n=665 cross-provider. Opus 4.7 = Sonnet 4.6 = 97.7%. GPT-5 Mini beat GPT-5.",
    kind: "eval",
  },
];

export const liveCard: {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  meta: string[];
} = {
  eyebrow: "real-time · public",
  title: "Watch the studio in motion.",
  body: "Param Hub is my Life OS — the public dashboard where everything I track lives. Whoop recovery, today's tasks, sleep, training, content pipeline, the works. Updated continuously, no curation. If you want the unfiltered view, it's there.",
  cta: "Open Param Hub",
  href: "https://likehearted.life",
  meta: ["seven tabs", "react · vite", "live since 2026", "no auth, public"],
};

export type Pull = { quote: string; cite?: string };
export const pulls: Pull[] = [
  {
    quote:
      "If a product extracts your attention without giving you compounding agency, it's a platform. If a product hands you a lever you didn't have before, it's a tool. I build tools.",
  },
  {
    quote: "A studio of one is a contradiction in terms. That's the point.",
  },
  {
    quote:
      "The age of the indie maker is back. This time the leverage is real.",
  },
];

export type LibraryItem = {
  title: string;
  author: string;
  kind: "book" | "essay" | "podcast" | "paper" | "newsletter";
  why: string;
};

export const library: LibraryItem[] = [
  {
    title: "Hannah Coulter",
    author: "Wendell Berry",
    kind: "book",
    why: "On membership, locality, and the slow life. The antidote to platform-scale thinking.",
  },
  {
    title: "Fear and Loathing in Las Vegas",
    author: "Hunter S. Thompson",
    kind: "book",
    why: "The voice. First-person, full velocity, no apologies.",
  },
  {
    title: "The Beeminder archive",
    author: "Daniel Reeves & Bethany Soule",
    kind: "essay",
    why: "Twelve years of writing about commitment devices. Keep stands on this corpus.",
  },
  {
    title: "Conversations with Tyler",
    author: "Tyler Cowen",
    kind: "podcast",
    why: "The most demanding interviewer in tech-adjacent media. Calibrates taste.",
  },
  {
    title: "Constitutional AI",
    author: "Anthropic",
    kind: "paper",
    why: "The substrate I build on. Worth re-reading every quarter.",
  },
  {
    title: "The Argument",
    author: "Jerusalem Demsas et al.",
    kind: "newsletter",
    why: "Style bible for my long-form. 16 essays studied, voice sampled, prose tightened.",
  },
  {
    title: "Stripe Press catalog",
    author: "Patrick Collison & co.",
    kind: "book",
    why: "The bar for what a tech book can be. Permanent reference shelf.",
  },
  {
    title: "Mom's House",
    author: "Tom Segura & Christina P.",
    kind: "podcast",
    why: "Pure stupidity for the recovery days. ADHD brain needs both gears.",
  },
];

export type Conversation = {
  name: string;
  why: string;
  href?: string;
};

export const conversations: Conversation[] = [
  {
    name: "Patrick Collison",
    why: "On progress, infrastructure, and the case for ambition. From a distance, but the writing shows up regularly.",
    href: "https://patrickcollison.com",
  },
  {
    name: "The Beeminder community",
    why: "Years of forum threads on commitment devices. The prior art under Keep.",
    href: "https://forum.beeminder.com",
  },
  {
    name: "Anthropic Fellows cohort",
    why: "Currently applying. The conversations there — when they happen — will shape what comes after Keep.",
  },
  {
    name: "Solo-founder Slack circles",
    why: "Quiet rooms of people doing what I'm doing. The ones who don't post about it.",
  },
  {
    name: "ADHD-coded operators",
    why: "Folks who built with the brain they have, not the one they were told to want. We trade tools.",
  },
];

export type Ask = {
  who: string;
  what: string;
};

export const asks: Ask[] = [
  {
    who: "Investors / pre-seed checks",
    what: "Building Keep toward a $1.5–2.5M pre-seed. Biometric oracles, charity-forfeit commitment markets. Real-money license track in Gibraltar.",
  },
  {
    who: "Design partners",
    what: "If you'd actually use Keep — daily — to commit to a hard goal, I want to talk. The first hundred users shape the product.",
  },
  {
    who: "Solo-founder peers",
    what: "Trading playbooks with people running studios of one. Not advisor calls. Real working sessions.",
  },
  {
    who: "Long-form editors",
    what: "The essay pipeline is real and shipping. If you commission contrarian-tech writing, the door is open.",
  },
  {
    who: "Anthropic Fellows / frontier labs",
    what: "I want the application to land. If you're inside, a 15-minute call would mean a lot.",
  },
];

export type FAQ = { q: string; a: string };

export const faqs: FAQ[] = [
  {
    q: "Why solo? Why not raise and hire?",
    a: "Because the leverage shifted. With AI, one person plus a Claude Code window can hold the cadence of a team. Hiring before product-market fit is how good ideas get diluted. I'll hire when the ceiling is the bottleneck, not before.",
  },
  {
    q: "Why Bangalore?",
    a: "Because I live here. Because India is the most under-told tech story of the next decade. Because the cost-of-living arbitrage means I get to build for two years on what'd buy six months in San Francisco. And because the talent pool is closer than the discourse admits.",
  },
  {
    q: "Why publish everything on GitHub?",
    a: "Because moats from secrecy are weaker than moats from execution. The MCPs, the hooks, the evals — they're all open. The thing that matters is the rate of compound on top of them, and that's not transferable.",
  },
  {
    q: "How is Keep different from Beeminder or StickK?",
    a: "Beeminder is the prior art and I cite it constantly. The differences: Keep settles via biometric oracle (no self-reports), uses real markets (not just commitment contracts), and routes forfeits to charities you actively dislike (anti-charities), which research suggests is meaningfully more motivating than neutral ones.",
  },
  {
    q: "Are you actually shipping a real-money product?",
    a: "Play-money is live now. Real money requires a license — the Gibraltar track is the path. Six to eighteen months. Until then, the play-money version compounds users, surfaces UX bugs, and proves the oracle works.",
  },
  {
    q: "What's the studio's business model?",
    a: "Keep has a clear path: take rate on settled markets. Everything else in the studio is either funded by Keep, monetized via Substack/courses (Wired Different), or kept open as research that compounds the studio's surface area. No SaaS-by-default.",
  },
];

export type Day = { day: string; mode: string; hint: string };

export const cadence: Day[] = [
  { day: "Mon", mode: "ship", hint: "deepest code work" },
  { day: "Tue", mode: "ship", hint: "evals + research" },
  { day: "Wed", mode: "write", hint: "long-form" },
  { day: "Thu", mode: "ship", hint: "investor / partner calls" },
  { day: "Fri", mode: "synth", hint: "weekly lessons + planning" },
  { day: "Sat", mode: "rest", hint: "training + reading" },
  { day: "Sun", mode: "drift", hint: "no schedule" },
];

export const skills = [
  "product strategy",
  "full-stack (TypeScript · Next.js · Python)",
  "AI systems (Claude, Gemini, OpenAI, agentic tooling)",
  "MCP servers + Claude Code hooks",
  "prediction-market design",
  "biometric data pipelines",
  "evaluation & benchmarking",
  "narrative writing & GTM content",
  "solo founding & fast shipping",
];

export const writing: {
  name: string;
  tagline: string;
  href: string;
  label: string;
}[] = [
  {
    name: "Newsletter",
    tagline:
      "Solo-founder dispatches. Oracle-as-moat, the contrarian stack, how to ship without permission.",
    href: "https://paramvaswani.substack.com",
    label: "subscribe",
  },
  {
    name: "Substack archive",
    tagline: "Every long-form piece. No gating, no upsell.",
    href: "https://paramvaswani.substack.com/archive",
    label: "read",
  },
  {
    name: "GitHub",
    tagline: "36+ public repos. MCPs, hooks, evals, products. All open.",
    href: "https://github.com/paramxclaudedev",
    label: "browse",
  },
  {
    name: "LinkedIn",
    tagline: "Where the investor and operator conversations happen.",
    href: "https://linkedin.com/in/paramvaswani",
    label: "connect",
  },
];

export const stats = [
  { label: "studio builds shipped", value: "20+" },
  { label: "public repos", value: "36+" },
  { label: "commits, last 7 days", value: "122" },
  { label: "MCP servers", value: "4" },
  { label: "evals run", value: "6" },
  { label: "founder", value: "of 1" },
];

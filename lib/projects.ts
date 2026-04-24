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
  tagline: "Charity-forfeit commitment markets settled by your Whoop or Oura.",
  body: "You set a goal. You stake money behind it. Miss, and the money goes to a charity you actively dislike. An oracle reads your body and settles the market — no self-reporting, no loopholes. Beeminder's idea, real stakes, cryptographic underneath.",
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

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
  tagline: "Charity-forfeit commitment markets settled by Whoop and Oura.",
  body: "Bet on yourself. Miss the bet, the stake goes to charity. An oracle reads your biometric data and settles the market. Pre-seed, content-first.",
  status: "live",
  href: "https://keep-wine.vercel.app",
  repo: "paramxclaudedev/keep",
  meta: "solo founder · Bangalore · 2026",
};

export const products: Project[] = [
  {
    name: "Param Hub",
    tagline: "Life OS dashboard. Seven tabs of everything I track.",
    status: "live",
    href: "https://likehearted.life",
    meta: "React + Vite",
  },
  {
    name: "Wired Different",
    tagline: "Vibecoding for ADHD brains. Course + community.",
    status: "live",
    href: "https://wired-different.vercel.app",
    meta: "landing + waitlist",
  },
  {
    name: "Think Forward-Reverse",
    tagline: "AI tool for decision making by working backwards.",
    status: "live",
    href: "https://think-forward-reverse.vercel.app",
    meta: "Claude API",
  },
  {
    name: "Build Yourself v3",
    tagline: "Protocols, habits, measurement. A private glow-up OS.",
    status: "live",
    href: "https://build-yourself-v3.vercel.app",
  },
  {
    name: "Board of Directors",
    tagline: "Imaginary personal board, scheduled check-ins, AI voices.",
    status: "wip",
    href: "https://board-of-directors-app.vercel.app",
    meta: "Next.js 15",
  },
  {
    name: "arxiv-digest",
    tagline: "Arxiv URL → digest tailored to my stack. Cached prompts.",
    status: "live",
    href: "https://arxiv-digest-hazel.vercel.app",
    meta: "Opus 4.7",
  },
];

export const research: Project[] = [
  {
    name: "CMCHP",
    tagline: "Cross-Model Context Handoff Protocol v0.1.",
    body: "A spec for passing intent between different LLMs without re-priming. Paper + benchmark.",
    status: "research",
    repo: "paramxclaudedev/cross-model-handoff",
  },
  {
    name: "MCP Tool-Selection Eval",
    tagline:
      "How accurately do models pick the right MCP tool from a crowded menu of 78?",
    body: "7 models, n=665. Opus 4.7 = Sonnet 4.6 = 97.7%. GPT-5 Mini beat GPT-5.",
    status: "research",
    meta: "private · open-sourcing soon",
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
    body: "Sequential rewrite chain per model, Opus judges drift each iteration.",
    status: "live",
    repo: "~/.claude/skills/voice-preservation-eval",
  },
  {
    name: "Claude-Code Hook Eval",
    tagline: "Actual wall-clock time saved per hook in my settings.json.",
    body: "Parses transcripts, counts fires, benchmarks latency, applies a savings model. Outputs a keep/tune/drop verdict.",
    status: "live",
    repo: "~/.claude/skills/claude-code-hook-eval",
  },
  {
    name: "yt-tldr-eval",
    tagline:
      "100-video YouTube summarization bake-off. Five models, Opus as judge.",
    status: "research",
  },
];

export const infrastructure: Project[] = [
  {
    name: "whoop-mcp",
    tagline:
      "Whoop API as a Claude MCP server. Public on GitHub, published to npm.",
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
    tagline: "4 MCPs + 11 skills + 15 hooks + 5 evals. A public monorepo.",
    status: "live",
    repo: "paramxclaudedev/claude-code-playbook",
  },
  {
    name: "Life OS",
    tagline: "Seven autonomous scheduled-task agents running my life.",
    body: "Morning brief, Keep monitor (×3), Friday lessons, monthly synthesis, inbox triage. Cron + launchd.",
    status: "live",
    repo: "paramxclaudedev/life-os",
  },
  {
    name: "BONP",
    tagline: "Biometric Oracle Network Protocol. The spec under Keep.",
    status: "live",
    href: "https://biometric-oracle-protocol.vercel.app",
    repo: "paramxclaudedev/biometric-oracle-protocol",
  },
  {
    name: "Compaction Predictor",
    tagline:
      "Hook that predicts Claude Code context compaction before it happens.",
    body: "Hybrid hard-rule (≥80%) plus logistic regression. Active in my settings.json.",
    status: "live",
    repo: "paramxclaudedev/context-compaction-predictor",
  },
  {
    name: "Inbox Triage",
    tagline:
      "launchd agent routing my Todoist inbox via Sonnet 4.6 every 30 minutes.",
    status: "live",
  },
  {
    name: "mcp-red-team",
    tagline: "Adversarial MCP security scanner. Eight attack categories.",
    status: "wip",
  },
];

export const writing: { name: string; tagline: string; href?: string }[] = [
  {
    name: "Substack — forthcoming",
    tagline: "First post on oracle-as-moat going live this week.",
    href: "https://theargumentmag.com",
  },
  {
    name: "LinkedIn",
    tagline: "Solo-founder essays from the Bangalore build cave.",
    href: "https://linkedin.com/in/paramvaswani",
  },
  {
    name: "GitHub",
    tagline: "paramxclaudedev — 36+ public repos.",
    href: "https://github.com/paramxclaudedev",
  },
];

export const stats = [
  { label: "public repos", value: "36+" },
  { label: "commits, past 7 days", value: "122" },
  { label: "Claude sessions, past week", value: "388" },
  { label: "shipped products", value: "7" },
  { label: "evals run", value: "5" },
  { label: "MCP servers", value: "4" },
];

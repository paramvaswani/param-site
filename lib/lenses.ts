export type LensId = "founder" | "investor" | "engineer" | "friend" | "other";

export type Lens = {
  id: LensId;
  label: string;
  heroLede: string;
  readFirst: { name: string; href: string; why: string }[];
  order: {
    products: string[];
    research: string[];
    infrastructure: string[];
  };
};

export const LENSES: Lens[] = [
  {
    id: "founder",
    label: "founder",
    heroLede:
      "Solo founder in Bangalore. Flagship is Keep — charity-forfeit commitment markets where Whoop and Oura decide if you won. If you're building, what follows is the machinery: the oracle spec, the content cadence, the evals that keep models honest.",
    readFirst: [
      {
        name: "Keep",
        href: "#flagship",
        why: "The thesis. What I'm actually betting on.",
      },
      {
        name: "Life OS",
        href: "#infrastructure",
        why: "Seven scheduled agents. How solo ships at 122 commits/week.",
      },
      {
        name: "BONP",
        href: "#infrastructure",
        why: "Oracle spec. The moat under Keep.",
      },
    ],
    order: {
      products: [
        "Wired Different",
        "Board of Directors",
        "Param Hub",
        "Think Forward-Reverse",
        "Build Yourself v3",
        "arxiv-digest",
      ],
      research: [
        "biometric-json-eval",
        "MCP Tool-Selection Eval",
        "CMCHP",
        "Voice-Preservation Eval",
        "yt-tldr-eval",
        "Claude-Code Hook Eval",
      ],
      infrastructure: [
        "Life OS",
        "BONP",
        "Claude Code Playbook",
        "Inbox Triage",
        "Compaction Predictor",
        "whoop-mcp",
        "vercel-mcp",
        "spaceship-mcp",
        "claude-code-hooks-mcp",
        "mcp-red-team",
      ],
    },
  },
  {
    id: "investor",
    label: "investor",
    heroLede:
      "Pre-seed. Content-first GTM, play money live, Gibraltar real-money license in 6–18 months. Keep is the company. What you'll see below is why the oracle is the moat, what the evals prove, and why solo output looks like this.",
    readFirst: [
      {
        name: "Keep",
        href: "#flagship",
        why: "The company. Thesis, stage, license plan.",
      },
      {
        name: "biometric-json-eval",
        href: "#research",
        why: "Why the oracle works: ~0 dangerous errors at $0.05/settlement.",
      },
      {
        name: "BONP",
        href: "#infrastructure",
        why: "The protocol Keep sits on top of. Moat.",
      },
    ],
    order: {
      products: [
        "Param Hub",
        "Wired Different",
        "Think Forward-Reverse",
        "Board of Directors",
        "arxiv-digest",
        "Build Yourself v3",
      ],
      research: [
        "biometric-json-eval",
        "MCP Tool-Selection Eval",
        "Voice-Preservation Eval",
        "yt-tldr-eval",
        "CMCHP",
        "Claude-Code Hook Eval",
      ],
      infrastructure: [
        "BONP",
        "Life OS",
        "Claude Code Playbook",
        "whoop-mcp",
        "Compaction Predictor",
        "Inbox Triage",
        "vercel-mcp",
        "spaceship-mcp",
        "claude-code-hooks-mcp",
        "mcp-red-team",
      ],
    },
  },
  {
    id: "engineer",
    label: "engineer",
    heroLede:
      "Bangalore. Mostly TypeScript, Next.js, and a lot of Claude Code. Below: four MCP servers, fifteen hooks, five evals, a context-compaction predictor, and the scheduled-task army that runs my life. Everything is open if the repo is named.",
    readFirst: [
      {
        name: "Claude Code Playbook",
        href: "#infrastructure",
        why: "4 MCPs + 11 skills + 15 hooks + 5 evals. One monorepo.",
      },
      {
        name: "Compaction Predictor",
        href: "#infrastructure",
        why: "Hybrid hard-rule + LR hook. The only one I won't ship without.",
      },
      {
        name: "MCP Tool-Selection Eval",
        href: "#research",
        why: "How well frontier models pick from 78 MCP tools. Real n=665.",
      },
    ],
    order: {
      products: [
        "Think Forward-Reverse",
        "arxiv-digest",
        "Param Hub",
        "Board of Directors",
        "Wired Different",
        "Build Yourself v3",
      ],
      research: [
        "MCP Tool-Selection Eval",
        "Claude-Code Hook Eval",
        "Voice-Preservation Eval",
        "biometric-json-eval",
        "CMCHP",
        "yt-tldr-eval",
      ],
      infrastructure: [
        "Claude Code Playbook",
        "Compaction Predictor",
        "whoop-mcp",
        "vercel-mcp",
        "spaceship-mcp",
        "claude-code-hooks-mcp",
        "Life OS",
        "Inbox Triage",
        "BONP",
        "mcp-red-team",
      ],
    },
  },
  {
    id: "friend",
    label: "friend",
    heroLede:
      "It's me. Solo founder in Bangalore, building Keep, shipping a lot of smaller things on the side. Start with writing if you want the voice, Keep if you want the idea, Param Hub if you want to see how I actually run my day.",
    readFirst: [
      {
        name: "Writing",
        href: "#writing",
        why: "The voice. Substack and LinkedIn drop this week.",
      },
      {
        name: "Param Hub",
        href: "#products",
        why: "My life OS. 7 tabs, everything I track.",
      },
      {
        name: "Keep",
        href: "#flagship",
        why: "The big thing I'm building.",
      },
    ],
    order: {
      products: [
        "Param Hub",
        "Build Yourself v3",
        "Wired Different",
        "Board of Directors",
        "Think Forward-Reverse",
        "arxiv-digest",
      ],
      research: [
        "Voice-Preservation Eval",
        "yt-tldr-eval",
        "biometric-json-eval",
        "Claude-Code Hook Eval",
        "MCP Tool-Selection Eval",
        "CMCHP",
      ],
      infrastructure: [
        "Life OS",
        "Inbox Triage",
        "BONP",
        "Compaction Predictor",
        "Claude Code Playbook",
        "whoop-mcp",
        "vercel-mcp",
        "spaceship-mcp",
        "claude-code-hooks-mcp",
        "mcp-red-team",
      ],
    },
  },
  {
    id: "other",
    label: "just looking",
    heroLede:
      "Solo founder in Bangalore. Flagship is Keep — charity-forfeit commitment markets where Whoop and Oura decide whether you won. Around it: an oracle protocol, eleven side projects, four MCP servers, and a private agent army that runs my life so I can stay in the build.",
    readFirst: [
      {
        name: "Keep",
        href: "#flagship",
        why: "The thing I'm most here for.",
      },
      {
        name: "Writing",
        href: "#writing",
        why: "How I think in long form.",
      },
      {
        name: "Claude Code Playbook",
        href: "#infrastructure",
        why: "The open pieces, if you're curious.",
      },
    ],
    order: {
      products: [
        "Param Hub",
        "Wired Different",
        "Think Forward-Reverse",
        "Build Yourself v3",
        "Board of Directors",
        "arxiv-digest",
      ],
      research: [
        "biometric-json-eval",
        "MCP Tool-Selection Eval",
        "Voice-Preservation Eval",
        "yt-tldr-eval",
        "Claude-Code Hook Eval",
        "CMCHP",
      ],
      infrastructure: [
        "Life OS",
        "BONP",
        "Claude Code Playbook",
        "whoop-mcp",
        "Compaction Predictor",
        "Inbox Triage",
        "vercel-mcp",
        "spaceship-mcp",
        "claude-code-hooks-mcp",
        "mcp-red-team",
      ],
    },
  },
];

export function getLens(id: LensId | null | undefined): Lens {
  if (!id) return LENSES[4]; // default: other
  return LENSES.find((l) => l.id === id) ?? LENSES[4];
}

export function reorder<T extends { name: string }>(
  items: T[],
  orderNames: string[],
): T[] {
  const rank = new Map(orderNames.map((n, i) => [n, i]));
  return [...items].sort((a, b) => {
    const ra = rank.get(a.name) ?? 999;
    const rb = rank.get(b.name) ?? 999;
    return ra - rb;
  });
}

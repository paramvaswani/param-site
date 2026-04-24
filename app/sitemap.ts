import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://contra.ventures";
  const sections = [
    "",
    "#manifesto",
    "#origin",
    "#products",
    "#research",
    "#infrastructure",
    "#process",
    "#live",
    "#currently",
    "#log",
    "#cadence",
    "#beliefs",
    "#library",
    "#conversations",
    "#causes",
    "#skills",
    "#faq",
    "#asks",
    "#connect",
  ];
  const now = new Date().toISOString();
  return sections.map((s) => ({
    url: `${base}/${s}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: s === "" ? 1.0 : 0.7,
  }));
}

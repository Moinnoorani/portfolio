import type { MetadataRoute } from "next";
import { siteUrl, projects } from "@/lib/portfolio-data";

// Dynamic sitemap — auto-includes all views + every project case study.
// Google Search Console will pick this up at /sitemap.xml automatically.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const views = [
    { path: "/", priority: 1.0, changeFreq: "monthly" as const },
    { path: "/?view=about", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/?view=projects", priority: 0.9, changeFreq: "monthly" as const },
    { path: "/?view=writing", priority: 0.8, changeFreq: "weekly" as const },
    { path: "/?view=experience", priority: 0.7, changeFreq: "monthly" as const },
    { path: "/?view=contact", priority: 0.6, changeFreq: "monthly" as const },
  ];

  const projectEntries = projects.map((p) => ({
    url: `${siteUrl}/?view=project&id=${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...views.map((v) => ({
      url: `${siteUrl}${v.path === "/" ? "" : v.path}`,
      lastModified: now,
      changeFrequency: v.changeFreq,
      priority: v.priority,
    })),
    ...projectEntries,
  ];
}

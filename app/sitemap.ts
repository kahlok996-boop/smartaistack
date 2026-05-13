import { tools } from "@/data/tools";

export default function sitemap() {
  const baseUrl = "https://smartaistack.vercel.app";

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/${tool.slug}`,
    lastModified: new Date(),
  }));

  const seoPages = [
    "best-ai-tools",
    "compare",
    "compare/chatgpt-vs-claude",
    "alternatives",
    "alternatives/chatgpt-alternatives",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...toolPages,
    ...seoPages,
  ];
}
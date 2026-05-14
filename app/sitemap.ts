import { tools } from "@/data/tools";
import { comparisons } from "@/data/comparisons";

export default function sitemap() {
  const baseUrl = "https://smartaistack.vercel.app";

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/${tool.slug}`,
    lastModified: new Date(),
  }));

  const comparisonPages = comparisons.map((item) => ({
    url: `${baseUrl}/compare/${item.slug}`,
    lastModified: new Date(),
  }));

  const seoPages = [
    "best-ai-tools",
    "compare",
    "alternatives",
    "alternatives/chatgpt-alternatives",
    "about",
    "contact",
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
    ...comparisonPages,
    ...seoPages,
  ];
}
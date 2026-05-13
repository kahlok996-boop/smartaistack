import { tools } from "@/data/tools";

export default function sitemap() {
  const baseUrl = "https://smartaistack.vercel.app";

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/${tool.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...toolPages,
  ];
}
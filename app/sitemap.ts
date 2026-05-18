export default function sitemap() {
  const baseUrl = "https://smartaistack.vercel.app";

  const pages = ["", "generator", "upload", "before-after", "about", "contact"];

  return pages.map((slug) => ({
    url: slug ? `${baseUrl}/${slug}` : baseUrl,
    lastModified: new Date(),
  }));
}

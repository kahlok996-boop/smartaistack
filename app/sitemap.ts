export default function sitemap() {
    const baseUrl = "https://smartaistack.vercel.app";
  
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/chatgpt-review`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/claude-review`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/gemini-review`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/cursor-review`,
        lastModified: new Date(),
      },
    ];
  }
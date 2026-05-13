export default function robots() {
    return {
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: "https://smartaistack.vercel.app/sitemap.xml",
    };
  }
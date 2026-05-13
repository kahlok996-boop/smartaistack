export function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const tool = tools.find((item) => item.slug === params.slug);

  if (!tool) {
    return {
      title: "AI Tool Review | SmartAIStack",
      description:
        "Discover and compare the best AI tools on SmartAIStack.",

      openGraph: {
        title: "AI Tool Review | SmartAIStack",
        description:
          "Discover and compare the best AI tools on SmartAIStack.",
        url: "https://smartaistack.vercel.app",
        siteName: "SmartAIStack",
        images: [
          {
            url: "https://smartaistack.vercel.app/opengraph-image.png",
            width: 1200,
            height: 630,
          },
        ],
        locale: "en_US",
        type: "website",
      },

      twitter: {
        card: "summary_large_image",
        title: "AI Tool Review | SmartAIStack",
        description:
          "Discover and compare the best AI tools on SmartAIStack.",
        images: [
          "https://smartaistack.vercel.app/opengraph-image.png",
        ],
      },
    };
  }

  return {
    title: `${tool.name} Review 2026 | SmartAIStack`,
    description: `${tool.description} Compare ${tool.name} pricing, features, pros, cons, alternatives, and use cases.`,

    openGraph: {
      title: `${tool.name} Review 2026 | SmartAIStack`,
      description: tool.description,
      url: `https://smartaistack.vercel.app/${tool.slug}`,
      siteName: "SmartAIStack",
      images: [
        {
          url: "https://smartaistack.vercel.app/opengraph-image.png",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${tool.name} Review 2026`,
      description: tool.description,
      images: [
        "https://smartaistack.vercel.app/opengraph-image.png",
      ],
    },
  };
}
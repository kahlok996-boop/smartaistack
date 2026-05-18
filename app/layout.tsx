import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartAIStack - AI Website Audit and Premium Conversion Redesign SaaS",
  description:
    "Run an AI website audit, diagnose conversion problems, generate premium redesign direction, compare before and after improvements, and capture better leads.",

  verification: {
    google: "uikshEcnmLs7sBMB5bE0OwEor7tB1PGdQe_NE4zpWuA",
  },

  openGraph: {
    title: "SmartAIStack - AI Website Audit and Premium Conversion Redesign SaaS",
    description:
      "Analyze your website, uncover conversion problems, generate a premium redesign direction, preview before and after improvements, and turn more visitors into leads.",
    url: "https://smartaistack.vercel.app",
    siteName: "SmartAIStack",
    images: [
      {
        url: "https://smartaistack.vercel.app/og-image",
        width: 1200,
        height: 630,
        alt: "SmartAIStack AI Website Audit and Premium Conversion Redesign SaaS",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SmartAIStack - AI Website Audit and Premium Conversion Redesign SaaS",
    description:
      "Run an AI website audit, find conversion gaps, generate premium redesign direction, preview before and after improvements, and capture more qualified leads.",
    images: ["https://smartaistack.vercel.app/og-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

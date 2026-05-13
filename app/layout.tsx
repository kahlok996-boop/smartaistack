import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartAIStack - Best AI Tools for Coding, Business and Website Building",
  description:
    "Discover and compare the best AI tools for coding, website building, business automation, productivity, and AI-powered workflows.",

  verification: {
    google: "uikshEcnmLs7sBMB5bE0OwEor7tB1PGdQe_NE4zpWuA",
  },

  openGraph: {
    title: "SmartAIStack - Best AI Tools Reviews 2026",
    description:
      "Discover and compare the best AI tools for coding, website building, business automation, productivity, and AI-powered workflows.",
    url: "https://smartaistack.vercel.app",
    siteName: "SmartAIStack",
    images: [
      {
        url: "https://smartaistack.vercel.app/og-image",
        width: 1200,
        height: 630,
        alt: "SmartAIStack Best AI Tools Reviews 2026",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SmartAIStack - Best AI Tools Reviews 2026",
    description:
      "Discover and compare the best AI tools for coding, website building, business automation, productivity, and AI-powered workflows.",
    images: ["https://smartaistack.vercel.app/og-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
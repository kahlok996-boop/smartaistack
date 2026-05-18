import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "SmartAIStack — AI Website Audit & Premium Conversion Redesign Platform",
  description:
    "Generate premium website audit direction, conversion-focused redesign ideas, and before/after landing page concepts with SmartAIStack.",
};

export default function GeneratorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

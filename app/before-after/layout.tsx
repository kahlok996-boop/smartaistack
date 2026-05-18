import type { ReactNode } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function BeforeAfterLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative px-8 py-16">
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
}

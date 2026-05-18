import { createElement } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import AuditReport from "@/app/components/audit-pdf/AuditReport";

export type AuditPdfScore = {
  label: string;
  value: number;
  note: string;
};

export type AuditPdfPriority = {
  label: string;
  title: string;
  impact: string;
  action: string;
};

export type AuditPdfRecommendation = {
  title: string;
  detail: string;
};

export type AuditPdfResult = {
  sourceLabel: string;
  overallScore: number;
  summaryTitle: string;
  summaryBody: string;
  scores: AuditPdfScore[];
  priorities: AuditPdfPriority[];
  recommendations: AuditPdfRecommendation[];
  opportunities: AuditPdfRecommendation[];
  sections: string[];
};

const a4WidthMm = 210;
const a4HeightMm = 297;
const captureScale = 2.25;

function createReportMount() {
  const mount = document.createElement("div");

  mount.setAttribute("aria-hidden", "true");
  mount.style.position = "fixed";
  mount.style.left = "-12000px";
  mount.style.top = "0";
  mount.style.width = "794px";
  mount.style.background = "#020617";
  mount.style.pointerEvents = "none";
  mount.style.zIndex = "-1";
  document.body.appendChild(mount);

  return mount;
}

async function waitForReportPaint() {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  await new Promise<void>((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
}

export async function createAuditPdfBlob(result: AuditPdfResult, websiteUrl?: string) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    throw new Error("SmartAIStack PDF export can only run in the browser.");
  }

  const mount = createReportMount();
  const root = createRoot(mount);

  try {
    flushSync(() => {
      root.render(createElement(AuditReport, { result, websiteUrl }));
    });

    await waitForReportPaint();

    const pages = Array.from(mount.querySelectorAll<HTMLElement>("[data-audit-pdf-page='true']"));

    if (pages.length === 0) {
      throw new Error("No audit PDF pages were rendered.");
    }

    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

    for (const [index, page] of pages.entries()) {
      const canvas = await html2canvas(page, {
        backgroundColor: "#020617",
        scale: captureScale,
        useCORS: true,
        logging: false,
        width: page.offsetWidth,
        height: page.offsetHeight,
        windowWidth: page.scrollWidth,
        windowHeight: page.scrollHeight,
      });

      const imageData = canvas.toDataURL("image/jpeg", 0.95);

      if (index > 0) {
        pdf.addPage();
      }

      pdf.addImage(imageData, "JPEG", 0, 0, a4WidthMm, a4HeightMm);
    }

    return pdf.output("blob");
  } finally {
    root.unmount();
    mount.remove();
  }
}

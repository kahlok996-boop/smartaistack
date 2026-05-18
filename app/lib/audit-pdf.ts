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

type PdfColor = [number, number, number];

type PdfPage = {
  width: number;
  height: number;
  commands: string[];
};

type TextOptions = {
  size?: number;
  color?: PdfColor;
  font?: "regular" | "bold";
  lineHeight?: number;
  maxWidth?: number;
};

const pageWidth = 595.28;
const pageHeight = 841.89;
const margin = 44;
const brandCyan: PdfColor = [34, 211, 238];
const deepBlack: PdfColor = [5, 8, 14];
const panelBlack: PdfColor = [13, 18, 28];
const borderSlate: PdfColor = [40, 53, 72];
const softWhite: PdfColor = [232, 244, 248];
const mutedText: PdfColor = [145, 160, 174];
const emerald: PdfColor = [52, 211, 153];

function escapePdfText(value: string) {
  return value
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[^\x20-\x7E]/g, " ")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function colorCommand([red, green, blue]: PdfColor, mode: "fill" | "stroke") {
  const suffix = mode === "fill" ? "rg" : "RG";
  return `${(red / 255).toFixed(3)} ${(green / 255).toFixed(3)} ${(blue / 255).toFixed(3)} ${suffix}`;
}

function estimateTextWidth(text: string, fontSize: number) {
  return text.length * fontSize * 0.52;
}

function wrapText(text: string, fontSize: number, maxWidth: number) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = "";

  words.forEach((word) => {
    const testLine = current ? `${current} ${word}` : word;

    if (estimateTextWidth(testLine, fontSize) <= maxWidth) {
      current = testLine;
      return;
    }

    if (current) lines.push(current);
    current = word;
  });

  if (current) lines.push(current);

  return lines;
}

class PremiumPdfDocument {
  private pages: PdfPage[] = [];

  addPage() {
    const page: PdfPage = { width: pageWidth, height: pageHeight, commands: [] };
    this.pages.push(page);
    return page;
  }

  rect(page: PdfPage, x: number, y: number, width: number, height: number, color: PdfColor) {
    page.commands.push(`q ${colorCommand(color, "fill")} ${x} ${y} ${width} ${height} re f Q`);
  }

  strokeRect(
    page: PdfPage,
    x: number,
    y: number,
    width: number,
    height: number,
    color: PdfColor,
    lineWidth = 1,
  ) {
    page.commands.push(
      `q ${lineWidth} w ${colorCommand(color, "stroke")} ${x} ${y} ${width} ${height} re S Q`,
    );
  }

  line(page: PdfPage, x1: number, y1: number, x2: number, y2: number, color: PdfColor, lineWidth = 1) {
    page.commands.push(
      `q ${lineWidth} w ${colorCommand(color, "stroke")} ${x1} ${y1} m ${x2} ${y2} l S Q`,
    );
  }

  text(page: PdfPage, text: string, x: number, y: number, options: TextOptions = {}) {
    const size = options.size ?? 12;
    const color = options.color ?? softWhite;
    const font = options.font === "bold" ? "F2" : "F1";

    page.commands.push(
      `BT ${colorCommand(color, "fill")} /${font} ${size} Tf ${x} ${y} Td (${escapePdfText(text)}) Tj ET`,
    );
  }

  paragraph(page: PdfPage, text: string, x: number, y: number, options: TextOptions = {}) {
    const size = options.size ?? 11;
    const lineHeight = options.lineHeight ?? size * 1.45;
    const maxWidth = options.maxWidth ?? page.width - x - margin;
    const lines = wrapText(text, size, maxWidth);

    lines.forEach((line, index) => {
      this.text(page, line, x, y - index * lineHeight, options);
    });

    return y - lines.length * lineHeight;
  }

  footer(page: PdfPage, pageNumber: number) {
    this.line(page, margin, 36, page.width - margin, 36, [26, 38, 54]);
    this.text(page, "SmartAIStack - Premium AI Website Audit", margin, 20, {
      size: 8.5,
      color: mutedText,
      font: "bold",
    });
    this.text(page, `Page ${pageNumber}`, page.width - margin - 34, 20, {
      size: 8.5,
      color: mutedText,
    });
  }

  toUint8Array() {
    const objects: string[] = [];
    const addObject = (value: string) => {
      objects.push(value);
      return objects.length;
    };

    const fontRegularId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
    const fontBoldId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
    const pageObjectIds: number[] = [];

    this.pages.forEach((page) => {
      const stream = page.commands.join("\n");
      const contentId = addObject(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
      const pageId = addObject(
        `<< /Type /Page /Parent 0 0 R /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R >> >> /Contents ${contentId} 0 R >>`,
      );
      pageObjectIds.push(pageId);
    });

    const pagesId = addObject(
      `<< /Type /Pages /Kids [${pageObjectIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageObjectIds.length} >>`,
    );

    pageObjectIds.forEach((pageId) => {
      objects[pageId - 1] = objects[pageId - 1].replace("/Parent 0 0 R", `/Parent ${pagesId} 0 R`);
    });

    const catalogId = addObject(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
    let pdf = "%PDF-1.4\n%SmartAIStack\n";
    const offsets = [0];

    objects.forEach((object, index) => {
      offsets.push(pdf.length);
      pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
    });

    const xrefOffset = pdf.length;
    pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    offsets.slice(1).forEach((offset) => {
      pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
    });
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

    return new TextEncoder().encode(pdf);
  }
}

function scoreValue(result: AuditPdfResult, matcher: RegExp) {
  return result.scores.find((score) => matcher.test(score.label))?.value ?? result.overallScore;
}

function scoreNote(result: AuditPdfResult, matcher: RegExp) {
  return result.scores.find((score) => matcher.test(score.label))?.note ?? "Generated from the SmartAIStack audit signal model.";
}

function sectionHeader(doc: PremiumPdfDocument, page: PdfPage, eyebrow: string, title: string, y: number) {
  doc.text(page, eyebrow.toUpperCase(), margin, y, {
    size: 8.5,
    color: brandCyan,
    font: "bold",
  });
  doc.text(page, title, margin, y - 26, {
    size: 24,
    color: softWhite,
    font: "bold",
  });
  doc.line(page, margin, y - 42, page.width - margin, y - 42, [26, 43, 62]);
}

function scoreCard(
  doc: PremiumPdfDocument,
  page: PdfPage,
  label: string,
  value: number,
  note: string,
  x: number,
  y: number,
  width: number,
) {
  doc.rect(page, x, y, width, 92, panelBlack);
  doc.strokeRect(page, x, y, width, 92, borderSlate);
  doc.text(page, label, x + 16, y + 64, { size: 9, color: mutedText, font: "bold" });
  doc.text(page, `${value}%`, x + 16, y + 32, { size: 28, color: brandCyan, font: "bold" });
  doc.paragraph(page, note, x + 86, y + 49, {
    size: 8.5,
    color: mutedText,
    maxWidth: width - 102,
    lineHeight: 11,
  });
}

function drawBackground(doc: PremiumPdfDocument, page: PdfPage) {
  doc.rect(page, 0, 0, page.width, page.height, deepBlack);
  doc.rect(page, 0, page.height - 160, page.width, 160, [7, 22, 34]);
  doc.rect(page, 0, page.height - 92, page.width, 92, [6, 32, 48]);
  doc.rect(page, page.width - 185, page.height - 118, 140, 28, [18, 92, 112]);
  doc.rect(page, page.width - 160, page.height - 78, 95, 16, [16, 60, 86]);
}

function drawCover(doc: PremiumPdfDocument, result: AuditPdfResult, websiteUrl: string) {
  const page = doc.addPage();
  drawBackground(doc, page);

  doc.text(page, "SMARTAISTACK", margin, 760, {
    size: 15,
    color: brandCyan,
    font: "bold",
  });
  doc.text(page, "Premium AI Website Audit", margin, 703, {
    size: 40,
    color: softWhite,
    font: "bold",
  });
  doc.paragraph(
    page,
    "A conversion-focused agency report generated from the submitted website audit data, designed to identify the highest-leverage premium redesign moves before implementation.",
    margin,
    646,
    { size: 13, color: [196, 210, 222], maxWidth: 430, lineHeight: 20 },
  );

  doc.rect(page, margin, 485, 260, 104, [11, 28, 42]);
  doc.strokeRect(page, margin, 485, 260, 104, [28, 89, 112]);
  doc.text(page, "AUDIT SCORE", margin + 20, 556, { size: 9, color: brandCyan, font: "bold" });
  doc.text(page, `${result.overallScore}/100`, margin + 20, 510, {
    size: 42,
    color: softWhite,
    font: "bold",
  });

  doc.rect(page, margin + 282, 485, 225, 104, panelBlack);
  doc.strokeRect(page, margin + 282, 485, 225, 104, borderSlate);
  doc.text(page, "WEBSITE URL", margin + 302, 556, { size: 9, color: brandCyan, font: "bold" });
  doc.paragraph(page, websiteUrl || result.sourceLabel, margin + 302, 526, {
    size: 13,
    color: softWhite,
    font: "bold",
    maxWidth: 178,
    lineHeight: 16,
  });

  doc.text(page, "Executive readout", margin, 408, { size: 18, color: softWhite, font: "bold" });
  doc.paragraph(page, `${result.summaryTitle} ${result.summaryBody}`, margin, 377, {
    size: 11.5,
    color: [188, 201, 214],
    maxWidth: 490,
    lineHeight: 17,
  });

  doc.rect(page, margin, 124, 507, 92, [7, 18, 28]);
  doc.strokeRect(page, margin, 124, 507, 92, [21, 76, 98]);
  doc.text(page, "REPORT CONTENTS", margin + 18, 185, { size: 8.5, color: brandCyan, font: "bold" });
  doc.text(page, "Scorecards · Top Problems · Redesign Direction · CTA Plan · Premium Positioning · Before/After Notes", margin + 18, 156, {
    size: 10.5,
    color: [202, 213, 224],
  });

  doc.footer(page, 1);
}

function drawScoresPage(doc: PremiumPdfDocument, result: AuditPdfResult, websiteUrl: string) {
  const page = doc.addPage();
  drawBackground(doc, page);
  sectionHeader(doc, page, "Scorecard", "Executive scoring snapshot", 748);

  doc.text(page, `Website URL: ${websiteUrl || result.sourceLabel}`, margin, 677, {
    size: 10.5,
    color: [190, 205, 218],
    font: "bold",
  });

  const cards = [
    ["Audit score", result.overallScore, "Composite view of positioning, conversion, trust, mobile hierarchy, and authority."],
    ["Conversion score", scoreValue(result, /conversion/i), scoreNote(result, /conversion/i)],
    ["Mobile UX score", scoreValue(result, /mobile/i), scoreNote(result, /mobile/i)],
    ["Trust score", scoreValue(result, /trust/i), scoreNote(result, /trust/i)],
    ["Brand positioning score", scoreValue(result, /premium|brand/i), scoreNote(result, /premium|brand/i)],
  ] as const;

  cards.forEach(([label, value, note], index) => {
    const x = index % 2 === 0 ? margin : margin + 258;
    const y = 546 - Math.floor(index / 2) * 122;
    scoreCard(doc, page, label, value, note, x, y, index === 4 ? 507 : 234);
  });

  doc.rect(page, margin, 128, 507, 126, [8, 21, 32]);
  doc.strokeRect(page, margin, 128, 507, 126, [26, 79, 101]);
  doc.text(page, "EXECUTIVE SUMMARY", margin + 18, 220, {
    size: 8.5,
    color: brandCyan,
    font: "bold",
  });
  doc.text(page, result.summaryTitle, margin + 18, 191, {
    size: 15,
    color: softWhite,
    font: "bold",
  });
  doc.paragraph(page, result.summaryBody, margin + 18, 164, {
    size: 10,
    color: [188, 201, 214],
    maxWidth: 470,
    lineHeight: 14,
  });

  doc.footer(page, 2);
}

function drawProblemsPage(doc: PremiumPdfDocument, result: AuditPdfResult) {
  const page = doc.addPage();
  drawBackground(doc, page);
  sectionHeader(doc, page, "Detected problems", "Top 3 conversion blockers", 748);

  result.priorities.slice(0, 3).forEach((priority, index) => {
    const y = 604 - index * 145;
    doc.rect(page, margin, y, 507, 110, index === 0 ? [12, 31, 45] : panelBlack);
    doc.strokeRect(page, margin, y, 507, 110, index === 0 ? [30, 108, 132] : borderSlate);
    doc.text(page, `0${index + 1}`, margin + 18, y + 74, { size: 24, color: brandCyan, font: "bold" });
    doc.text(page, priority.impact, margin + 70, y + 78, { size: 8.5, color: emerald, font: "bold" });
    doc.text(page, priority.title, margin + 70, y + 55, { size: 15, color: softWhite, font: "bold" });
    doc.paragraph(page, priority.action, margin + 70, y + 31, {
      size: 9.5,
      color: [188, 201, 214],
      maxWidth: 405,
      lineHeight: 13,
    });
  });

  doc.footer(page, 3);
}

function drawRecommendationPage(doc: PremiumPdfDocument, result: AuditPdfResult) {
  const page = doc.addPage();
  drawBackground(doc, page);
  sectionHeader(doc, page, "Redesign direction", "Premium redesign recommendations", 748);

  const direction = result.opportunities[0]?.detail ?? "Create a clearer first screen with outcome, proof, and one next step.";
  doc.rect(page, margin, 574, 507, 106, [10, 29, 43]);
  doc.strokeRect(page, margin, 574, 507, 106, [29, 96, 120]);
  doc.text(page, "RECOMMENDED REDESIGN DIRECTION", margin + 18, 645, {
    size: 8.5,
    color: brandCyan,
    font: "bold",
  });
  doc.paragraph(page, direction, margin + 18, 615, {
    size: 12,
    color: softWhite,
    maxWidth: 462,
    lineHeight: 17,
  });

  doc.text(page, "CTA improvement suggestions", margin, 520, { size: 17, color: softWhite, font: "bold" });
  result.recommendations.slice(0, 3).forEach((recommendation, index) => {
    const y = 468 - index * 82;
    doc.text(page, `0${index + 1}`, margin, y + 14, { size: 13, color: brandCyan, font: "bold" });
    doc.text(page, recommendation.title, margin + 42, y + 18, { size: 12.5, color: softWhite, font: "bold" });
    doc.paragraph(page, recommendation.detail, margin + 42, y - 3, {
      size: 9.5,
      color: mutedText,
      maxWidth: 442,
      lineHeight: 13,
    });
    doc.line(page, margin + 42, y - 40, page.width - margin, y - 40, [24, 36, 50]);
  });

  doc.rect(page, margin, 96, 507, 92, [7, 18, 28]);
  doc.strokeRect(page, margin, 96, 507, 92, borderSlate);
  doc.text(page, "PREMIUM POSITIONING RECOMMENDATIONS", margin + 18, 158, {
    size: 8.5,
    color: brandCyan,
    font: "bold",
  });
  doc.paragraph(
    page,
    "Elevate the first-screen promise, make proof visible before risk-heavy decisions, and use controlled cinematic contrast so the offer feels more expensive before the visitor reaches pricing.",
    margin + 18,
    130,
    { size: 10, color: [190, 205, 218], maxWidth: 460, lineHeight: 14 },
  );

  doc.footer(page, 4);
}

function drawBeforeAfterPage(doc: PremiumPdfDocument, result: AuditPdfResult) {
  const page = doc.addPage();
  drawBackground(doc, page);
  sectionHeader(doc, page, "Before / After", "Redesign notes for implementation", 748);

  const notes = [
    {
      label: "Before",
      title: "Current visitor experience",
      body:
        "The current page likely asks visitors to infer the offer value from scattered hierarchy, delayed proof, or competing actions. This creates avoidable hesitation during high-intent moments.",
    },
    {
      label: "After",
      title: "Recommended premium experience",
      body:
        "The redesigned page should open with a precise outcome, visible credibility, a single dominant CTA, and a scroll path that answers objections in the order a buyer evaluates risk.",
    },
  ];

  notes.forEach((note, index) => {
    const x = index === 0 ? margin : margin + 258;
    doc.rect(page, x, 488, 234, 180, index === 0 ? [22, 21, 28] : [7, 33, 45]);
    doc.strokeRect(page, x, 488, 234, 180, index === 0 ? [70, 58, 67] : [29, 108, 132]);
    doc.text(page, note.label.toUpperCase(), x + 18, 630, {
      size: 8.5,
      color: index === 0 ? [248, 170, 170] : brandCyan,
      font: "bold",
    });
    doc.text(page, note.title, x + 18, 600, { size: 15, color: softWhite, font: "bold" });
    doc.paragraph(page, note.body, x + 18, 560, {
      size: 10,
      color: [190, 205, 218],
      maxWidth: 196,
      lineHeight: 15,
    });
  });

  doc.text(page, "Suggested premium page sequence", margin, 410, {
    size: 17,
    color: softWhite,
    font: "bold",
  });

  result.sections.slice(0, 8).forEach((section, index) => {
    const y = 356 - index * 31;
    doc.rect(page, margin, y, 507, 22, index % 2 === 0 ? [10, 23, 34] : [8, 19, 29]);
    doc.text(page, `${index + 1}. ${section}`, margin + 14, y + 7, {
      size: 10.5,
      color: [207, 220, 231],
      font: "bold",
    });
  });

  doc.footer(page, 5);
}

export function createAuditPdfBlob(result: AuditPdfResult, websiteUrl?: string) {
  const doc = new PremiumPdfDocument();
  const urlLabel = websiteUrl?.trim() || result.sourceLabel;

  drawCover(doc, result, urlLabel);
  drawScoresPage(doc, result, urlLabel);
  drawProblemsPage(doc, result);
  drawRecommendationPage(doc, result);
  drawBeforeAfterPage(doc, result);

  return new Blob([doc.toUint8Array()], { type: "application/pdf" });
}

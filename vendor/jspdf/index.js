function atobToBinary(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
  return bytes;
}

function jpegSize(bytes) {
  for (let index = 0; index < bytes.length - 9; index += 1) {
    if (bytes[index] === 0xff && bytes[index + 1] >= 0xc0 && bytes[index + 1] <= 0xc3) {
      return { height: bytes[index + 5] * 256 + bytes[index + 6], width: bytes[index + 7] * 256 + bytes[index + 8] };
    }
  }
  return { width: 1, height: 1 };
}

function bytesToBinary(bytes) {
  let output = '';
  const chunk = 0x8000;
  for (let index = 0; index < bytes.length; index += chunk) {
    output += String.fromCharCode.apply(null, bytes.subarray(index, index + chunk));
  }
  return output;
}

function escapePdfText(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

class jsPDF {
  constructor(options = {}) {
    this.unit = options.unit || 'mm';
    const format = options.format || 'a4';
    const isLandscape = options.orientation === 'l' || options.orientation === 'landscape';
    let width = 210;
    let height = 297;
    if (Array.isArray(format)) [width, height] = format;
    if (isLandscape) [width, height] = [height, width];
    this.pageWidth = width;
    this.pageHeight = height;
    this.pages = [[]];
    this.images = [];
  }

  toPt(value) {
    return this.unit === 'pt' ? value : value * 72 / 25.4;
  }

  addImage(imageData, format, x, y, width, height) {
    const match = /^data:image\/(jpeg|jpg|png);base64,(.+)$/i.exec(imageData);
    if (!match) throw new Error('Only base64 canvas image data is supported by this jsPDF shim.');
    const bytes = atobToBinary(match[2]);
    const size = jpegSize(bytes);
    const imageId = this.images.push({ bytes, format: match[1].toLowerCase() === 'png' ? 'png' : 'jpeg', width: size.width, height: size.height });
    const xPt = this.toPt(x);
    const wPt = this.toPt(width);
    const hPt = this.toPt(height);
    const yPt = this.toPt(this.pageHeight - y - height);
    this.pages[this.pages.length - 1].push({ imageId, xPt, yPt, wPt, hPt });
  }

  addPage() {
    this.pages.push([]);
  }

  output(type) {
    if (type !== 'blob') throw new Error('This jsPDF shim only supports output("blob").');
    const objects = [];
    const add = (body) => { objects.push(body); return objects.length; };
    const imageObjectIds = this.images.map((image) => {
      const stream = bytesToBinary(image.bytes);
      return add(`<< /Type /XObject /Subtype /Image /Width ${image.width} /Height ${image.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
    });
    const pageIds = [];
    const contentIds = [];
    const pageW = this.toPt(this.pageWidth);
    const pageH = this.toPt(this.pageHeight);
    this.pages.forEach((draws) => {
      const commands = draws.map((draw) => `q ${draw.wPt.toFixed(3)} 0 0 ${draw.hPt.toFixed(3)} ${draw.xPt.toFixed(3)} ${draw.yPt.toFixed(3)} cm /Im${draw.imageId} Do Q`).join('\n');
      const contentId = add(`<< /Length ${commands.length} >>\nstream\n${commands}\nendstream`);
      contentIds.push(contentId);
      pageIds.push(add(''));
    });
    const pagesId = add('');
    pageIds.forEach((pageId, index) => {
      const xObjects = imageObjectIds.map((id, imageIndex) => `/Im${imageIndex + 1} ${id} 0 R`).join(' ');
      objects[pageId - 1] = `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageW.toFixed(3)} ${pageH.toFixed(3)}] /Resources << /XObject << ${xObjects} >> /ProcSet [/PDF /ImageC] >> /Contents ${contentIds[index]} 0 R >>`;
    });
    objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`;
    const catalogId = add(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
    const infoId = add(`<< /Title (${escapePdfText('SmartAIStack Audit Report')}) /Creator (${escapePdfText('SmartAIStack')}) >>`);
    let pdf = '%PDF-1.4\n%SmartAIStack\n';
    const offsets = [0];
    objects.forEach((object, index) => {
      offsets.push(pdf.length);
      pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
    });
    const xrefOffset = pdf.length;
    pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
    offsets.slice(1).forEach((offset) => { pdf += `${String(offset).padStart(10, '0')} 00000 n \n`; });
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R /Info ${infoId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;
    return new Blob([pdf], { type: 'application/pdf' });
  }
}

module.exports = { jsPDF };

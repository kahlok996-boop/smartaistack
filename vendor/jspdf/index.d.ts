export type jsPDFOptions = { orientation?: 'p' | 'portrait' | 'l' | 'landscape'; unit?: 'mm' | 'pt'; format?: 'a4' | [number, number] };
export class jsPDF {
  constructor(options?: jsPDFOptions);
  addImage(imageData: string, format: string, x: number, y: number, width: number, height: number): void;
  addPage(): void;
  output(type: 'blob'): Blob;
}

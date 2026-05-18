declare namespace html2canvas {
  interface Options {
    scale?: number;
    backgroundColor?: string | null;
    width?: number;
    height?: number;
    windowWidth?: number;
    windowHeight?: number;
    useCORS?: boolean;
    logging?: boolean;
  }
}
declare function html2canvas(element: HTMLElement, options?: html2canvas.Options): Promise<HTMLCanvasElement>;
export = html2canvas;
export default html2canvas;

function inlineComputedStyles(source, target) {
  if (!(source instanceof Element) || !(target instanceof Element)) return;
  const computed = window.getComputedStyle(source);
  const important = [
    'align-items','background','background-color','background-image','background-position','background-size','border','border-bottom','border-color','border-left','border-radius','border-right','border-top','box-shadow','box-sizing','color','display','flex','flex-direction','flex-wrap','font-family','font-size','font-weight','gap','height','justify-content','letter-spacing','line-height','margin','min-height','opacity','overflow','padding','position','text-align','text-transform','width','z-index'
  ];
  const styles = important.map((name) => `${name}:${computed.getPropertyValue(name)}`).join(';');
  target.setAttribute('style', `${target.getAttribute('style') || ''};${styles}`);
  Array.from(source.children).forEach((child, index) => inlineComputedStyles(child, target.children[index]));
}

function waitForImage(image) {
  return new Promise((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = reject;
  });
}

async function html2canvas(element, options = {}) {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    throw new Error('html2canvas can only run in a browser environment.');
  }

  const rect = element.getBoundingClientRect();
  const width = Math.ceil(options.width || rect.width || element.scrollWidth);
  const height = Math.ceil(options.height || rect.height || element.scrollHeight);
  const scale = options.scale || Math.min(2.5, window.devicePixelRatio || 2);
  const clone = element.cloneNode(true);
  inlineComputedStyles(element, clone);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');

  const serialized = new XMLSerializer().serializeToString(clone);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width * scale}" height="${height * scale}" viewBox="0 0 ${width} ${height}"><foreignObject width="100%" height="100%">${serialized}</foreignObject></svg>`;
  const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(width * scale);
  canvas.height = Math.ceil(height * scale);
  const context = canvas.getContext('2d');
  if (!context) throw new Error('Could not create canvas context.');

  if (options.backgroundColor !== null) {
    context.fillStyle = options.backgroundColor || '#05080e';
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  const image = new Image();
  image.crossOrigin = 'anonymous';
  const loaded = waitForImage(image);
  image.src = url;
  await loaded;
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  return canvas;
}

module.exports = html2canvas;
module.exports.default = html2canvas;

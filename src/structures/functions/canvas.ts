import { registerFont, NodeCanvasRenderingContext2D } from 'canvas';

/** Fonts */
registerFont('./ressources/fonts/GemunuLibre-Regular.ttf', { family: 'Gemunu Libre' }); // Content
registerFont('./ressources/fonts/GemunuLibre-Bold.ttf', { family: 'Gemunu Libre bold' }); // Content

registerFont('./ressources/fonts/NotoSans-Regular.ttf', { family: 'Noto Sans' });
registerFont('./ressources/fonts/NotoSansArabic-Regular.ttf', { family: 'Noto Sans Arabic' });
registerFont('./ressources/fonts/NotoSansJP-Regular.otf', { family: 'Noto Sans JP' });
registerFont('./ressources/fonts/NotoSansKR-Regular.otf', { family: 'Noto Sans KR' });
registerFont('./ressources/fonts/NotoSansMayanNumerals-Regular.ttf', { family: 'Noto Sans Mayan' });
registerFont('./ressources/fonts/NotoSansSC-Regular.otf', { family: 'Noto Sans SC' });
registerFont('./ressources/fonts/NotoSansSymbols-Regular.ttf', { family: 'Noto Sans Symbols' });
export const font = 'Noto Sans, Noto Sans Arabic, Noto Sans JP, Noto Sans KR, Noto Sans Mayan, Noto Sans SC, Noto Sans Symbols';

/** Functions */
export const roundRect = (ctx: NodeCanvasRenderingContext2D, x: number, y: number, width: number, heigth: number, rayon?: number) => {
  const r = rayon || 0;

  ctx.beginPath();
  ctx.moveTo(x, y + r);
  ctx.lineTo(x, y + heigth - r);
  ctx.quadraticCurveTo(x, y + heigth, x + r, y + heigth);
  ctx.lineTo(x + width - r, y + heigth);
  ctx.quadraticCurveTo(x + width, y + heigth, x + width, y + heigth - r);
  ctx.lineTo(x + width, y + r);
  ctx.quadraticCurveTo(x + width, y, x + width - r, y);
  ctx.lineTo(x + r, y);
  ctx.quadraticCurveTo(x, y, x, y + r);
  ctx.closePath();
};

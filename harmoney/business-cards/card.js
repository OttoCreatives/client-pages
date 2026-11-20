// Harmoney business card: one layout, used by the live preview (SVG) and the print PDF (PDF/X-1a:2001).
// All sizes in mm, measured from Figma "Harmoney - Brand Guidelines + Assets", page "-> Business Cards",
// section "PRINT" (frames at 4 px per mm). Front comes in 3 colours, the back is always the same (white, soft blue ring). Change the design in Figma first, then here.

export const CARD = {
  trim: { w: 85, h: 55 },
  bleed: 3,
  margin: 5.5,            // content side: left, top and bottom margin (22 px in Figma)
  maxText: 62,            // widest a line may run before it wraps (keeps text off the ring)
  slug: 10,               // space outside the trim for crop marks
  mark: { len: 5, offset: 3, weight: 0.25 }, // crop marks: start at the bleed edge, 5 mm long, 0.25 pt
  name:    { font: "headline", size: 4.378, lh: 1.2, track: -0.01 },
  title:   { font: "light",    size: 2.658, lh: 1.4 },
  contact: { font: "regular",  size: 2.658, lh: 1.5 },
  gapNameTitle: 0.625,
  gapTitleContact: 4.378,
  website: "myharmoney.eu",
  // Font metrics (hhea, units per em 1000): Figma centres the glyph box (ascent 1000 + descent 300) in the line box.
  asc: 1.0, desc: 0.3,
  // CMYK, FOGRA39 coated. Text and brandmark in pure black ink so small type stays sharp (no registration blur).
  ink:   [0, 0, 0, 0.87],  // #222326
  grey:  [0, 0, 0, 0.68],  // #5C5F68
  white: [0, 0, 0, 0],
  reg:   [1, 1, 1, 1],     // registration, crop marks only
};

export const COLOURS = [
  { key: "navy",   label: "Navy",   hex: "#02035D" },
  { key: "purple", label: "Purple", hex: "#46085F" },
  { key: "salmon", label: "Salmon", hex: "#632040" },
];

// Real vectors exported from Figma (1 unit = 0.25 mm). Front logo origin: x 7, y 24.81 mm. Brandmark origin: x 5.5, y 5.5 mm.
export const LOGO = {
  x: 7, y: 24.8125, unit: 0.25,
  paths: [
    "M86.6283 6.20508C83.0153 6.20508 80.0847 9.13574 80.0847 12.7487C80.0847 16.3617 83.0153 19.2924 86.6283 19.2924C90.2413 19.2924 93.172 16.3617 93.172 12.7487C93.172 9.13574 90.2413 6.20508 86.6283 6.20508ZM86.6283 16.6805C84.4695 16.6805 82.6965 14.9299 82.6965 12.7487C82.6965 10.5675 84.4471 8.81695 86.6283 8.81695C88.8095 8.81695 90.5601 10.5675 90.5601 12.7487C90.5601 14.9299 88.7872 16.6805 86.6283 16.6805Z",
    "M99.5892 6.20508C96.6809 6.20508 94.3431 8.5429 94.3431 11.4512V19.3148H96.955V11.4288C96.955 9.97467 98.1351 8.81695 99.5669 8.81695C100.999 8.81695 102.179 9.99704 102.179 11.4288V19.2924H104.791V11.4288C104.835 8.5429 102.475 6.20508 99.5892 6.20508Z",
    "M128.422 6.20508V14.0686C128.422 15.5228 127.242 16.6805 125.81 16.6805C124.378 16.6805 123.198 15.5004 123.198 14.0686V6.20508H120.586V14.0686C120.586 16.9769 122.924 19.3148 125.832 19.3148C126.766 19.3148 127.627 19.0631 128.399 18.6548C128.081 20.5172 126.47 21.9266 124.535 21.9266V24.5385C128.148 24.5385 131.078 21.6078 131.078 17.9948V6.20508H128.422Z",
    "M73.6397 6.20508C72.0737 6.20508 70.6643 6.88741 69.7079 7.97802C68.7515 6.88741 67.3421 6.20508 65.7761 6.20508C62.8678 6.20508 60.53 8.5429 60.53 11.4512V19.3148H63.1419V11.4288C63.1419 9.97467 64.322 8.81695 65.7538 8.81695C67.1855 8.81695 68.3656 9.99704 68.3656 11.4288V19.2924H70.9775V11.4288C70.9775 9.97467 72.1576 8.81695 73.5894 8.81695C75.0211 8.81695 76.2012 9.99704 76.2012 11.4288V19.2924H78.8131V11.4288C78.8802 8.5429 76.52 6.20508 73.6341 6.20508H73.6397Z",
    "M119.15 12.7711C119.128 9.13574 116.197 6.20508 112.584 6.20508C108.971 6.20508 106.041 9.13574 106.041 12.7487C106.041 16.3617 108.971 19.2924 112.584 19.2924C114.469 19.2924 116.175 18.4982 117.378 17.2007L115.537 15.3606H115.515C114.788 16.1548 113.765 16.6805 112.584 16.6805C110.879 16.6805 109.424 15.5899 108.882 14.0686H119.016C119.106 13.638 119.15 13.2073 119.15 12.7711ZM108.882 11.4512C109.43 9.92993 110.884 8.83932 112.584 8.83932C114.285 8.83932 115.744 9.92993 116.265 11.4512H108.882Z",
    "M58.8951 6.20508C57.4186 6.20508 56.0539 6.68047 54.9633 7.52499C53.498 8.6156 52.508 10.2991 52.3514 12.223V19.3148H54.9633V12.7711C54.9633 10.6123 56.7139 8.83932 58.8951 8.83932H59.281V6.20508H58.8951Z",
    "M47.5889 7.51949C46.4983 6.70853 45.1336 6.22754 43.6571 6.22754C40.0441 6.22754 37.1134 9.1582 37.1134 12.7712C37.1134 16.3842 40.0441 19.3148 43.6571 19.3148C45.1336 19.3148 46.4983 18.8395 47.5889 18.0173V19.3148H50.2007V12.7488C50.2007 10.6123 49.1717 8.71077 47.5889 7.51949ZM43.6571 16.6806C41.4982 16.6806 39.7253 14.93 39.7253 12.7488C39.7253 10.5676 41.4759 8.81704 43.6571 8.81704C45.8383 8.81704 47.5889 10.5676 47.5889 12.7488C47.5889 14.93 45.8383 16.6806 43.6571 16.6806Z",
    "M28.7271 6.18839C27.2618 6.18839 25.9027 6.66378 24.8177 7.46915V2.22864H22.1835V19.2925H24.8177V12.2902C25.0246 10.3103 26.7081 8.77788 28.7271 8.77788C30.9083 8.77788 32.6589 10.5508 32.6589 12.7097V19.2925H35.2708V12.732C35.2708 9.11905 32.3401 6.18839 28.7271 6.18839Z",
    "M7.10993 9.89209C11.0351 9.89209 14.2199 13.0763 14.2199 17.002V17.8226C14.2199 18.8437 13.7026 19.8142 12.7766 20.2446C11.0537 21.0445 9.1361 21.4926 7.10993 21.4926C5.08376 21.4926 3.16611 21.0445 1.44328 20.2446C0.517264 19.8147 0 18.8437 0 17.8226L0 17.002C0 13.0768 3.18472 9.89209 7.10993 9.89209Z",
    "M7.10993 6.79575C9.41928 6.79575 11.5555 7.55175 13.2845 8.82863C13.6721 9.11491 14.2199 8.8369 14.2199 8.35529L14.2199 3.07982C14.2199 2.39512 13.8308 1.77038 13.2169 1.4593C11.3834 0.527599 9.30662 0 7.10993 0C4.91324 0 2.83643 0.527599 1.00301 1.4593C0.392728 1.76986 0 2.39099 0 3.07982L0 8.35581C0 8.83742 0.547752 9.11491 0.935313 8.82915C2.66435 7.55227 4.80059 6.79626 7.10993 6.79626V6.79575Z",
  ],
};
export const BRANDMARK = {
  x: 5.5, y: 5.5, unit: 0.25,
  paths: [
    "M9.9539 13.8489C15.4492 13.8489 19.9078 18.3068 19.9078 23.8028L19.9078 24.9516C19.9078 26.3811 19.1836 27.7398 17.8872 28.3424C15.4752 29.4623 12.7905 30.0895 9.9539 30.0895C7.11727 30.0895 4.43256 29.4623 2.02059 28.3424C0.72417 27.7405 0 26.3811 0 24.9516L0 23.8028C0 18.3075 4.4586 13.8489 9.9539 13.8489Z",
    "M9.9539 9.51404C13.187 9.51404 16.1777 10.5724 18.5984 12.3601C19.141 12.7609 19.9078 12.3717 19.9078 11.6974L19.9078 4.31174C19.9078 3.35317 19.3631 2.47853 18.5036 2.04301C15.9368 0.738639 13.0293 0 9.9539 0C6.87853 0 3.971 0.738639 1.40421 2.04301C0.549819 2.4778 0 3.34739 0 4.31174L0 11.6981C0 12.3724 0.766854 12.7609 1.30944 12.3608C3.73009 10.5732 6.72082 9.51477 9.9539 9.51477V9.51404Z",
  ],
};

// Break a line in two balanced halves when it runs wider than maxText. measure(text) returns mm.
function wrap(text, measure) {
  if (!text || measure(text) <= CARD.maxText) return [text];
  const words = text.split(/\s+/);
  let best = null;
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(" "), b = words.slice(i).join(" ");
    const w = Math.max(measure(a), measure(b));
    if (!best || w < best.w) best = { w, lines: [a, b] };
  }
  return best ? best.lines : [text];
}

// Content side layout, anchored to the bottom margin like the Figma auto layout.
// measure(styleKey, text) returns the width in mm. Returns lines with baseline y (mm from the top) and warnings.
export function layout(data, measure) {
  const C = CARD, warn = [];
  const base = (top, st) => top + (st.size * st.lh - (C.asc + C.desc) * st.size) / 2 + C.asc * st.size;
  const contact = [data.email, data.phone, C.website].map(s => (s || "").trim()).filter(Boolean);
  const name = wrap((data.name || "").trim(), t => measure("name", t));
  const title = wrap((data.title || "").trim(), t => measure("title", t));
  const out = [];
  let y = C.trim.h - C.margin;
  for (let i = contact.length - 1; i >= 0; i--) {
    y -= C.contact.size * C.contact.lh;
    out.unshift({ style: "contact", text: contact[i], y: base(y, C.contact) });
  }
  y -= C.gapTitleContact;
  for (let i = title.length - 1; i >= 0; i--) {
    if (!title[i]) continue;
    y -= C.title.size * C.title.lh;
    out.unshift({ style: "title", text: title[i], y: base(y, C.title) });
  }
  y -= C.gapNameTitle;
  for (let i = name.length - 1; i >= 0; i--) {
    if (!name[i]) continue;
    y -= C.name.size * C.name.lh;
    out.unshift({ style: "name", text: name[i], y: base(y, C.name) });
  }
  for (const l of out) if (measure(l.style, l.text) > C.maxText + 0.01) warn.push(`"${l.text}" is too long for the card. Use a shorter version.`);
  const markBottom = BRANDMARK.y + 30.09 * BRANDMARK.unit;
  if (y < markBottom + 4) warn.push("Too much text: it runs into the logo. Shorten the name or job title.");
  return { lines: out, warn };
}

// ---------- Print PDF (PDF/X-1a:2001) ----------
// PDF/X-1a:2001 asks for: PDF 1.3, CMYK only (no RGB, no spot), no transparency, all fonts embedded,
// an output intent (FOGRA39), TrimBox and BleedBox on every page, Trapped key and a document ID.
// Backgrounds are CMYK JPEGs (FOGRA39, 400 ppi) with the ring fade already flattened in; text and logos are CMYK vectors.
const PT = 72 / 25.4;

export async function buildPdf(PDFLib, fontkit, data, colourKey, files) {
  const { PDFDocument, PDFName, PDFString, PDFHexString, cmyk, setCharacterSpacing } = PDFLib;
  const C = CARD;
  const doc = await PDFDocument.create({ updateMetadata: false });
  doc.registerFontkit(fontkit);
  const fonts = {
    name: await doc.embedFont(files.fonts.headline, { subset: false }),
    title: await doc.embedFont(files.fonts.light, { subset: false }),
    contact: await doc.embedFont(files.fonts.regular, { subset: false }),
  };
  const measure = (style, t) => fonts[style].widthOfTextAtSize(t, C[style].size * PT) / PT * (1 + (C[style].track || 0));
  const L = layout(data, measure);

  const off = C.slug, mw = (C.trim.w + 2 * off) * PT, mh = (C.trim.h + 2 * off) * PT;
  const X = mm => (off + mm) * PT;              // card x (mm) to page pt
  const Y = mm => mh - (off + mm) * PT;          // card y from top (mm) to page pt from bottom
  const col = a => cmyk(...a);

  const page = (bgBytes) => {
    const p = doc.addPage([mw, mh]);
    p.setTrimBox(off * PT, off * PT, C.trim.w * PT, C.trim.h * PT);
    p.setBleedBox((off - C.bleed) * PT, (off - C.bleed) * PT, (C.trim.w + 2 * C.bleed) * PT, (C.trim.h + 2 * C.bleed) * PT);
    p.setArtBox(off * PT, off * PT, C.trim.w * PT, C.trim.h * PT);
    return p;
  };
  const drawBg = async (p, bytes) => {
    const img = await doc.embedJpg(bytes);
    p.drawImage(img, { x: X(-C.bleed), y: Y(C.trim.h + C.bleed), width: (C.trim.w + 2 * C.bleed) * PT, height: (C.trim.h + 2 * C.bleed) * PT });
  };
  const drawVec = (p, v, colour) => v.paths.forEach(d => p.drawSvgPath(d, { x: X(v.x), y: Y(v.y), scale: v.unit * PT, color: col(colour), borderWidth: 0 }));
  const marks = p => {
    const t = C.trim, m = C.mark, o = { thickness: m.weight, color: col(C.reg) };
    for (const [cx, sx] of [[0, -1], [t.w, 1]]) for (const [cy, sy] of [[0, -1], [t.h, 1]]) {
      p.drawLine({ start: { x: X(cx + sx * m.offset), y: Y(cy) }, end: { x: X(cx + sx * (m.offset + m.len)), y: Y(cy) }, ...o });
      p.drawLine({ start: { x: X(cx), y: Y(cy + sy * m.offset) }, end: { x: X(cx), y: Y(cy + sy * (m.offset + m.len)) }, ...o });
    }
  };

  // Page 1: front (colour field, ring, white logo).
  const front = page(); await drawBg(front, files.bg[`front-${colourKey}`]); drawVec(front, LOGO, C.white); marks(front);
  // Page 2: content side.
  const back = page(); await drawBg(back, files.bg.back); drawVec(back, BRANDMARK, C.ink);
  for (const l of L.lines) {
    const st = C[l.style], size = st.size * PT;
    if (st.track) back.pushOperators(setCharacterSpacing(st.track * size));
    back.drawText(l.text, { x: X(C.margin), y: Y(l.y), size, font: fonts[l.style], color: col(l.style === "title" ? C.grey : C.ink) });
    if (st.track) back.pushOperators(setCharacterSpacing(0));
  }
  marks(back);

  // Document info + PDF/X keys.
  const now = new Date();
  doc.setTitle(`Harmoney business card ${data.name || ""}`.trim());
  doc.setAuthor("Harmoney");
  doc.setCreator("Harmoney business card setup page (Otto Creatives)");
  doc.setProducer("pdf-lib 1.17.1");
  doc.setCreationDate(now); doc.setModificationDate(now);
  const info = doc.getInfoDict();
  info.set(PDFName.of("Trapped"), PDFName.of("False"));
  info.set(PDFName.of("GTS_PDFXVersion"), PDFString.of("PDF/X-1:2001"));
  info.set(PDFName.of("GTS_PDFXConformance"), PDFString.of("PDF/X-1a:2001"));
  const ctx = doc.context;
  const intent = ctx.obj({});
  intent.set(PDFName.of("Type"), PDFName.of("OutputIntent"));
  intent.set(PDFName.of("S"), PDFName.of("GTS_PDFX"));
  intent.set(PDFName.of("OutputConditionIdentifier"), PDFString.of("FOGRA39"));
  intent.set(PDFName.of("OutputCondition"), PDFString.of("Coated FOGRA39 (ISO 12647-2:2004)"));
  intent.set(PDFName.of("RegistryName"), PDFString.of("http://www.color.org"));
  intent.set(PDFName.of("Info"), PDFString.of("Coated FOGRA39 (ISO 12647-2:2004)"));
  if (files.icc) {
    const icc = ctx.flateStream(files.icc, { N: 4 });
    intent.set(PDFName.of("DestOutputProfile"), ctx.register(icc));
  }
  doc.catalog.set(PDFName.of("OutputIntents"), ctx.obj([ctx.register(intent)]));
  const id = Array.from(crypto.getRandomValues(new Uint8Array(16)), b => b.toString(16).padStart(2, "0")).join("");
  ctx.trailerInfo.ID = ctx.obj([PDFHexString.of(id), PDFHexString.of(id)]);
  // pdf-lib always writes a 1.7 header. PDF/X-1a:2001 needs 1.3: same length, so byte offsets stay valid.
  const bytes = await doc.save({ useObjectStreams: false });
  bytes.set([0x31, 0x2e, 0x33], 5); // "%PDF-1.7" -> "%PDF-1.3"
  return { bytes, warn: L.warn };
}

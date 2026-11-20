import { CARD, COLOURS, LOGO, BRANDMARK, layout, buildPdf } from "./card.js";

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const FIELDS = ["name", "title", "email", "phone"];
const val = id => $("f-" + id).value.trim();
const ph = id => $("f-" + id).placeholder;
$("year").textContent = new Date().getFullYear();

// Width in mm, measured with the same font files the PDF uses.
const FAM = { name: "HSHeadline", title: "HSTextLight", contact: "HSText" };
const ctx = document.createElement("canvas").getContext("2d");
const measure = (style, t) => {
  const st = CARD[style];
  ctx.font = `100px ${FAM[style]}`;
  return ctx.measureText(t).width / 100 * st.size * (1 + (st.track || 0));
};

let colour = COLOURS[0].key;
const paths = (v, fill) => `<g transform="translate(${v.x} ${v.y}) scale(${v.unit})" fill="${fill}">${v.paths.map(d => `<path d="${d}"/>`).join("")}</g>`;
const bg = side => `<image href="assets/preview-${side === "front" ? "front-" + colour : "back"}.jpg" x="${-CARD.bleed}" y="${-CARD.bleed}" width="${CARD.trim.w + 2 * CARD.bleed}" height="${CARD.trim.h + 2 * CARD.bleed}" preserveAspectRatio="none"/>`;
const data = sample => Object.fromEntries(FIELDS.map(f => [f, val(f) || (sample ? ph(f) : "")]));

function render() {
  $("tabs").innerHTML = COLOURS.map(c => `<button class="tab" role="tab" data-key="${c.key}" aria-selected="${c.key === colour}"><i style="background:${c.hex}"></i>${c.label}</button>`).join("");
  $("front").innerHTML = bg("front") + paths(LOGO, "#fff");
  const L = layout(data(true), measure);
  const color = { name: "#222326", title: "#5C5F68", contact: "#222326" };
  $("back").innerHTML = bg("back") + paths(BRANDMARK, "#222326") + L.lines.map(l => {
    const st = CARD[l.style];
    return `<text x="${CARD.margin}" y="${l.y}" font-family="${FAM[l.style]}" font-size="${st.size}" fill="${color[l.style]}"${st.track ? ` letter-spacing="${st.track * st.size}"` : ""}>${esc(l.text)}</text>`;
  }).join("");
  say(L.warn[0] || "", "warn");
}

function say(m, kind) { const s = $("status"); s.textContent = m; s.className = "status " + (m ? kind || "ok" : ""); }

FIELDS.forEach(f => $("f-" + f).addEventListener("input", render));
$("tabs").addEventListener("click", e => { const t = e.target.closest("[data-key]"); if (t) { colour = t.dataset.key; render(); } });
document.fonts.ready.then(render);
render();

// Print PDF: pdf-lib builds a PDF/X-1a:2001 file in the browser, nothing is uploaded.
const bytes = url => fetch(url).then(r => { if (!r.ok) throw new Error(url); return r.arrayBuffer(); });
let libs = null;
$("dl").addEventListener("click", async () => {
  const d = data(false);
  if (!d.name || !d.email) { say("Fill in at least your name and email.", "warn"); return; }
  $("dl").disabled = true; say("Making your print file...", "warn");
  try {
    libs ||= await Promise.all([
      import("https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/+esm"),
      import("https://cdn.jsdelivr.net/npm/@pdf-lib/fontkit@1.1.1/+esm"),
    ]);
    const [PDFLib, fk] = libs;
    const files = {
      fonts: {
        headline: await bytes("fonts/StackSansHeadline-Regular.ttf"),
        light: await bytes("fonts/StackSansText-Light.ttf"),
        regular: await bytes("fonts/StackSansText-Regular.ttf"),
      },
      bg: { [`front-${colour}`]: await bytes(`assets/front-${colour}.jpg`), back: await bytes("assets/back.jpg") },
    };
    const out = await buildPdf(PDFLib, fk.default || fk, d, colour, files);
    if (out.warn.length) { say(out.warn[0], "warn"); return; }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([out.bytes], { type: "application/pdf" }));
    a.download = `Harmoney business card ${d.name} ${colour}.pdf`.replace(/[\\/:*?"<>|]/g, "");
    a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    say("Downloaded. Send this PDF to the printer (step 2).");
  } catch (e) {
    console.error(e); say("Something went wrong making the file. Reload the page and try again.", "warn");
  } finally { $("dl").disabled = false; }
});

// Bygger kundestribe, projektkort, egne initiativer og historik ud fra PROJEKTER (projekter.js).
(function () {
  const PROJ = PROJEKTER.filter(p => !p.skjult);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const vis = (id, html) => { const el = document.getElementById(id); el.innerHTML = html; return el; };
  // Pladsholdere i [kantede parenteser] vises ikke på siden, før de er udfyldt
  const ren = s => String(s ?? "").replace(/\s*\[[^\]]*\]/g, "").trim();
  const aarTxt = p => /\d/.test(ren(p.aar)) ? ren(p.aar) : "";
  const lille = src => src.replace(/^img\/(?!thumb\/)/, "img/thumb/");
  const linkTil = p => [
    p.link && `<a class="ext" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))} ↗</a>`,
    p.instagram && `<a class="ext" href="${esc(p.instagram)}" target="_blank" rel="noopener">Instagram ↗</a>`
  ].filter(Boolean).join(" ");

  const slug = s => String(s).toLowerCase().replace(/[^a-z0-9æøå]+/g, "-").replace(/^-|-$/g, "");
  // Kunder i stribe: link til projektkortet, ellers til kundens hjemmeside
  const kunder = PROJ.filter(p => p.status === "aktuel" && !p.egen);
  vis("clients", kunder.map(p => {
    const href = p.fremhaevet ? `#${slug(p.kunde)}` : p.link;
    const ext = !p.fremhaevet && p.link ? ` target="_blank" rel="noopener"` : "";
    return `<li>${href ? `<a href="${esc(href)}"${ext}>${esc(p.kunde)}</a>` : esc(p.kunde)}</li>`;
  }).join(""));
  // Et klik på en kunde viser alle kort igen, så kortet ikke er skjult af et filter
  document.getElementById("clients").addEventListener("click", e => {
    if (e.target.closest('a[href^="#"]')) document.querySelector('.filters [data-f="alle"]')?.click();
  });

  const udvalgt = p => p.udvalgt?.length ? `
        <ul class="credits">${p.udvalgt.map(([aar, hvad, hvor, rolle, link]) => `
          <li><span class="yr">${esc(aar)}</span><span>${link ? `<a href="${esc(link)}" target="_blank" rel="noopener"><b>${esc(hvad)}</b> ↗</a>` : `<b>${esc(hvad)}</b>`} · ${esc(hvor)}<br><small>${esc(rolle)}</small></span></li>`).join("")}
        </ul>` : "";

  const erVideo = src => /\.mp4$|^data:video/i.test(src);
  const galleri = p => p.galleri?.length ? `
      <div class="thumbs">${p.galleri.slice(0, 4).map((src, i) => `
        <button type="button" data-galleri="${esc([p.billede, ...p.galleri].join("|"))}" data-i="${i + 1}" aria-label="Vis billede ${i + 2} fra ${esc(p.kunde)}">
          ${erVideo(src) ? `<video src="${esc(src)}#t=2" muted playsinline preload="metadata"></video><i class="play">▶</i>` : `<img src="${esc(lille(src))}" alt="" loading="lazy">`}${i === 3 && p.galleri.length > 4 ? `<span>+${p.galleri.length - 4}</span>` : ""}
        </button>`).join("")}
      </div>` : "";

  vis("cards", PROJ.filter(p => p.fremhaevet).map(p => `
    <article class="card${p.stor ? " big" : ""}" id="${esc(slug(p.kunde))}" data-tags="${esc((p.kategori || []).join(" "))}">
      <div class="ph" data-label="${esc(p.kunde)}">${p.billede ? `<img class="media" src="${esc(p.billede)}" alt="${esc(p.kunde + ": " + (ren(p.titel) || ren(p.rolle)))}" loading="lazy" data-galleri="${esc([p.billede, ...(p.galleri || [])].join("|"))}" data-i="0">` : ""}</div>${galleri(p)}
      <div class="card-body">
        <p class="tag">${esc([p.kunde, aarTxt(p)].filter(Boolean).join(" · "))}</p>
        <h3>${esc(ren(p.titel) || ren(p.rolle))}</h3>
        <p>${esc(ren(p.tekst))}</p>${udvalgt(p)}
        ${linkTil(p)}
      </div>
    </article>`).join(""));

  vis("egne", PROJ.filter(p => p.egen).map(p => `
    <div class="own">
      <p class="tag">${esc([aarTxt(p), p.status === "tidligere" ? "afsluttet" : ""].filter(Boolean).join(" · "))}</p>
      <h3>${esc(p.kunde)}</h3>
      <p class="role">${esc(p.rolle)}</p>
      <p>${esc(p.tekst)}</p>
      ${linkTil(p)}
    </div>`).join(""));

  // Lysboks: klik på et billede eller et lille billede for at bladre i projektets billeder
  const boks = document.createElement("dialog");
  boks.className = "lightbox";
  boks.innerHTML = `<img alt=""><video muted loop playsinline controls hidden></video><button class="lb-prev" aria-label="Forrige">‹</button><button class="lb-next" aria-label="Næste">›</button><button class="lb-close" aria-label="Luk">×</button><p class="lb-count"></p>`;
  document.body.append(boks);
  let liste = [], nr = 0;
  const visBillede = () => {
    const img = boks.querySelector("img"), vid = boks.querySelector("video"), v = erVideo(liste[nr]);
    img.hidden = v; vid.hidden = !v;
    if (v) { vid.src = liste[nr]; vid.play().catch(() => {}); } else { vid.pause(); img.src = liste[nr]; }
    boks.querySelector(".lb-count").textContent = `${nr + 1} / ${liste.length}`;
  };
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-galleri]");
    if (!el) return;
    liste = el.dataset.galleri.split("|"); nr = +el.dataset.i;
    visBillede(); boks.showModal();
  });
  const skift = d => { nr = (nr + d + liste.length) % liste.length; visBillede(); };
  boks.querySelector(".lb-prev").onclick = () => skift(-1);
  boks.querySelector(".lb-next").onclick = () => skift(1);
  boks.querySelector(".lb-close").onclick = () => boks.close();
  boks.addEventListener("close", () => boks.querySelector("video").pause());
  boks.addEventListener("click", e => { if (e.target === boks) boks.close(); });
  // Swipe til siden på telefon
  let startX = null;
  boks.addEventListener("touchstart", e => { startX = e.touches[0].clientX; }, { passive: true });
  boks.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - (startX ?? e.changedTouches[0].clientX);
    if (Math.abs(dx) > 40) skift(dx < 0 ? 1 : -1);
    startX = null;
  });
  boks.addEventListener("keydown", e => { if (e.key === "ArrowLeft") skift(-1); if (e.key === "ArrowRight") skift(1); });

  const aarTal = p => parseInt(String(p.aar).match(/\d{4}(?!.*\d{4})/)?.[0] || "9999", 10);
  const tidligere = PROJ.filter(p => p.status === "tidligere" && !p.egen).sort((a, b) => aarTal(b) - aarTal(a));
  vis("history", tidligere.map(p =>
    `<li><span class="yr">${esc(aarTxt(p))}</span><span class="who">${esc(p.kunde)}</span><span class="what">${esc(p.rolle)}${p.udvalgt?.length ? `
      <details><summary>Udvalgte opgaver (${p.udvalgt.length})</summary>${udvalgt(p)}</details>` : ""}</span></li>`).join(""));
  document.getElementById("historik").hidden = tidligere.length === 0;
})();

// Bygger kundestribe, projektkort, egne initiativer og historik ud fra PROJEKTER (projekter.js).
// tegn(sprog) kaldes af sprog.js, og igen når man skifter mellem dansk og engelsk.
const tegn = (function () {
  const PROJ = PROJEKTER.filter(p => !p.skjult);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const vis = (id, html) => { const el = document.getElementById(id); el.innerHTML = html; return el; };
  const ORD = {
    da: { afsluttet: "afsluttet", udvalgte: "Udvalgte opgaver", visBillede: "Vis billede", fra: "fra", forrige: "Forrige", naeste: "Næste", luk: "Luk", tilbage: "← Alle projekter", seProjekt: "Se projektet", billeder: "billeder", naeste2: "Næste projekt" },
    en: { afsluttet: "ended", udvalgte: "Selected work", visBillede: "Show image", fra: "from", forrige: "Previous", naeste: "Next", luk: "Close", tilbage: "← All projects", seProjekt: "View project", billeder: "images", naeste2: "Next project" }
  };
  let sprog = "da", ord = ORD.da;

  // Feltet på det valgte sprog: engelsk fra ENGELSK, ellers dansk
  const f = (p, felt) => (sprog === "en" && typeof ENGELSK !== "undefined" && ENGELSK[p.kunde]?.[felt]) || p[felt];
  // Pladsholdere i [kantede parenteser] vises ikke på siden, før de er udfyldt
  const ren = s => String(s ?? "").replace(/\s*\[[^\]]*\]/g, "").trim();
  const aarTxt = p => /\d/.test(ren(f(p, "aar"))) ? ren(f(p, "aar")) : "";
  const lille = src => src.replace(/^img\/(?!thumb\/)/, "img/thumb/");
  const slug = s => String(s).toLowerCase().replace(/[^a-z0-9æøå]+/g, "-").replace(/^-|-$/g, "");
  const erVideo = src => /\.mp4$|^data:video/i.test(src);

  const linkTil = p => [
    p.link && `<a class="ext" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.link.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))} ↗</a>`,
    p.instagram && `<a class="ext" href="${esc(p.instagram)}" target="_blank" rel="noopener">Instagram ↗</a>`
  ].filter(Boolean).join(" ");

  // Udvalgte opgaver: den engelske liste har [sted, rolle, evt. titel] i samme rækkefølge som den danske
  const udvalgt = p => {
    if (!p.udvalgt?.length) return "";
    const en = sprog === "en" && typeof ENGELSK !== "undefined" ? ENGELSK[p.kunde]?.udvalgt : null;
    return `
        <ul class="credits">${p.udvalgt.map(([aar, hvad, hvor, rolle, link], i) => {
          if (en?.[i]) { hvor = en[i][0] ?? hvor; rolle = en[i][1] ?? rolle; hvad = en[i][2] ?? hvad; }
          return `
          <li><span class="yr">${esc(aar)}</span><span>${link ? `<a href="${esc(link)}" target="_blank" rel="noopener"><b>${esc(hvad)}</b> ↗</a>` : `<b>${esc(hvad)}</b>`} · ${esc(hvor)}<br><small>${esc(rolle)}</small></span></li>`;
        }).join("")}
        </ul>`;
  };

  const galleri = p => p.galleri?.length ? `
      <div class="thumbs">${p.galleri.slice(0, 4).map((src, i) => `
        <button type="button" data-galleri="${esc([p.billede, ...p.galleri].join("|"))}" data-i="${i + 1}" aria-label="${ord.visBillede} ${i + 2} ${ord.fra} ${esc(p.kunde)}">
          ${erVideo(src) ? `<video src="${esc(src)}#t=2" muted playsinline preload="metadata"></video><i class="play">▶</i>` : `<img src="${esc(lille(src))}" alt="" loading="lazy">`}${i === 3 && p.galleri.length > 4 ? `<span>+${p.galleri.length - 4}</span>` : ""}
        </button>`).join("")}
      </div>` : "";

  // Lysboks: klik på et billede eller et lille billede for at bladre i projektets billeder
  const boks = document.createElement("dialog");
  boks.className = "lightbox";
  boks.innerHTML = `<img alt=""><video muted loop playsinline controls hidden></video><button class="lb-prev">‹</button><button class="lb-next">›</button><button class="lb-close">×</button><p class="lb-count"></p>`;
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

  // Et klik på en kunde viser alle kort igen, så kortet ikke er skjult af et filter
  document.getElementById("clients").addEventListener("click", e => {
    if (e.target.closest('a[href^="#"]')) document.querySelector('.filters [data-f="alle"]')?.click();
  });

  // Projektside: #projekt/slug viser hele projektet med alle billeder i stort format
  const side = document.createElement("section");
  side.id = "projektside"; side.hidden = true;
  document.querySelector("main").after(side);
  const medSide = () => PROJ.filter(p => p.fremhaevet && p.billede);
  const visSide = () => {
    const m = location.hash.match(/^#projekt\/(.+)$/);
    const p = m && medSide().find(x => slug(x.kunde) === decodeURIComponent(m[1]));
    const var_aaben = !side.hidden;
    if (!p) {
      if (var_aaben) {
        side.hidden = true; document.documentElement.classList.remove("side-aaben");
        const el = location.hash.length > 1 && document.getElementById(location.hash.slice(1));
        if (el) el.scrollIntoView({ behavior: "instant" }); else scrollTo({ top: 0, behavior: "instant" });
      }
      return;
    }
    const alle = [p.billede, ...(p.galleri || [])], liste = alle.join("|");
    const ps = medSide(), nr = ps.indexOf(p), naeste = ps[(nr + 1) % ps.length];
    side.innerHTML = `
    <div class="ps-top"><a class="ps-back" href="#${esc(slug(p.kunde))}">${ord.tilbage}</a></div>
    <header class="ps-head">
      <p class="tag">${esc([f(p, "kunde"), aarTxt(p)].filter(Boolean).join(" · "))}</p>
      <h1>${esc(ren(f(p, "titel")) || ren(f(p, "rolle")))}</h1>
      ${ren(f(p, "titel")) ? `<p class="role">${esc(ren(f(p, "rolle")))}</p>` : ""}
      <p class="lead">${esc(ren(f(p, "tekst")))}</p>
      ${linkTil(p)}${udvalgt(p)}
    </header>
    <div class="ps-billeder">${alle.map((src, i) => erVideo(src)
      ? `<figure><video src="${esc(src)}" controls muted playsinline loop preload="metadata"></video></figure>`
      : `<figure${i === 0 ? ' class="foerste"' : ""}><img src="${esc(src)}" alt="${esc(f(p, "kunde"))} ${i + 1}" loading="${i < 3 ? "eager" : "lazy"}" data-galleri="${esc(liste)}" data-i="${i}"></figure>`).join("")}
    </div>
    <nav class="ps-nav">
      <a href="#${esc(slug(p.kunde))}">${ord.tilbage}</a>
      <a href="#projekt/${esc(slug(naeste.kunde))}">${ord.naeste2}: ${esc(f(naeste, "kunde"))} →</a>
    </nav>`;
    side.hidden = false; document.documentElement.classList.add("side-aaben");
    scrollTo({ top: 0, behavior: "instant" });
  };
  addEventListener("hashchange", visSide);

  const aarTal = p => parseInt(String(p.aar).match(/\d{4}(?!.*\d{4})/)?.[0] || "9999", 10);

  return function (nytSprog) {
    sprog = nytSprog === "en" ? "en" : "da"; ord = ORD[sprog];
    boks.querySelector(".lb-prev").setAttribute("aria-label", ord.forrige);
    boks.querySelector(".lb-next").setAttribute("aria-label", ord.naeste);
    boks.querySelector(".lb-close").setAttribute("aria-label", ord.luk);

    // Kunder i stribe: link til projektkortet, ellers til kundens hjemmeside
    vis("clients", PROJ.filter(p => p.status === "aktuel" && !p.egen).map(p => {
      const href = p.fremhaevet ? `#${slug(p.kunde)}` : p.link;
      const ext = !p.fremhaevet && p.link ? ` target="_blank" rel="noopener"` : "";
      return `<li>${href ? `<a href="${esc(href)}"${ext}>${esc(f(p, "kunde"))}</a>` : esc(f(p, "kunde"))}</li>`;
    }).join(""));

    const filter = document.querySelector(".filters button.on")?.dataset.f || "alle";
    vis("cards", PROJ.filter(p => p.fremhaevet).map(p => `
    <article class="card${p.stor ? " big" : ""}" id="${esc(slug(p.kunde))}" data-tags="${esc((p.kategori || []).join(" "))}"${filter !== "alle" && !(p.kategori || []).includes(filter) ? " hidden" : ""}>
      <div class="ph" data-label="${esc(f(p, "kunde"))}">${p.billede ? `<a href="#projekt/${esc(slug(p.kunde))}" aria-label="${ord.seProjekt}: ${esc(f(p, "kunde"))}"><img class="media" src="${esc(p.billede)}" alt="${esc(f(p, "kunde") + ": " + (ren(f(p, "titel")) || ren(f(p, "rolle"))))}" loading="lazy"></a>` : ""}</div>${galleri(p)}
      <div class="card-body">
        <p class="tag">${esc([f(p, "kunde"), aarTxt(p)].filter(Boolean).join(" · "))}</p>
        <h3>${p.billede ? `<a href="#projekt/${esc(slug(p.kunde))}">${esc(ren(f(p, "titel")) || ren(f(p, "rolle")))}</a>` : esc(ren(f(p, "titel")) || ren(f(p, "rolle")))}</h3>
        <p>${esc(ren(f(p, "tekst")))}</p>${udvalgt(p)}
        ${p.billede ? `<a class="mere" href="#projekt/${esc(slug(p.kunde))}">${ord.seProjekt} · ${1 + (p.galleri?.length || 0)} ${ord.billeder} →</a>` : ""}
        ${linkTil(p)}
      </div>
    </article>`).join(""));

    vis("egne", PROJ.filter(p => p.egen).map(p => `
    <div class="own">
      <p class="tag">${esc([aarTxt(p), p.status === "tidligere" ? ord.afsluttet : ""].filter(Boolean).join(" · "))}</p>
      <h3>${esc(f(p, "kunde"))}</h3>
      <p class="role">${esc(ren(f(p, "rolle")))}</p>
      <p>${esc(ren(f(p, "tekst")))}</p>
      ${linkTil(p)}
    </div>`).join(""));

    const tidligere = PROJ.filter(p => p.status === "tidligere" && !p.egen).sort((a, b) => aarTal(b) - aarTal(a));
    vis("history", tidligere.map(p =>
      `<li><span class="yr">${esc(aarTxt(p))}</span><span class="who">${esc(f(p, "kunde"))}</span><span class="what">${esc(ren(f(p, "rolle")))}${p.udvalgt?.length ? `
      <details><summary>${ord.udvalgte} (${p.udvalgt.length})</summary>${udvalgt(p)}</details>` : ""}</span></li>`).join(""));
    document.getElementById("historik").hidden = tidligere.length === 0;
    if (location.hash.startsWith("#projekt/")) visSide();
  };
})();

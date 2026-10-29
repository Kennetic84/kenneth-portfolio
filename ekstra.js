// Små detaljer, der gør siden til Kenneths: højdemåler (kun computer) og "Set fra toppen".
(function () {
  // Set fra toppen: billederne åbner i samme lysboks som projekterne
  const top = [...document.querySelectorAll(".top-strip img")];
  top.forEach(img => { img.dataset.galleri = top.map(i => i.getAttribute("src")).join("|"); });

  // Højdemåler: man starter oppe og firer sig ned gennem siden
  const TOP = 60;
  const maaler = document.createElement("div");
  maaler.className = "hoejde"; maaler.setAttribute("aria-hidden", "true");
  maaler.innerHTML = `<i class="reb"></i><span class="lod"><b>${TOP} m</b></span>`;
  document.body.append(maaler);
  const lod = maaler.querySelector(".lod"), tal = maaler.querySelector("b");
  const opdater = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0;
    lod.style.top = (p * 100) + "%";
    tal.textContent = Math.round(TOP * (1 - p)) + " m";
    maaler.classList.toggle("nede", p > 0.995);
  };
  addEventListener("scroll", opdater, { passive: true });
  addEventListener("resize", opdater);
  opdater();
})();

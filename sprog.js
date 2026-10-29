// Dansk/engelsk: de faste tekster i index.html står på dansk, og her er deres engelske udgave.
// Nøglen er den danske tekst præcis som i index.html. Ændres en dansk tekst, skal nøglen her rettes med.
const TEKSTER_EN = {
  "Projekter": "Projects",
  "Initiativer": "Initiatives",
  "Historik": "History",
  "Ydelser": "Services",
  "Om": "About",
  "Kontakt": "Contact",
  "Set fra toppen": "View from the top",
  "Udsigten fra arbejdspladsen.": "The view from the office.",
  "Lys i bevægelse.<br>Teknik i højden.": "Light in motion.<br>Tech at height.",
  "Oplevelser og steder, der flytter folk, både fysisk og mentalt. Lystekniker, kinetisk lys og rope access, i Odense og ude i verden.":
    "Experiences and places that move people, physically and mentally. Lighting, kinetic lighting and rope access, in Odense and around the world.",
  "Se projekter": "See projects",
  "Skriv til mig": "Get in touch",
  "Arbejder løbende for": "Currently working with",
  "Udvalgte projekter": "Selected projects",
  "Alle": "All",
  "Lys": "Lighting",
  "Initiativer og fællesskaber": "Initiatives and communities",
  "Ud over opgaverne for andre har jeg været med til at starte og drive steder, fællesskaber og events i Odense.":
    "Besides working for clients, I have helped start and run venues, communities and events in Odense.",
  "Tidligere projekter og samarbejder.": "Past projects and collaborations.",
  "Det kan jeg hjælpe med": "What I can help with",
  "Lysteknik": "Lighting",
  "Rig, fokus, programmering og afvikling til teater, koncerter og events.": "Rigging, focus, programming and show operation for theatre, concerts and events.",
  "Kinetisk lys": "Kinetic lighting",
  "Montage og drift af bevægelige lysinstallationer, hvor mekanik, lys og tid spiller sammen.": "Installation and operation of moving light installations, where mechanics, light and time work together.",
  "IRATA-certificeret industriel rope access-tekniker. Sikkert arbejde i højden: rigning, montage og serviceopgaver, hvor lift og stillads ikke rækker.":
    "IRATA-certified industrial rope access technician. Safe work at height: rigging, installation and service where lifts and scaffolding can't reach.",
  "Venue- og lysdesign": "Venue and lighting design",
  "Koncept, venue og lys til klubaftener, festivaler og scenekunst, fra PHONO Festival til Odeology og DYNAMO.":
    "Concept, venue and lighting for club nights, festivals and performing arts, from PHONO Festival to Odeology and DYNAMO.",
  "VJ og projektionsmapping": "VJ and projection mapping",
  "Visuals, projektion og interaktive installationer til shows og udstillinger.": "Visuals, projection and interactive installations for shows and exhibitions.",
  "Produktion og projektledelse": "Production and project management",
  "Fra idé til afvikling: planlægning, teknik, hold og drift. Jeg har også undervist i multimediedesign på EAL (UCL).":
    "From idea to show: planning, tech, crew and operations. I have also taught multimedia design at EAL (UCL).",
  "Om mig": "About me",
  "Jeg har arbejdet med events, scener og lys siden 2007 og har drevet Ignition House fra Odense siden 2013. Mit arbejde ligger der, hvor lys, teknik og højder mødes: den ene dag fokuserer jeg lamper på en teaterscene, den næste hænger jeg i tov på en facade eller servicerer en kinetisk lysinstallation.":
    "I have worked with events, stages and lighting since 2007 and have run Ignition House from Odense since 2013. My work sits where light, technology and height meet: one day I focus lamps on a theatre stage, the next I hang on ropes on a facade or service a kinetic light installation.",
  "Jeg kom ind i kinetisk lys som praktikant hos WHITEvoid i 2012 og har siden arbejdet på installationer og turnéer i Europa, USA og Asien, bl.a. ABBA Voyage i London, Hakkasan i Las Vegas og Bon Ivers turnéer i USA og Europa. Hjemme i Odense har jeg været med til at bygge PHONO Festival, DYNAMO, Odeology, Coworking Plus og Kulturklyngen op.":
    "I got into kinetic lighting as an intern at WHITEvoid in 2012 and have since worked on installations and tours in Europe, the US and Asia, including ABBA Voyage in London, Hakkasan in Las Vegas and Bon Iver's tours in the US and Europe. At home in Odense I have helped build up PHONO Festival, DYNAMO, Odeology, Coworking Plus and Kulturklyngen.",
  "Jeg kan lide opgaver, der kræver både præcision og overblik, og hvor resultatet er noget, folk faktisk oplever.":
    "I like jobs that demand both precision and overview, where the result is something people actually experience.",
  "<b>Base</b> Odense, arbejder i hele landet og udlandet": "<b>Base</b> Odense, working across Denmark and abroad",
  "<b>Firma</b> Ignition House · CVR 34837538": "<b>Company</b> Ignition House · CVR 34837538",
  "<b>Sprog</b> Dansk, engelsk": "<b>Languages</b> Danish, English",
  "<b>Uddannelse</b> Professionsbachelor i innovation og entrepreneurship og AP i IT-teknologi/elektronik, Erhvervsakademiet Lillebælt":
    "<b>Education</b> Bachelor in Innovation and Entrepreneurship and AP degree in IT technology/electronics, Business Academy Lillebaelt",
  "<b>Certifikat</b> IRATA industriel rope access": "<b>Certificate</b> IRATA industrial rope access",
  "<b>Priser</b> Den Fynske Kulturpris 2019 (DYNAMO) og 2012 (PHONO)": "<b>Awards</b> Funen Culture Prize 2019 (DYNAMO) and 2012 (PHONO)",
  "Lad os lave noget": "Let's make something",
  "Skal du bruge en lystekniker, en ekstra mand i højden eller én til at få en installation til at bevæge sig? Skriv til mig.":
    "Need a lighting technician, an extra pair of hands at height, or someone to make an installation move? Get in touch.",
  "Foto bl.a. Hans Kristian Hannibal-Bach, Daniel Hjorth, Asbjørn Sand og MG Media": "Photos include Hans Kristian Hannibal-Bach, Daniel Hjorth, Asbjørn Sand and MG Media",
  "Kenneth Danielsen · under opbygning": "Kenneth Danielsen · under construction",
  "Åbn": "Open",
  "Forkert kode": "Wrong password"
};
const ATTRIBUTTER_EN = {
  "Kenneth Danielsen · Lys & rope access": "Kenneth Danielsen · Light & rope access",
  "Kenneth Danielsen, Ignition House, Odense. Lystekniker, kinetisk lys og rope access til teater, koncerter, events og installationer.":
    "Kenneth Danielsen, Ignition House, Odense. Lighting technician, kinetic lighting and rope access for theatre, concerts, events and installations.",
  "DJ i lilla lys og røg til Odeology": "DJ in purple light and haze at Odeology",
  "Kenneth Danielsen med headset i lystårnet over en festivalscene": "Kenneth Danielsen with headset in the lighting tower above a festival stage",
  "Adgangskode": "Password",
  "Filtrer projekter": "Filter projects",
  "Udsigt fra højden: Orange Scene, Roskilde": "View from height: Orange Scene, Roskilde",
  "Udsigt fra højden: SiteCover": "View from height: SiteCover"
};

(function () {
  const norm = s => s.replace(/\s+/g, " ").trim();
  // Husk de danske originaler, så man kan skifte frem og tilbage
  const tekster = [...document.querySelectorAll("title, h1, h2, h3, p, a, button, li")]
    .filter(el => TEKSTER_EN[norm(el.innerHTML)])
    .map(el => ({ el, da: el.innerHTML, en: TEKSTER_EN[norm(el.innerHTML)] }));
  const attr = [];
  document.querySelectorAll('[alt], [placeholder], [aria-label], meta[name="description"]').forEach(el => {
    for (const a of ["alt", "placeholder", "aria-label", "content"]) {
      const v = el.getAttribute(a);
      if (v && ATTRIBUTTER_EN[v]) attr.push({ el, a, da: v, en: ATTRIBUTTER_EN[v] });
    }
  });
  const titelDa = document.title;

  const knap = document.createElement("button");
  knap.type = "button"; knap.className = "sprog";
  document.querySelector(".nav nav").append(knap);

  const saet = sprog => {
    document.documentElement.lang = sprog;
    tekster.forEach(t => { t.el.innerHTML = t[sprog]; });
    attr.forEach(t => t.el.setAttribute(t.a, t[sprog]));
    document.title = sprog === "en" ? ATTRIBUTTER_EN[titelDa] || titelDa : titelDa;
    knap.textContent = sprog === "en" ? "DA" : "EN";
    knap.setAttribute("aria-label", sprog === "en" ? "Skift til dansk" : "Switch to English");
    tegn(sprog);
  };

  // Gemt valg, ellers dansk for danske browsere og engelsk for alle andre
  let sprog;
  try { sprog = localStorage.getItem("sprog"); } catch (e) {}
  if (sprog !== "da" && sprog !== "en") sprog = (navigator.languages || [navigator.language]).some(l => /^(da|nb|nn|no|sv)\b/i.test(l || "")) ? "da" : "en";
  knap.addEventListener("click", () => {
    sprog = sprog === "en" ? "da" : "en";
    try { localStorage.setItem("sprog", sprog); } catch (e) {}
    saet(sprog);
  });
  saet(sprog);
})();

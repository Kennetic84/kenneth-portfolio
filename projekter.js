/*
  ALLE PROJEKTER – den eneste fil der skal rettes, når noget skal tilføjes.

  Felter:
    kunde      Navn på kunde/projekt
    titel      Overskrift på kortet
    aar        År eller periode, fx "2019" eller "2017–"
    rolle      Kort beskrivelse af min rolle (bruges i Historik og Egne initiativer)
    tekst      Længere tekst til kortet
    kategori   Én eller flere af: lys, kinetisk, rope, event, undervisning
    status     "aktuel" eller "tidligere"
    egen       true = mit eget initiativ (vises under "Egne initiativer", ikke i kundelisten)
    fremhaevet true = vises som billedkort under "Udvalgte projekter"
    stor       true = kortet fylder hele bredden
    udvalgt    Liste med udvalgte opgaver: [år, opgave, sted, rolle, link (valgfrit)]
    link       Ekstern hjemmeside
    instagram  Projektets Instagram
    skjult     true = med i filen, men vises ikke på siden (fx indtil en kunde har godkendt det)
    billede    Hovedbillede, fx "img/dynamo-1.jpg" (tom = pladsholder)
    galleri    Flere billeder, der vises som små billeder under hovedbilledet og kan klikkes op

  Logik:
    aktuel (ikke egen) → står i "Arbejder løbende for"
    egen               → står i "Egne initiativer"
    tidligere          → står i "Historik"
    fremhaevet         → får et kort (uanset status)
*/
const PROJEKTER = [
  {
    kunde: "DYNAMO", titel: "Værksted for cirkus og performancekunst", aar: "2017–",
    rolle: "Venue- og lysdesign, produktion, tekniker og operatør",
    tekst: "Venue- og lysdesign, produktion, teknik og afvikling i DYNAMO, Odenses værksted for cirkus og performancekunst. DYNAMO modtog Den Fynske Kulturpris i 2019.",
    kategori: ["lys", "event"], status: "aktuel", fremhaevet: true, billede: "img/dynamo-1.jpg",
    galleri: ["img/dynamo-2.jpg", "img/dynamo-3.jpg", "img/dynamo-4.jpg", "img/dynamo-5.jpg", "img/dynamo-6.jpg", "img/dynamo-7.jpg", "img/dynamo-8.jpg", "img/dynamo-9.jpg"],
    link: "https://dynamoworkspace.dk/",
    instagram: "https://www.instagram.com/dynamo_workspace/"
  },
  {
    kunde: "Odeology", titel: "Hvor eksperimenterende musik møder performancekunst", aar: "2018–", egen: true,
    rolle: "Med til at starte foreningen i 2018 og har altid stået for produktionen. I dag formand",
    tekst: "Et rum for elektronisk musik og kunst i Odense, et trygt sted hvor eksperimenterende musik møder performancekunst. Jeg var med til at starte Odeology i 2018 og har fra begyndelsen stået for produktionen: venue- og lysdesign, teknik og afvikling. I dag er jeg også formand for foreningen.",
    kategori: ["event", "lys"], status: "aktuel", fremhaevet: true, billede: "img/odeology-7.jpg",
    galleri: ["img/odeology-22.jpg", "img/odeology-23.jpg", "img/odeology-24.jpg", "img/odeology-25.jpg", "img/odeology-26.jpg", "img/odeology-27.jpg", "img/odeology-28.jpg", "img/odeology-29.jpg", "img/odeology-30.jpg", "img/odeology-31.jpg", "img/odeology-32.jpg", "img/odeology-33.jpg", "img/odeology-34.jpg", "img/odeology-35.jpg", "img/odeology-8.jpg", "img/odeology-9.jpg", "img/odeology-10.jpg", "img/odeology-11.jpg", "img/odeology-12.jpg", "img/odeology-13.jpg", "img/odeology-14.jpg", "img/odeology-15.jpg", "img/odeology-16.jpg", "img/odeology-17.jpg", "img/odeology-18.jpg", "img/odeology-19.jpg", "img/odeology-20.jpg", "img/odeology-21.jpg", "img/odeology-1.jpg", "img/odeology-2.jpg", "img/odeology-3.jpg", "img/odeology-4.jpg", "img/odeology-5.jpg", "img/odeology-6.jpg"],
    link: "https://www.odeology.dk/",
    instagram: "https://www.instagram.com/odeologyodense/"
  },
  {
    kunde: "Odense Teater", titel: "[Forestilling, sæson]", aar: "[ÅR]–",
    rolle: "Lystekniker",
    tekst: "Lysteknik på forestillinger: rig, fokus, opsætning og afvikling. [Tilføj forestillinger.]",
    link: "https://odenseteater.dk",
    kategori: ["lys"], status: "aktuel", fremhaevet: true, billede: ""
  },
  {
    kunde: "Odeon Odense", titel: "[Event]", aar: "[ÅR]–",
    rolle: "Lystekniker, koncert og event",
    tekst: "Lysteknik til koncerter og arrangementer i Odeon. [Tilføj eksempler.]",
    kategori: ["lys"], status: "aktuel", fremhaevet: true, billede: "img/odeon.jpg"
  },
  {
    kunde: "SiteCover", titel: "Hele byggepladsen under tag", aar: "2023–",
    rolle: "Montør i sele",
    tekst: "SiteCover bygger flytbare overdækninger, der lægger hele byggepladsen under tag: stålkonstruktion og dug med indbyggede kraner, så byggeriet kan fortsætte i al slags vejr. Jeg arbejder som montør i sele på opbygning og nedtagning, højt oppe på stålet og dugen.",
    link: "https://sitecover.dk",
    kategori: ["rope"], status: "aktuel", fremhaevet: true, billede: "img/sitecover-28.jpg",
    galleri: ["img/sitecover-video.mp4", "img/sitecover-1.jpg", "img/sitecover-29.jpg", "img/sitecover-30.jpg", "img/sitecover-2.jpg", "img/sitecover-3.jpg", "img/sitecover-4.jpg", "img/sitecover-5.jpg", "img/sitecover-6.jpg", "img/sitecover-7.jpg", "img/sitecover-8.jpg", "img/sitecover-9.jpg", "img/sitecover-10.jpg", "img/sitecover-11.jpg", "img/sitecover-12.jpg", "img/sitecover-13.jpg", "img/sitecover-14.jpg", "img/sitecover-15.jpg", "img/sitecover-16.jpg", "img/sitecover-17.jpg", "img/sitecover-18.jpg", "img/sitecover-19.jpg", "img/sitecover-20.jpg", "img/sitecover-21.jpg", "img/sitecover-22.jpg", "img/sitecover-23.jpg", "img/sitecover-24.jpg", "img/sitecover-25.jpg", "img/sitecover-26.jpg", "img/sitecover-27.jpg"]
  },
  {
    kunde: "RT9 Scandinavian Rope Access", titel: "Rope access-tekniker", aar: "2024–",
    rolle: "Rope access-tekniker",
    tekst: "IRATA-certificeret industriel rope access-tekniker hos RT9 siden september 2024. [Typiske opgaver.]",
    link: "https://rt9.dk",
    kategori: ["rope"], status: "aktuel", fremhaevet: true, billede: ""
  },
  {
    kunde: "ETP", titel: "Festivalscener i højden", aar: "2025–",
    rolle: "Rigning og konstruktion af scener",
    tekst: "ETP (European Tour Production) lejer scener, tribuner og teknik ud til oplevelsesbranchen og har lavet projekter i ind- og udland siden 1994. Jeg står for rigning og konstruktion af deres scener på festivaler, bl.a. Orange Scene på Roskilde Festival, Musik i Lejet og Wonderfestiwall på Bornholm.",
    link: "https://etp.nu",
    kategori: ["rope", "event"], status: "aktuel", fremhaevet: true, stor: true,
    billede: "img/etp-1.jpg",
    galleri: ["img/etp-2.jpg", "img/etp-3.jpg", "img/etp-4.jpg", "img/etp-5.jpg", "img/etp-6.jpg", "img/etp-7.jpg", "img/etp-8.jpg", "img/etp-9.jpg", "img/etp-10.jpg"]
  },

  // ---- Egne initiativer ----
  {
    kunde: "Ignition House", aar: "2013–", egen: true, status: "aktuel",
    rolle: "Ejer",
    tekst: "Min enkeltmandsvirksomhed, som jeg tager opgaver igennem. Projektbaseret arbejde inden for underholdnings- og oplevelsesteknologi: liveshows, lys, VJ, installationer og projektledelse. Bl.a. Uendelige Passager og Fællestival Pyramiden.",
    kategori: []
  },
  {
    kunde: "Coworking Plus Odense", aar: "Fra 2014", egen: true, status: "tidligere",
    rolle: "Initiativtager, medstifter og medejer. Har siden solgt min andel",
    tekst: "Kontorfællesskab i centrum af Odense med over 5.100 m² og 450+ arbejdspladser for startups, freelancere og vækstvirksomheder. Jeg tog initiativ til stedet og var med til at bygge det op, med fokus på design, byggeri, fællesskab, netværk og events.",
    kategori: [], link: "https://coworkingplus.dk"
  },
  {
    kunde: "Kulturklyngen", aar: "[ÅR]–[ÅR]", egen: true, status: "tidligere",
    rolle: "Initiativtager og formand",
    tekst: "Initiativet for kulturelle naboskaber i Odense. Samlede byens kulturskabere gennem politiske debatter, workshops og events.",
    kategori: []
  },

  // ---- Tidligere projekter (Historik). Kopiér en blok og ret den. ----
  // WHITEvoid: opgaverne må nævnes, men billeder venter på godkendelse fra WHITEvoid.
  {
    kunde: "WHITEvoid", aar: "2012–2024",
    rolle: "Kinetisk lys: tekniker, operatør og service på installationer og turnéer i Europa, USA og Asien",
    kategori: ["kinetisk"], status: "tidligere",
    udvalgt: [
      ["2022", "ABBA Voyage", "London", "Konstruktion, tekniker og service", "https://www.whitevoid.com/abbavoyage/"],
      ["2022", "Bon Iver, Europa-turné", "12 byer fra Dublin til Lisboa", "Tekniker og operatør", "https://www.whitevoid.com/bon-iver-mirrors"],
      ["2020", "Hakkasan Grid, MGM Grand", "Las Vegas", "Konstruktion, tekniker, oplæring og service. USA's største permanente kinetiske installation, Muse Award 2020 (platin)", "https://www.whitevoid.com/hakkasan-grid/"],
      ["2020", "Skalar", "Amsterdam", "Tekniker og operatør", "https://www.whitevoid.com/skalar/"],
      ["2020", "Danny Catwalk", "Sverige", "Programmør, operatør og service"],
      ["2019", "Bon Iver, USA- og Canada-turné", "11 byer fra Portland til Toronto", "Tekniker og operatør", "https://www.whitevoid.com/bon-iver-mirrors"],
      ["2018", "2047 Apologue, instr. Zhang Yimou", "Kina-turné", "Tekniker", "https://www.whitevoid.com/2047-apologue-i/"],
      ["2013", "Living Sculpture for Cadillac", "Shanghai", "Opsætning og operatør", "https://kinetic-lights.com/portfolio/livingsculpture-kinetic/"],
      ["2012", "Living Sculpture for Philips", "Frankfurt", "Produktion og opsætning", "https://kinetic-lights.com/portfolio/livingsculpture-philips/"],
      ["", "F8 Facebook Developer Conference", "San Francisco", "Tekniker og operatør"],
      ["", "Luan Santana, Acoustico DVD-show", "São Paulo", "Kinetisk showproduktion"],
      ["", "Gore-Tex", "Friedrichshafen", "Tekniker, programmør og service"],
      ["", "Nike", "New York", "Tekniker"],
    ]
  },
  {
    kunde: "PHONO Festival", titel: "Audiovisuel elektronisk musik", aar: "2011–2017",
    rolle: "Venue- og lysdesign, produktion, tekniker og operatør",
    tekst: "Frivilligt drevet festival i Odense for eksperimenterende elektronisk musik og lysinstallationer. Spillesteder fra det gamle slagteri på Rugårdsvej over Arkaden og FAF på Byens Ø til ULYS på Siloøen. Artister som Tony Allen, Holly Herndon, Robert Hood, Felix Kubin og Birdy Nam Nam. Den Fynske Kulturpris 2012.",
    kategori: ["lys", "event"], status: "tidligere", fremhaevet: true, stor: true, billede: "img/phono-27.jpg",
    galleri: ["img/phono-30.jpg", "img/phono-6.jpg", "img/phono-8.jpg", "img/phono-9.jpg", "img/phono-10.jpg", "img/phono-11.jpg", "img/phono-12.jpg", "img/phono-13.jpg", "img/phono-14.jpg", "img/phono-15.jpg", "img/phono-16.jpg", "img/phono-17.jpg", "img/phono-18.jpg", "img/phono-19.jpg", "img/phono-20.jpg", "img/phono-21.jpg", "img/phono-22.jpg", "img/phono-23.jpg", "img/phono-24.jpg", "img/phono-25.jpg", "img/phono-26.jpg", "img/phono-28.jpg", "img/phono-29.jpg", "img/phono-3.jpg", "img/phono-4.jpg", "img/phono-5.jpg", "img/phono-2.jpg"]
  },
  {
    kunde: "Odense Internationale Musikteater", aar: "2010",
    rolle: "Konstruktion, scenografi, projektionsmapping, operatør og performer i Me We / Urban United",
    kategori: ["lys"], status: "tidligere"
  },
  {
    kunde: "Bagjul", aar: "2010–2013",
    rolle: "Scenetekniker: opbygning, lysdesign, programmering, projektionsmapping og afvikling",
    kategori: ["lys"], status: "tidligere"
  },
  {
    kunde: "Teater Momentum", aar: "2008–2013",
    rolle: "Scenetekniker",
    kategori: ["lys"], status: "tidligere"
  },
  {
    kunde: "Urban Art Project (UAP)", aar: "2009–2010",
    rolle: "Projektleder, booker, lys og lyd på Odense Havnekulturfestival og Undergrundsby-festivalen",
    kategori: ["event"], status: "tidligere"
  },
  {
    kunde: "Love Electron: Humachine", aar: "[ÅR]",
    rolle: "Kreativ leder og underviser på interaktiv udstilling om mennesker og maskiner",
    kategori: ["undervisning"], status: "tidligere"
  },
  {
    kunde: "Erhvervsakademiet Lillebælt (EAL), Multimediedesign", aar: "2013–2015",
    rolle: "Underviser, konsulent og projektleder, bl.a. interaktive visuals med Odense Havnefestival",
    kategori: ["undervisning"], status: "tidligere"
  },
];

/*
  ENGELSK – oversættelser til den engelske version, slået op på "kunde".
  Felter der mangler her, vises på dansk. udvalgt: samme rækkefølge som den danske liste.
*/
const ENGELSK = {
  "DYNAMO": {
    titel: "Workshop for circus and performance art",
    rolle: "Venue and lighting design, production, technician and operator",
    tekst: "Venue and lighting design, production, tech and show operation at DYNAMO, Odense's workshop for circus and performance art. DYNAMO received the Funen Culture Prize (Den Fynske Kulturpris) in 2019."
  },
  "Odeology": {
    titel: "Where experimental music meets performance art",
    rolle: "Co-founded the association in 2018 and have always run production. Now chairman",
    tekst: "A space for electronic music and art in Odense, a safe place where experimental music meets performance art. I helped start Odeology in 2018 and have run production from day one: venue and lighting design, tech and show operation. Today I am also chairman of the association."
  },
  "Odense Teater": {
    titel: "[Production, season]", rolle: "Lighting technician",
    tekst: "Lighting for theatre productions: rigging, focus, setup and running shows. [Add productions.]"
  },
  "Odeon Odense": {
    titel: "[Event]", rolle: "Lighting technician, concerts and events",
    tekst: "Lighting for concerts and events at Odeon. [Add examples.]"
  },
  "SiteCover": {
    titel: "The whole construction site under one roof", rolle: "Rigger in harness",
    tekst: "SiteCover builds movable covers that put the entire construction site under a roof: steel structure and fabric with built-in cranes, so building work can continue in any weather. I work as a rigger in a harness on assembly and dismantling, high up on the steel and fabric."
  },
  "ETP": {
    titel: "Festival stages at height", rolle: "Rigging and construction of stages",
    tekst: "ETP (European Tour Production) rents out stages, grandstands and technical equipment to the events industry and has worked on projects in Denmark and abroad since 1994. I handle rigging and construction of their stages at festivals, including Orange Scene at Roskilde Festival, Musik i Lejet and Wonderfestiwall on Bornholm."
  },
  "RT9 Scandinavian Rope Access": {
    titel: "Rope access technician", rolle: "Rope access technician",
    tekst: "IRATA-certified industrial rope access technician with RT9 since September 2024. [Typical tasks.]"
  },
  "Ignition House": {
    rolle: "Owner",
    tekst: "My one-person company, which I take on work through. Project-based work in entertainment and experience technology: live shows, lighting, VJ, installations and project management. Including Uendelige Passager and Fællestival Pyramiden."
  },
  "Coworking Plus Odense": {
    aar: "From 2014",
    rolle: "Initiator, co-founder and co-owner. Later sold my share",
    tekst: "Coworking space in central Odense with over 5,100 m² and 450+ workstations for startups, freelancers and growth companies. I took the initiative for the place and helped build it up, with a focus on design, construction, community, networking and events."
  },
  "Kulturklyngen": {
    rolle: "Initiator and chairman",
    tekst: "An initiative for cultural neighbourhoods in Odense. It brought the city's cultural creators together through political debates, workshops and events."
  },
  "WHITEvoid": {
    rolle: "Kinetic lighting: technician, operator and service on installations and tours in Europe, the US and Asia",
    udvalgt: [
      ["London", "Construction, technician and service"],
      ["12 cities from Dublin to Lisbon", "Technician and operator", "Bon Iver, European tour"],
      ["Las Vegas", "Construction, technician, training and service. The largest permanent kinetic installation in the US, Muse Award 2020 (platinum)"],
      ["Amsterdam", "Technician and operator"],
      ["Sweden", "Programmer, operator and service"],
      ["11 cities from Portland to Toronto", "Technician and operator", "Bon Iver, US and Canada tour"],
      ["China tour", "Technician", "2047 Apologue, dir. Zhang Yimou"],
      ["Shanghai", "Setup and operator"],
      ["Frankfurt", "Production and setup"],
      ["San Francisco", "Technician and operator"],
      ["São Paulo", "Kinetic show production", "Luan Santana, Acoustic DVD show"],
      ["Friedrichshafen", "Technician, programmer and service"],
      ["New York", "Technician"]
    ]
  },
  "PHONO Festival": {
    titel: "Audiovisual electronic music",
    rolle: "Venue and lighting design, production, technician and operator",
    tekst: "Volunteer-run festival in Odense for experimental electronic music and light installations. Venues ranged from the old slaughterhouse on Rugårdsvej via Arkaden and FAF on Byens Ø to ULYS on Siloøen. Artists included Tony Allen, Holly Herndon, Robert Hood, Felix Kubin and Birdy Nam Nam. Funen Culture Prize 2012."
  },
  "Odense Internationale Musikteater": {
    kunde: "Odense International Music Theatre",
    rolle: "Construction, set design, projection mapping, operator and performer in Me We / Urban United"
  },
  "Bagjul": { rolle: "Stage technician: build, lighting design, programming, projection mapping and show operation" },
  "Teater Momentum": { rolle: "Stage technician" },
  "Urban Art Project (UAP)": { rolle: "Project manager, booker, lighting and sound for Odense Havnekulturfestival and the Undergrundsby festival" },
  "Love Electron: Humachine": { rolle: "Creative lead and teacher on an interactive exhibition about humans and machines" },
  "Erhvervsakademiet Lillebælt (EAL), Multimediedesign": {
    kunde: "Business Academy Lillebaelt (EAL), Multimedia Design",
    rolle: "Teacher, consultant and project manager, including interactive visuals with Odense Harbour Festival"
  }
};

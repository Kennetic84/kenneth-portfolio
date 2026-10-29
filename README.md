# Kenneth Danielsen – portfolio

Statisk side (HTML + CSS, ingen build). Åbn `index.html` i en browser.

## Billeder
- Læg billeder i `img/` (JPG/WebP, ca. 2000 px bred, under 400 KB).
- Erstat `<div class="ph" data-label="...">` med `<img class="media" src="img/navn.jpg" alt="...">` inde i samme element, eller byt div'en ud direkte.
- `img/og.jpg` (1200×630) bruges når linket deles på Facebook/LinkedIn.

## Pladsholdere der skal udfyldes
Søg efter `[` i `index.html`: projektnavne, år, mail, telefon, SoMe-links, certificering.

## Hosting (gratis)
GitHub Pages: push til et repo, Settings → Pages → branch `main`, mappe `/`.
Eget domæne (fx kennethdanielsen.dk) kan peges på bagefter.

## Adgangskode (midlertidig)
Siden er låst med en simpel kode, mens den er i test (ikke rigtig sikkerhed, men holder almindelige besøgende ude).
Fjern låsen: slet blokken markeret "ADGANGSKODE" i `<head>` og `<div id="laas">…</div>` + scriptet lige under i `index.html`, samt linjen `<meta name="robots" content="noindex, nofollow">`.

## Billeder
- `img/` indeholder de store billeder (max 1800 px). `img/thumb/` indeholder små udgaver (480 px) til galleriernes miniaturer.
- Nye billeder: læg dem i `img/` og lav en lille kopi i `img/thumb/` med samme navn.
- Tekst i [kantede parenteser] i projekter.js vises ikke på siden, så pladsholdere kan stå, til de bliver udfyldt.

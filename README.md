# EventPlanner

Aplicație web pentru descoperirea, organizarea și gestionarea evenimentelor (conferințe, workshopuri, concerte, evenimente sportive, nunți, networking).
Proiect realizat pentru disciplina PMM – Master TM.

## Problema rezolvată
Informațiile despre evenimente sunt împrăștiate pe rețele sociale și site-uri diferite, iar organizatorii mici gestionează înscrierile în Excel. EventPlanner adună evenimentele într-un singur loc, permite înscrierea online și oferă organizatorilor un panou cu participanți și statistici.

## Utilizatori
- **Vizitator** – vede evenimentele, caută și filtrează.
- **Utilizator înregistrat** – se înscrie la evenimente, lasă recenzii, poate organiza evenimente.
- **Administrator** – gestionează utilizatori, categorii și moderează evenimentele.

## Pagini
| Pagină | Fișier | Stadiu |
|---|---|---|
| Acasă | `index.html` | implementată |
| Evenimente (catalog) | `evenimente.html` | schelet |
| Detalii eveniment | `eveniment.html` | schelet |
| Organizează eveniment | `organizeaza.html` | schelet |
| Panoul meu / administrare | `dashboard.html` | schelet |
| Autentificare / înregistrare | `cont.html` | schelet |

## Tehnologii
- HTML5, CSS3 (`css/style.css`), JavaScript (`js/main.js`)
- Bootstrap 5.3 + Bootstrap Icons (CDN)
- Fonturi Google: Poppins, Inter
- Etapele următoare: backend + bază de date (MySQL)

## Rulare
1. Clonează repository-ul: `git clone <link-repository>`
2. Deschide `index.html` în browser (sau folosește extensia Live Server din VS Code).

Nu este necesară nicio instalare – Bootstrap și fonturile se încarcă din CDN.

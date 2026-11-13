# Overzicht en structuur van website🐟

Hallo WebCie-strijder! Dit document helpt je om de juiste plekken te vinden om de standaard wijzigingen voor de website aan te brengen. Heb je de website nog niet lokaal op je computer draaiend, begin dan bij de [installatie](Installatie.md).

## Inhoudsopgave

1. [De projectstructuur](#projectstructuur)
2. [Bestuur wijzigen](#bestuur-wijzigen)
3. [Nieuws aanpassen](#nieuws-aanpassen)
4. [Pagina's aanpassen](#paginas-aanpassen)
5. [Klaar? Zo komt je wijziging online](#klaar-zo-komt-je-wijziging-online)

## Projectstructuur

```
src/views/                    # Alle pagina's, gestructureerd zoals in het website-menu
├── StartPagina.vue           # Homepage
├── NieuwsPagina.vue          # Nieuwsoverzicht
├── LidWordenPagina.vue       # Lid worden
├── vereniging/               # "Vereniging" dropdown
│   ├── BestuursInfo.vue      # Bestuurspagina
│   ├── VisiePagina.vue
│   ├── GeschiedenisPagina.vue
│   └── ...
├── activiteiten/             # "Activiteiten" dropdown
│   ├── AgendaPagina.vue
│   ├── GeloofPagina.vue
│   └── ...
└── over/                     # "Over" dropdown
    ├── ContactPagina.vue
    ├── PrivacyPagina.vue
    └── ...

src/assets/
├── images/bestuur/           # Bestuursfoto's (bestuur-person-1.jpg t/m bestuur-person-6.jpg)
└── nieuwsItems.json          # Alle nieuwsberichten
```

> [!TIP]
> **Websitestructuur = mapstructuur**
>
> De mapstructuur volgt de website-navigatie! Als je "Vereniging" ziet in het menu met een dropdown, vind je die pagina's in de map `vereniging/`.

---

## Bestuur wijzigen

### 1. Bestuursfoto's vervangen

**Locatie:** [`src/assets/images/bestuur/`](../src/assets/images/bestuur/)

Daar vind je 6 foto's:
- `bestuur-person-1.jpg` (Praeses)
- `bestuur-person-2.jpg` (Ab Actis)
- `bestuur-person-3.jpg` (Fiscus)
- `bestuur-person-4.jpg` (Assessor Intern)
- `bestuur-person-5.jpg` (Assessor Extern)
- `bestuur-person-6.jpg` (Herus)

**Zo vervang je een foto:**
1. Geef de nieuwe foto precies dezelfde naam als de oude, bijvoorbeeld `bestuur-person-1.jpg`.
2. Verwijder de oude foto en zet de nieuwe in dezelfde map.
3. Controleer met de testserver (`npm run dev`) of de nieuwe foto verschijnt.

> [!IMPORTANT]
> - De naam moet **exact** kloppen, ook de extensie: `.jpg` in kleine letters. `.JPG`, `.jpeg` of een hernoemde `.png` werkt niet (of alleen op jouw computer en niet op de server).
> - Zorg dat foto's dezelfde verhoudingen hebben (liefst vierkant), anders ziet het er raar uit op de website.

### 2. Bestuursinformatie aanpassen

**Locatie:** [`src/views/vereniging/BestuursInfo.vue`](../src/views/vereniging/BestuursInfo.vue)

Hier vind je voor elk bestuurslid:

```vue
<BestuursPersoon
  imageNumber="1"
  name="Naam van het bestuurslid"
  function="Functie (bijv. Praeses)"
  email="email@ichthusutrecht.nl"
>
  <p>Persoonlijke tekst van het bestuurslid...</p>
  <p>Meer persoonlijke tekst...</p>
</BestuursPersoon>
```

**Altijd aanpassen bij een nieuw bestuur:**
- **name:** voornaam en achternaam van het bestuurslid
- **De paragrafen** (`<p>...</p>`): persoonlijke presentatie van het bestuurslid

**Blijft meestal hetzelfde:**
- **function:** de functie (Praeses, Ab Actis, Fiscus, Assessor Intern, Assessor Extern, Herus)
- **email:** dit zijn functie-adressen, die veranderen niet per bestuur

**Niet aanpassen:**
- **imageNumber:** dit koppelt het bestuurslid aan de juiste foto

**Voorbeeld van aanpassingen:**
```vue
<!-- VOOR -->
<BestuursPersoon
  imageNumber="1"
  name="Oude Praeses"
  function="Praeses"
  email="praeses@ichthusutrecht.nl"
>
  <p>Hoihoi, ik ben ...</p>
</BestuursPersoon>

<!-- NA -->
<BestuursPersoon
  imageNumber="1"
  name="Nieuwe Praeses"
  function="Praeses"
  email="praeses@ichthusutrecht.nl"
>
  <p>Hallootjes, ik ben ...</p>
</BestuursPersoon>
```

> [!IMPORTANT]
> **Contactpersonen op meerdere pagina's**
>
> Sommige contactpersonen staan op **meerdere pagina's** en moeten daarom overal bijgewerkt worden!
>
> **Ab Actis** - Check deze pagina's:
> - [`src/views/vereniging/BestuursInfo.vue`](../src/views/vereniging/BestuursInfo.vue) - bestuurspagina
> - [`src/components/interactief/FooterBalk.vue`](../src/components/interactief/FooterBalk.vue) - footer
> - [`src/views/over/ContactPagina.vue`](../src/views/over/ContactPagina.vue) - contactpagina
> - [`src/views/over/PrivacyPagina.vue`](../src/views/over/PrivacyPagina.vue) - privacypagina
>
> **Herus** - Check deze pagina's:
> - [`src/views/vereniging/BestuursInfo.vue`](../src/views/vereniging/BestuursInfo.vue) - bestuurspagina
> - [`src/views/over/AdverterenPagina.vue`](../src/views/over/AdverterenPagina.vue) - adverteerpagina
> - [`src/views/over/ContactPagina.vue`](../src/views/over/ContactPagina.vue) - contactpagina

> [!TIP]
> Gebruik <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd> in VS Code om in alle bestanden tegelijk te zoeken, bijvoorbeeld op de naam van het oude bestuurslid.

---

## Nieuws aanpassen

Alle maandelijkse nieuwsberichten staan in één JSON-bestand.

**Locatie:** [`src/assets/nieuwsItems.json`](../src/assets/nieuwsItems.json)

### Bestandsstructuur

```json
{
  "items": [
    {
      "titel": "Titel van het nieuwsbericht",
      "inhoud": "De volledige tekst van het nieuwsbericht..."
    },
    {
      "titel": "Volgende titel",
      "inhoud": "Volgende tekst..."
    }
  ]
}
```

Elk bericht is een blok tussen `{` en `}`. Tussen twee berichten staat een komma.

### Nieuwsbericht toevoegen

**Het nieuwste bericht staat onderaan het bestand.** De website draait de volgorde zelf om, zodat bezoekers het nieuwste bericht eerst zien. Zet je nieuwe bericht dus achter het laatste bericht, met een komma tussen die twee.

Stel dat het bestand er zo uitziet:

```json
{
  "items": [
    {
      "titel": "Augustus 2026",
      "inhoud": "Dit was het nieuwste bericht..."
    }
  ]
}
```

Dan wordt het met een nieuw bericht voor september:

```json
{
  "items": [
    {
      "titel": "Augustus 2026",
      "inhoud": "Dit was het nieuwste bericht..."
    },
    {
      "titel": "September 2026",
      "inhoud": "Dit is het nieuwe bericht. Het staat onderaan..."
    }
  ]
}
```

> [!WARNING]
> Komma's staan alleen **tussen** berichten. Na het **laatste** bericht staat géén komma. Een komma te veel of te weinig breekt het hele nieuwsbestand. VS Code zet een rode kronkellijn onder zo'n fout, en de testserver geeft een foutmelding.

### Tips voor het schrijven

- **Titel:** meestal "Maand Jaar" (bijv. "November 2026")
- **Inhoud:**
  - Lange berichten worden automatisch ingekort met een "Lees meer"-link
  - Gebruik `\n` voor een nieuwe regel
  - Wil je aanhalingstekens in je tekst gebruiken? Schrijf dan `\"` in plaats van `"`, anders breekt de JSON

---

## Pagina's aanpassen

Alle pagina's staan in [`src/views/`](../src/views/) en zijn georganiseerd precies zoals het website-menu:

- **[`src/views/StartPagina.vue`](../src/views/StartPagina.vue)** → Homepage
- **[`src/views/NieuwsPagina.vue`](../src/views/NieuwsPagina.vue)** → Nieuwsoverzicht
- **[`src/views/LidWordenPagina.vue`](../src/views/LidWordenPagina.vue)** → Lid worden
- **[`src/views/vereniging/`](../src/views/vereniging/)** → "Vereniging"-menu
- **[`src/views/activiteiten/`](../src/views/activiteiten/)** → "Activiteiten"-menu
- **[`src/views/over/`](../src/views/over/)** → "Over"-menu

Je bewerkt gewoon de tekst in het bestand dat je wil wijzigen. De tekst staat in het `<template>`-gedeelte:

```vue
<template>
  <h1>Titel</h1>
  <p>Tekst hier...</p>
</template>
```

> [!IMPORTANT]
> **Ken uw grenzen**
>
> Pas alleen de tekst tussen de tags aan. Veel bestanden hebben ook een `<script>`- en `<style>`-gedeelte; laat die met rust, tenzij je weet wat je doet.

---

## Klaar? Zo komt je wijziging online

1. Controleer je wijziging met de testserver (`npm run dev`).
2. Commit en push je branch en maak een pull request. Hoe dat werkt, staat bij [Werken met branches](Installatie.md#werken-met-branches-stap-voor-stap).
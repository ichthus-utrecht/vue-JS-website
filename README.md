# Ichthus Utrecht Vue JS website🐟

Dit is de repository van de statische website van Ichthus Utrecht. Aan deze website wordt sinds januari 2024 gewerkt. We gebruiken het framework [Vue JS](https://vuejs.org/): dat is simpel te leren en biedt tegelijk genoeg flexibiliteit om complexere features voor de website te programmeren.

## Documentatie

> [!TIP]
> **Nieuw in de WebCie? Begin hier⤵︎**
>
> - **[Installatie](docs/Installatie.md)**: de website op je eigen computer zetten, Git en GitHub instellen en werken met branches en pull requests.
> - **[Website aanpassen](docs/WebsiteAanpassen.md)**: waar je wat vindt, en hoe je de meest voorkomende aanpassingen doet (bestuur, nieuws, pagina's).

Voor Vue zelf, zie de [officiële documentatie van Vue](https://vuejs.org/guide/introduction.html).

## Snel starten

Heb je alles al geïnstalleerd (zie [Installatie](docs/Installatie.md))? Dan zijn dit de belangrijkste commando's:

```sh
npm install --include=dev   # afhankelijkheden installeren (eerste keer, en na wijzigingen in package.json)
npm run dev                 # testserver starten met hot-reload
npm run build               # type-check en productieversie bouwen
```

> [!TIP]
> Draai `npm run build` voordat je een pull request maakt. Zo zie je meteen of er TypeScript-fouten in je code zitten.

## Technische achtergrond

### Vite

De website wordt gebouwd met [Vite](https://vitejs.dev/). De instellingen staan in `vite.config.ts`; zie de [Vite Configuration Reference](https://vitejs.dev/config/).

### TypeScript

Dit project gebruikt [TypeScript](https://www.typescriptlang.org/), een laag over JavaScript heen die helpt de codekwaliteit te verbeteren. Je kunt dus nog steeds gewone JavaScript schrijven, maar ook TypeScript-features gebruiken. Klopt je code niet, dan krijg je een foutmelding en kun je niet builden. Een fout onderdrukken kan met `/** @ts-ignore */`, maar doe dat alleen als je zeker weet dat de code klopt.

### Agenda

De agenda gebruikt [FullCalendar](https://fullcalendar.io/docs/google-calendar) in combinatie met Google Calendar. De Google-agenda wordt gevuld met de [publieke agenda van Churchbook](https://ichthusutrecht.churchbook.nl/public/ical_all.cfm).

Die omweg via Google is nodig vanwege CORS: de website op het domein ichthusutrecht.nl mag niet zomaar gegevens ophalen van het domein churchbook.nl.

#### API-keys

> [!NOTE]
> Onderstaande is alleen nodig als je de agenda zelf lokaal wil testen.

Om de Google Calendar API te gebruiken, is een API-key nodig. Volgens de [best practices van Google](https://cloud.google.com/docs/authentication/api-keys-best-practices) hoort die niet in de code te staan. Daarom zijn er twee aparte keys:

- **Production:** werkt alleen op het domein ichthusutrecht.nl. Deze key komt via Vite in de gebouwde website terecht en is daar dus voor iedereen te vinden. Dat is onvermijdelijk, want de browser heeft hem nodig om de agenda op te halen. Door de domeinbeperking kan niemand er elders iets mee.
- **Dev:** voor lokaal gebruik, werkt ook op localhost. Deze key werkt op **elk** domein en moet daarom zorgvuldig behandeld worden. **Zet hem nooit in de code of in een commit.**

Beide keys staan in LastPass en in de [Google Cloud Console](https://console.cloud.google.com).

### Omgevingsvariabelen (`.env`)

Geheimen en andere instellingen, zoals de dev-key voor de agenda, staan in omgevingsvariabelen. Om lokaal te werken:

1. Kopieer `.env.local-example` en noem de kopie `.env.local`.
2. Vul de waarden in.

`.env.local` wordt door Git genegeerd, dus je geheimen komen niet op GitHub.
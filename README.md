# Ichthus Utrecht Vue JS website
Dit is de repository voor de statische website van Ichthus Utrecht, het ontwikkelen waarvan gestart is in januari 2024. Voor het ontwikkelen van deze website maken we gebruik van Vue JS. Er is gekozen voor deze taal, omdat deze simpel te leren is en tegelijkertijd nog veel flexibiliteit biedt om complexere features te programmeren voor de website.

Voor de documentatie van Vue verwijzen we u naar hun website: https://vuejs.org/

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

Soms moet je ook de dev dependencies installeren. Dit kan op de volgende manier:
```sh
npm install --include=dev
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## TypeScript
Dit project maakt gebruik van [TypeScript](https://www.typescriptlang.org/). Daarmee kun je de codekwaliteit verbeteren. Als je code niet klopt krijg je een error en kun je niet builden. Je kunt een error onderdrukken met `/** @ts-ignore */`. TypeScript is een laag over JavaScript heen. Je kunt dus nog steeds gewoon JavaScript code schrijven, maar als je wilt wel gebruik maken van TypeScript features.

## Nieuws
Op de voorpagina is een overzicht van nieuws. Om hier items toe te voegen, moet je in /src/assets/nieuwsItems.json een item toe voegen aan het einde van de array. Dit heeft de volgende structuur:
```json
{
    "titel": "Hier staat de titel",
    "inhoud": "Hier staat de inhoud"
}
```

Je kunt een tekst op een nieuwe regel beginnen door '\n' toe te voegen op de plek waar je dat wilt.

## Agenda
Voor de agenda is gebruikt gemaakt van FullCalender icm Google Calendar. Zie hiervoor de [documentatie van FullCalendar](https://fullcalendar.io/docs/google-calendar). De google agenda wordt gevuld met data uit publieke agenda van churchbook (https://ichthusutrecht.churchbook.nl/public/ical_all.cfm). Dit is nodig omdat dit problemen opleverde met CORS: Je kunt vanaf het ichthusutrecht.nl domein niet zomaar dingen ophalen van het churchbook.nl domein. 

Om gebruik te maken van de Google Calendar API in de frontend moet je een API key hebben. Volgens de [best practices](https://cloud.google.com/docs/authentication/api-keys-best-practices) van Google hierover, moet je deze niet in je code opslaan. Om te veiligheid te vergroten, zijn er twee aparte keys: één voor lokaal gebruik (dev) en één op de Ichthus website (production). De API key voor op de website kan alleen op het ichthusutrecht.nl domein gebruikt worden. Deze key in de bundle terecht die gemaakt wordt door Vite: je kunt de key dan ook achterhalen. Dat moet ook, want die heb je ook nodig om de agenda op de halen. Door de beperking kun je die key niet lokaal gebruiken. Daarvoor is de key voor lokaal gebruik, die je ook gewoon op localhost kunt gebruiken. De dev sleutel kan dus echter op elk domein gebruikt worden, en moet daarom zorgvuldig behandeld worden. Beide keys staan in LastPass en in de [google cloud console](console.cloud.google.com).

## .env
In het .env bestand kun je geheimen zetten of andere variabelen. Om dit lokaal te gebruiken, moet je het `.env.local-example` kopiëren en hernoemen naar `.env.local`. Nu kun je de waarden invullen en wordt het genegeerd door Git.

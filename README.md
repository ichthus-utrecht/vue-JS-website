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

Je kunt een tekst op een nieuwe regel beginnen door '/n' toe te voegen op de plek waar je dat wilt.

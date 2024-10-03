# Ichthus Utrecht Vue JS website
Dit is de repository voor de statische website van Ichthus Utrecht, het ontwikkelen waarvan gestart is in januari 2024. Voor het ontwikkelen van deze website maken we gebruik van Vue JS. Er is gekozen voor deze taal, omdat deze simpel te leren is en tegelijkertijd nog veel flexibiliteit biedt om complexere features te programmeren voor de website.

Voor de documentatie van Vue verwijzen we u naar hun website: https://vuejs.org/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Nieuws
Op de voorpagina is een overzicht van nieuws. Om hier items toe te voegen, moet je in /src/assets/nieuwsItems.json een item toe voegen aan het einde van de array. Dit heeft de volgende structuur:
```json
{
    "titel": "Hier staat de titel",
    "inhoud": "Hier staat de inhoud"
}
```

Je kunt een tekst op een nieuwe regel beginnen door '\n' toe te voegen op de plek waar je dat wilt.

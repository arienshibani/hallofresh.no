# [hallofresh.no](hallofresh.no) 🥛

For oss som elsker matkasser 😍 men **hater prisen!** 🤬

![image (2)](https://github.com/user-attachments/assets/b7c2e95b-0f8a-4964-9d49-9773c2659c85)


## Features
* Hallo-fresh gir deg oppskrifter og handlelister til ukemenyer 📆 som **smaker mye og koster lite** 💰
* Del handlelister for individuelle oppskrifter eller **hele ukemenyer** 
  * Hvorfor betale store summer for matkasser når man kan bestille rett fra daglivarens nettbutikk?
  * Juster enkelt for antall personer 👨‍👩‍👧 og handlelisten oppdateres automagisk
* Sammenlign prisen 📊 på din favoritt meny hos ulike daglivare butikker 🔜 **kommer snart!**
* Bestill 🧑‍💻 alt du trenger for mat for resten av uken ved 1 tastetrykk! 🔜 **kommer snart!** 

## Open Source 🪄
Kildekoden er åpen. Pull-requests er bare gøy. Tech stack:

* Svelte-kit / JS / Vercel / MongoDB

### Bidra med oppskrifter

Send inn oppskrifter på følgende format:

```js
{
  "title": "Kremet Spaghetti 🍝", // Tittel på oppskriften
  "subtitle": "med sjampinjong og soltørkede tomater", // Undertekst
  "prepTime": 20, // Hvor mange minutter tar det å lage retten?
  "portions": 1, // Hvor mange prosjoner vil ingrediens listen produsere?
  "steps": [ // Stegene som skal til for å lage maten.
    "Kutt opp sjampinjong 🍄 og finhakk hvitløksfedd 🧄",
    "Kok spagettien 🌾 i en stor kjele.",
    "Stek hvitløken 🧄, soltørkede tomater 🍅 og sjampinjong 🍄 i en stekepanne i cirka 10 minutter på medium-høy varme.",
    "Når sjampinjongen 🍄 begynner å bli blank og har krympet i størrelse kan du tilsette basilikum 🌿 og salt / pepper 🧂. La det surre litt på svak varme.",
    "Tilsett matfløte 🥛 og vann 💧 i pannen og kok opp mens du rører rundt. Tilsett cirka 1 håndfull spinat 🥬 og la det synke sammen i sausen.",
    "Når spaghettien 🌾 er ferdigkokt, heller du av vannet og tilsetter sausen. Server gjerne med maldonsalt og/eller parmesan ost hvis du har det."
  ],
  // Liste over ingredienser. 
  "recipeIngredients": [
    {
      "name": "Spagetti 🌾", 
      "amount": 100,
      "measurement": "g"
    },
    {
      "name": "Spinat 🥬",
      "amount": 100,
      "measurement": "g"
    },
    {
      "name": "Soltørkede Tomater 🍅",
      "amount": 60,
      "measurement": "g"
    },
    {
      "name": "Sjampinjong 🍄",
      "amount": 60,
      "measurement": "g"
    },
    {
      "name": "Matfløte 🥛",
      "amount": 0.5,
      "measurement": "dl"
    },
    {
      "name": "Vann 💧",
      "amount": 0.25,
      "measurement": "dl",
      "isBulkItem": true
    },
    {
      "name": "Tørket Basilikum 🌿",
      "amount": 1,
      "measurement": "ss",
      "isBulkItem": true
    },
    {
      "name": "Hvitløksfedd 🧄",
      "amount": 1,
      "measurement": "stk"
    }
  ],
  "recipeId": "123123",
}
```


# Animechan.js
 Animechan.js utilizes the animechan API to return quotes

# Installation
```bash
npm i animechan.js
```

# Usage
```javascript
const {Random, Get10RandomQuotes, GetQuotesByAnimeTitle, GetQuotesByCharacterName, GetAvailableAnimeTitles} = require("animechan.js");
Random().then(console.log);
Get10RandomQuotes().then(console.log);
GetQuotesByAnimeTitle("naruto", 1).then(console.log);
GetQuotesByCharacterName("saitama", 1).then(console.log);
GetAvailableAnimeTitles().then(console.log);
```
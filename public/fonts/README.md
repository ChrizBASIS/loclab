# Font Files — Local Hosting (DSGVO/GDPR)

Platziere hier die lizenzierten Font-Dateien:

## Benötigte Dateien

### Canela (Headlines)
- `CanelaText-Light.woff2` (weight 300)
- `CanelaText-Regular.woff2` (weight 400)

### Maison Neue (Body)
- `MaisonNeue-Book.woff2` (weight 400)
- `MaisonNeue-Medium.woff2` (weight 500)

## Warum lokal?

1. **DSGVO:** Laden von Drittanbieter-CDNs (fonts.cdnfonts.com) überträgt IP-Adressen ohne Einwilligung
2. **Lizenz:** Die CDN-Version verwendet "Trial"-Fonts mit eingeschränkter Lizenz
3. **Performance:** Lokale Fonts laden schneller (kein DNS-Lookup, keine CORS-Anfragen)

## Fallback

Solange keine lokalen Font-Dateien vorhanden sind, verwendet die Website
automatisch Google Fonts als Fallback:
- **Instrument Serif** statt Canela
- **Inter** statt Maison Neue
- **Space Mono** für Monospace

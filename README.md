# NEO-3809940TAA

Strona firmowa 3809940TAA Software Studio na GitHub Pages.

## Rozwój lokalny

1. Zainstaluj zależności:
```bash
npm install
```

2. Uruchom serwer deweloperski na porcie 9090:
```bash
npm start
```

Strona będzie dostępna pod adresem: http://localhost:9090

## Deployment na GitHub Pages

Aby wdrożyć stronę na GitHub Pages, użyj:

```bash
npm run deploy
```

To automatycznie:
- Utworzy branch `gh-pages` w repozytorium
- Wgra pliki na GitHub Pages
- Strona będzie dostępna pod adresem: `https://[twoja-nazwa-uzytkownika].github.io/NEO-3809940TAA/`

**Uwaga:** Upewnij się, że w ustawieniach repozytorium GitHub (Settings → Pages) źródłem jest branch `gh-pages`.

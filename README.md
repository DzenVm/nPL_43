# Serwis informacyjny — przeglądarkowa gra strategiczna (PL)

SSR-owy serwis na Next.js 16 (App Router), przygotowany pod kampanię Google Ads
w geo Polska, jednojęzyczny (PL). Opisuje jednoosobową przeglądarkową grę
strategiczną — bez marki, bez logotypu, bez nazwy własnej produktu (zgodnie z
założeniami projektu).

## Stos technologiczny

- **Next.js 16**, App Router, React 19, TypeScript, w większości React Server
  Components — interaktywność FAQ oparta o natywny `<details>/<summary>`, bez
  dodatkowego JS po stronie klienta.
- **CSS Modules + design-tokeny** (custom properties, płynna typografia przez
  `clamp()`, `@container` do responsywnych kart mechanik) — bez Tailwinda i
  bez CSS-in-JS w runtime.
- **next/font/google**: Fraunces (nagłówki) + Public Sans (tekst).
- **Prawdziwe SSR**: strona główna wymusza dynamiczne renderowanie przez
  `connection()` z `next/server` i licząc po stronie serwera bieżącą „porę
  roku" rozgrywki na podstawie daty żądania (`src/lib/season.ts`) — to nie
  jest strona statyczna udająca dynamiczną.
- **sharp** — rekomendowany przez Vercel/Next do optymalizacji obrazów w
  produkcji.
- 6 oryginalnych ilustracji wektorowych (`public/illustrations/*.svg`) i
  unikalna favicona (`src/app/icon.svg`) zaprojektowane od podstaw pod ten
  projekt.

## Struktura treści

- `/` — strona główna, mocno rozbudowana: hero z dynamicznym stanem sezonu,
  opis założeń, cztery karty mechanik, sekcja „czego świadomie tu nie ma",
  przykładowy przebieg pierwszego sezonu, dopasowanie do odbiorcy, wymagania,
  notatki z rozwoju, FAQ.
- `/polityka-prywatnosci`, `/regulamin`, `/kontakt` — strony wymagane pod
  kątem zgodności z polityką Google Ads (przejrzystość, dane kontaktowe,
  zasady korzystania).
- `src/content/` — cała treść tekstowa wydzielona z komponentów.
- `src/content/site.ts` — **jedyne miejsce** z adresem domeny (patrz niżej).

## Domena — do podmiany

Docelowa domena nie jest jeszcze znana. Cały serwis odwołuje się do niej przez
jedną zmienną środowiskową:

```
NEXT_PUBLIC_SITE_DOMAIN=przyklad-docelowa-domena.pl
```

Dopóki zmienna nie zostanie ustawiona, używana jest wartość zastępcza
`twoja-domena.pl` (metadane, `sitemap.xml`, adres kontaktowy, dane
strukturalne). Wystarczy ustawić zmienną w panelu Vercel (Project Settings →
Environment Variables) i zrobić redeploy — nic w kodzie nie wymaga zmian.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Serwis wystartuje pod `http://localhost:3000`.

## Build produkcyjny

```bash
npm run build
npm run start
```

## Regeneracja ikon

Favicona źródłowa to `src/app/icon.svg`. Warianty PNG (`public/icon-192.png`,
`public/icon-512.png`, `src/app/apple-icon.png`) generowane są skryptem:

```bash
npm run generate:icons
```

## Deploy na Vercel

Projekt jest gotowy do wdrożenia bez dodatkowej konfiguracji — Vercel
automatycznie rozpozna Next.js.

1. Połącz repozytorium z projektem na Vercel (Import Project → wskaż to
   repozytorium i gałąź).
2. W Environment Variables ustaw `NEXT_PUBLIC_SITE_DOMAIN` na docelową
   domenę, gdy tylko będzie znana (na start można zostawić puste — serwis
   zadziała z wartością zastępczą).
3. Po podłączeniu domeny w zakładce Domains projektu Vercel, zaktualizuj
   zmienną `NEXT_PUBLIC_SITE_DOMAIN` i zrób redeploy, aby metadane,
   `sitemap.xml` i dane strukturalne wskazywały właściwy adres.
4. Build command: `next build` (domyślny, wykryty automatycznie).
   Node.js ≥ 20.9 (patrz `engines` w `package.json`).

Zmienne środowiskowe nie zawierają żadnych sekretów — cały projekt jest
statyczny/SSR bez własnego backendu i bazy danych.

## Uwagi pod kątem polityki Google Ads

- Brak elementów losowych opartych na zakładach czy grach losowych — treść
  serwisu i regulamin opisują wyłącznie deterministyczną mechanikę logistyczną.
- Jasno opisany charakter serwisu (informacyjny, dotyczący projektu w
  rozwoju), dostępna polityka prywatności, regulamin i dane kontaktowe.
- Brak elementów sugerujących automatyczne/szablonowe wygenerowanie treści —
  opisy pisane indywidualnie, z konkretnymi, niepowtarzalnymi detalami.
- Wszystkie odnośniki CTA na stronie głównej prowadzą do istniejących sekcji
  tej samej strony lub do `/kontakt` — brak martwych linków i brak obietnic
  funkcji, które nie istnieją w serwisie.

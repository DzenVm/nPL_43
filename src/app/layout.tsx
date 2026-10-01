import type { Metadata, Viewport } from "next";
import { Fraunces, Public_Sans } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import { SITE_URL, SITE_LOCALE, SITE_DOMAIN } from "@/content/site";

const fraunces = Fraunces({
  subsets: ["latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const publicSans = Public_Sans({
  subsets: ["latin-ext"],
  variable: "--font-public-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Posterunek — spokojna strategia na skraju mapy",
    template: "%s",
  },
  description:
    "Prowadzisz samotny posterunek handlowy na skraju mapy: zapasy, zwiad i korespondencja z sąsiadami rozłożone na cztery pory roku. Gra przeglądarkowa, jeden gracz, bez instalacji.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE_LOCALE,
    url: SITE_URL,
    title: "Posterunek — spokojna strategia na skraju mapy",
    description:
      "Prowadź posterunek na skraju mapy, planuj zapasy i odkrywaj trakt w spokojnej, jednoosobowej strategii.",
    siteName: "Posterunek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Posterunek — spokojna strategia na skraju mapy",
    description:
      "Prowadź posterunek na skraju mapy, planuj zapasy i odkrywaj trakt.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3ecdd" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1712" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${fraunces.variable} ${publicSans.variable}`}>
      <body>
        <a href="#tresc" className="skip-link">
          Przejdź do treści głównej
        </a>
        <header className={styles.header}>
          <div className={`container ${styles.headerInner}`}>
            <Link className={styles.brand} href="/" aria-label="Posterunek — strona główna">
              <span className={styles.brandMark} aria-hidden="true">P</span>
              <span>Posterunek</span>
            </Link>
            <nav aria-label="Nawigacja główna" className={styles.nav}>
              <Link href="/#mechanika">Mechanika</Link>
              <Link href="/#notatki">Notatki z rozwoju</Link>
              <Link href="/#pytania">Pytania</Link>
              <Link href="/kontakt">Kontakt</Link>
            </nav>
          </div>
        </header>
        <main id="tresc">{children}</main>
        <footer className={styles.footer}>
          <div className={`container ${styles.footerInner}`}>
            <p className={styles.footerNote}>
              Serwis informacyjny gry przeglądarkowej dla jednego gracza. Treści na tej
              stronie opisują rozgrywkę w obecnym etapie jej rozwoju i mogą się zmieniać
              wraz z kolejnymi wydaniami.
            </p>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
              </li>
              <li>
                <Link href="/regulamin">Regulamin</Link>
              </li>
              <li>
                <Link href="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}

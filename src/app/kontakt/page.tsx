import type { Metadata } from "next";
import styles from "@/styles/legal.module.css";
import { CONTACT_EMAIL, SITE_DOMAIN } from "@/content/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Adres kontaktowy w sprawach związanych z serwisem i opisanym w nim projektem gry.",
  alternates: { canonical: "/kontakt" },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <div className={`container container--narrow ${styles.wrapper}`}>
      <h1 className={styles.title}>Kontakt</h1>

      <div className={styles.body}>
        <p>
          Serwis {SITE_DOMAIN} nie ma jeszcze wdrożonego formularza kontaktowego —
          najpewniejszym sposobem dotarcia jest zwykła wiadomość e-mail:
        </p>
        <p>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>

        <h2>Czego dotyczy ten adres</h2>
        <ul>
          <li>pytań dotyczących mechaniki opisanej na stronie głównej,</li>
          <li>uwag do treści serwisu i zgłoszeń błędów w opisie,</li>
          <li>spraw związanych z polityką prywatności i regulaminem,</li>
          <li>innych wiadomości związanych z projektem.</li>
        </ul>

        <h2>Czas odpowiedzi</h2>
        <p>
          Serwis prowadzony jest w niewielkim zespole, więc odpowiedź może zająć kilka
          dni roboczych — w okresach intensywnych prac nad mechaniką bywa to dłużej.
          Jeśli sprawa jest pilna, warto to zaznaczyć w temacie wiadomości.
        </p>
      </div>
    </div>
  );
}

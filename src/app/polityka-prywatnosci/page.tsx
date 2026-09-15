import type { Metadata } from "next";
import styles from "@/styles/legal.module.css";
import { CONTACT_EMAIL, SITE_DOMAIN } from "@/content/site";
import { privacyLastUpdated } from "@/content/legal";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Informacje o tym, jakie dane są przetwarzane w związku z korzystaniem z serwisu, oraz na jakiej podstawie.",
  alternates: { canonical: "/polityka-prywatnosci" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className={`container container--narrow ${styles.wrapper}`}>
      <p className={styles.updated}>Ostatnia aktualizacja: {privacyLastUpdated}</p>
      <h1 className={styles.title}>Polityka prywatności</h1>

      <div className={styles.body}>
        <h2>Kto odpowiada za serwis</h2>
        <p>
          Serwis dostępny pod adresem {SITE_DOMAIN} ma charakter informacyjny — opisuje
          projekt gry przeglądarkowej na obecnym etapie jego rozwoju. W sprawach
          związanych z przetwarzaniem danych można kontaktować się pod adresem{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Jakie dane są przetwarzane</h2>
        <p>
          Serwis nie wymaga zakładania konta ani podawania danych osobowych, żeby
          zapoznać się z jego treścią. Dane przetwarzane są w dwóch zakresach:
        </p>
        <ul>
          <li>
            dane techniczne zapisywane automatycznie przez infrastrukturę hostingową
            (m.in. adres IP, znacznik czasu żądania, typ przeglądarki) — w zakresie
            niezbędnym do zapewnienia bezpieczeństwa i prawidłowego działania serwisu;
          </li>
          <li>
            dane zapisywane lokalnie w przeglądarce odwiedzającego (pamięć lokalna
            przeglądarki), wykorzystywane wyłącznie do zapamiętania stanu rozgrywki
            opisanej w serwisie — te dane nie są przesyłane na serwer i pozostają na
            urządzeniu użytkownika, chyba że użytkownik sam wyeksportuje plik zapisu.
          </li>
        </ul>

        <h2>Podstawa i cel przetwarzania</h2>
        <p>
          Dane techniczne przetwarzane są na podstawie prawnie uzasadnionego interesu
          administratora, jakim jest zapewnienie bezpiecznego i stabilnego działania
          serwisu (art. 6 ust. 1 lit. f RODO). Dane zapisywane lokalnie w przeglądarce
          nie są przetwarzane przez administratora — pozostają wyłącznie pod kontrolą
          osoby korzystającej z serwisu.
        </p>

        <h2>Formularz kontaktowy i korespondencja e-mail</h2>
        <p>
          Jeśli napiszesz wiadomość na adres kontaktowy podany w serwisie, treść tej
          wiadomości oraz podany przez Ciebie adres e-mail są przetwarzane wyłącznie w
          celu udzielenia odpowiedzi i przez czas niezbędny do zakończenia
          korespondencji, chyba że dalsze przechowywanie wynika z innych przepisów
          prawa.
        </p>

        <h2>Udostępnianie danych</h2>
        <p>
          Dane techniczne mogą być przetwarzane przez podmiot dostarczający hosting i
          infrastrukturę serwera, wyłącznie w zakresie niezbędnym do świadczenia tej
          usługi. Dane nie są sprzedawane ani przekazywane w celach marketingowych
          podmiotom trzecim.
        </p>

        <h2>Pliki cookie i podobne technologie</h2>
        <p>
          Serwis w obecnej wersji nie wykorzystuje plików cookie do celów
          reklamowych ani analitycznych. Jeśli w przyszłości taka funkcjonalność
          zostanie wprowadzona, niniejsza polityka zostanie odpowiednio zaktualizowana
          przed jej uruchomieniem.
        </p>

        <h2>Prawa osoby, której dane dotyczą</h2>
        <p>
          W zakresie, w jakim przetwarzane są dane osobowe, przysługuje prawo dostępu
          do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania,
          przenoszenia oraz wniesienia sprzeciwu wobec przetwarzania — a także prawo
          wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych. Zapytania w tym
          zakresie prosimy kierować na adres kontaktowy wskazany powyżej.
        </p>
      </div>
    </div>
  );
}

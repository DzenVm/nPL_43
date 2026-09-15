import type { Metadata } from "next";
import styles from "@/styles/legal.module.css";
import { CONTACT_EMAIL, SITE_DOMAIN } from "@/content/site";
import { termsLastUpdated } from "@/content/legal";

export const metadata: Metadata = {
  title: "Regulamin serwisu",
  description:
    "Zasady korzystania z serwisu informacyjnego opisującego przeglądarkową grę strategiczną dla jednego gracza.",
  alternates: { canonical: "/regulamin" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className={`container container--narrow ${styles.wrapper}`}>
      <p className={styles.updated}>Ostatnia aktualizacja: {termsLastUpdated}</p>
      <h1 className={styles.title}>Regulamin serwisu</h1>

      <div className={styles.body}>
        <h2>Postanowienia ogólne</h2>
        <p>
          Niniejszy regulamin określa zasady korzystania z serwisu dostępnego pod
          adresem {SITE_DOMAIN}. Serwis ma charakter informacyjny — przedstawia opis
          projektu gry przeglądarkowej dla jednego gracza na obecnym etapie jej
          rozwoju. Korzystanie z serwisu oznacza akceptację poniższych zasad.
        </p>

        <h2>Charakter treści</h2>
        <p>
          Opisy mechaniki, harmonogram prac oraz notatki z rozwoju publikowane w
          serwisie odzwierciedlają stan projektu w chwili publikacji i mogą ulec
          zmianie wraz z postępem prac. Serwis nie gwarantuje konkretnego terminu
          udostępnienia pełnej wersji rozgrywki ani niezmienności opisanych mechanik.
        </p>

        <h2>Dostępność serwisu</h2>
        <p>
          Serwis udostępniany jest w formie, w jakiej istnieje w danym momencie, bez
          gwarancji nieprzerwanej dostępności. Administrator dokłada starań, aby
          treści były aktualne i serwis działał poprawnie, jednak zastrzega sobie
          prawo do czasowego wyłączenia serwisu w celach technicznych, w tym w
          związku z pracami rozwojowymi.
        </p>

        <h2>Zasady korzystania</h2>
        <ul>
          <li>
            Zabronione jest podejmowanie działań mogących zakłócić prawidłowe działanie
            serwisu, w tym prób nieautoryzowanego dostępu do jego infrastruktury.
          </li>
          <li>
            Treści serwisu (teksty i ilustracje) podlegają ochronie i nie mogą być
            kopiowane w całości ani w części w celach komercyjnych bez odrębnej zgody.
          </li>
          <li>
            Zapis stanu rozgrywki opisany w części informacyjnej serwisu przechowywany
            jest lokalnie w przeglądarce użytkownika — administrator nie ponosi
            odpowiedzialności za jego utratę wynikającą z działań po stronie
            użytkownika, np. wyczyszczenia danych przeglądarki.
          </li>
        </ul>

        <h2>Grupa odbiorców</h2>
        <p>
          Treści serwisu mają charakter ogólnodostępny. Opisane w serwisie decyzje w
          ramach rozgrywki mają bezpośredni, przewidywalny związek przyczynowo-
          skutkowy z wcześniejszymi działaniami — zgodnie z opisem mechaniki
          przedstawionym na stronie głównej.
        </p>

        <h2>Odpowiedzialność</h2>
        <p>
          Administrator nie ponosi odpowiedzialności za szkody wynikające z
          niewłaściwego korzystania z serwisu lub z przyczyn niezależnych od
          administratora, w tym awarii łącz telekomunikacyjnych lub sprzętu
          użytkownika.
        </p>

        <h2>Reklamacje i kontakt</h2>
        <p>
          Uwagi dotyczące działania serwisu lub treści w nim zawartych można zgłaszać
          na adres <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Zgłoszenia
          rozpatrywane są w rozsądnym terminie, w miarę możliwości administratora.
        </p>

        <h2>Prawo właściwe</h2>
        <p>
          W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają
          przepisy prawa polskiego.
        </p>
      </div>
    </div>
  );
}

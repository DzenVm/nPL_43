export const hero = {
  kicker: "gra przeglądarkowa dla jednego gracza — bez instalacji",
  title: "Placówka na skraju mapy, którą prowadzisz sam",
  lede:
    "To nie jest gra o podboju. Dostajesz jeden posterunek handlowy, garść zapasów po poprzedniku i mapę, która kończy się dokładnie tam, gdzie zaczyna się biała plama. Reszta — trasy, zapasy na zimę, odpowiedzi na listy sąsiadów — zależy od tego, ile uwagi zechcesz temu poświęcić w danym tygodniu.",
  ctaPrimary: { label: "Zobacz, jak to działa", href: "#mechanika" },
  ctaSecondary: { label: "Najczęściej zadawane pytania", href: "#pytania" },
};

export const intro = {
  eyebrow: "na czym to właściwie polega",
  heading: "Jeden posterunek, żadnej podpowiedzi co robić dalej",
  paragraphs: [
    "Punktem wyjścia jest sytuacja, a nie samouczek: obejmujesz posterunek w połowie sezonu, po kimś, kto prowadził rejestr zapasów niedbale i zostawił trzy niedokończone sprawy z sąsiadami. Mapa, którą dostajesz, jest właściwie szkicem — dokładna tylko w promieniu paru dni drogi, dalej biała, aż sam wyślesz kogoś, żeby ją uzupełnił.",
    "Nie ma tu zegara odmierzającego czas w tle. Gra przechodzi z dnia na dzień wtedy, gdy Ty zamkniesz dany dzień — raz robiąc to w dziesięć minut, raz wracając do tej samej decyzji trzy razy, bo liczby się nie zgadzają. Zapis jest jeden, ciągły, bez rund do powtórzenia od zera po porażce.",
    "Strategia polega tu głównie na tym, że skutki decyzji pojawiają się z opóźnieniem — czasem dopiero za dwa tygodnie gry, gdy zepsuty zapas zboża odbije się na czymś, o czym dawno zapomniałeś. To gra dla kogoś, kto lubi trzymać w głowie kilka wątków naraz, a nie dla kogoś, kto chce natychmiastowej nagrody po każdym kliknięciu.",
  ],
};

export interface MechanicCard {
  id: string;
  heading: string;
  paragraphs: string[];
  illustration: { src: string; alt: string };
}

export const mechanics: MechanicCard[] = [
  {
    id: "logistyka",
    heading: "Zapasy, które nie czekają grzecznie w magazynie",
    paragraphs: [
      "Każdy towar ma swój rytm psucia się i swoją pojemność transportu — zboże zajmuje mało miejsca, ale nie przetrwa do wiosny bez suszarni, sól leży latami, ale zajmuje każdą wolną skrzynię. Wóz, którym dysponujesz na start, ma dokładnie dwa miejsca ładunkowe, i to ograniczenie zostaje z Tobą znacznie dłużej, niż się spodziewasz.",
      "Rejestr prowadzi się ręcznie — dwie kolumny, przychód i rozchód, bez automatycznego podsumowania. To celowe: łatwiej zauważyć, że coś się nie zgadza, kiedy samemu przesuwasz wzrokiem po wierszach, niż kiedy system od razu wypluwa gotowy wynik.",
    ],
    illustration: {
      src: "/illustrations/rejestr-zapasow.svg",
      alt: "Otwarty rejestr zapasów obok drewnianych skrzyń w magazynie posterunku",
    },
  },
  {
    id: "zwiad",
    heading: "Mapa, która milczy, dopóki jej nie zapytasz",
    paragraphs: [
      "Poza znanym odcinkiem traktu teren jest pustą kartą — dosłownie białą przestrzenią z zaznaczonym tylko kierunkiem, w którym coś kiedyś widziano. Wysłanie zwiadowcy kosztuje czas i zapasy, a wynik bywa rozczarowujący: czasem to tylko potwierdzenie, że droga faktycznie prowadzi donikąd.",
      "Czasem jednak trafia się na zniszczony most, który da się naprawić mniejszym kosztem niż objazd, albo na opuszczoną stację przekaźnikową, która — odbudowana — skraca trasę o dwa dni. To, co znajdziesz, zależy od konkretnego kierunku, w który wysłałeś ludzi, i od pory roku, w której to zrobiłeś — ten sam odcinek trasy pokazuje coś innego wiosną niż jesienią.",
    ],
    illustration: {
      src: "/illustrations/naroznik-mapy.svg",
      alt: "Narożnik starej mapy z zaznaczonym traktem i niezbadanym obszarem",
    },
  },
  {
    id: "korespondencja",
    heading: "Listy zza granicy, na które trzeba odpowiedzieć piórem",
    paragraphs: [
      "Sąsiednie gospodarstwa i mniejsze osady piszą — o prawie przejazdu przez Twój teren, o wspólnym remoncie mostu, o schronieniu na czas zamrożka. Odpowiedź to zawsze tekst, nie przycisk z ikoną miecza czy tarczy: piszesz, ile jesteś skłonny ustąpić, i czekasz na kolejny list, czasem tygodniami.",
      "Konsekwencje nie są natychmiastowe ani jednoznacznie dobre lub złe. Odmowa pomocy sąsiadowi podczas mrozu może oznaczać, że następnej wiosny nie dostaniesz od niego ostrzeżenia o rozmytym moście — a mogłeś się go nie spodziewać, bo ta sprawa wydawała się dawno zamknięta.",
    ],
    illustration: {
      src: "/illustrations/stol-narad.svg",
      alt: "Widok z góry na stół z rozłożonymi listami, pieczęciami i kompasem",
    },
  },
  {
    id: "pory-roku",
    heading: "Cztery pory roku, jeden rytm gry",
    paragraphs: [
      "Roztopy, posucha, żniwa, zamrożek — każda pora roku zmienia, co jest priorytetem: wiosną liczy się przejezdność traktu, latem tempo wymiany towarów, jesienią pojemność magazynów, zimą to, czy w ogóle wystarczy opału. Nie ma dwóch identycznych sezonów, bo to, co zrobiłeś poprzednio, zmienia punkt startowy kolejnego.",
      "To jedyny element gry, który płynie niezależnie od Twoich decyzji — data w świecie gry odpowiada w przybliżeniu rzeczywistemu kalendarzowi, więc posterunek, do którego wracasz w styczniu, wygląda inaczej niż ten, który zostawiłeś w sierpniu.",
    ],
    illustration: {
      src: "/illustrations/kolo-sezonow.svg",
      alt: "Koło czterech pór roku rozgrywki z symbolami roztopów, posuchy, żniw i zamrożka",
    },
  },
];

export const absent = {
  eyebrow: "świadome ograniczenia",
  heading: "Czego tu nie ma — i dlaczego zostało pominięte",
  items: [
    "Nie ma tabeli wyników ani porównywania się z innymi osobami prowadzącymi własne posterunki — to podróż w Twoim tempie, bez presji, że ktoś inny jest dalej.",
    "Nie ma systemu walki ani statystyk jednostek bojowych. Spory z sąsiadami rozstrzygają się w treści listów, nie na polu starcia — jeśli szukasz gry o armiach, to nie jest to miejsce.",
    "Nie ma zegara, który wymusza powrót o konkretnej godzinie. Dzień w grze zamyka się wtedy, gdy Ty go zamkniesz, nie wtedy, gdy wybije określona liczba minut.",
    "W wersji opisanej na tej stronie nie ma dodatkowych zakupów wewnątrz rozgrywki — całość mieści się w jednym, ciągłym zapisie, bez oddzielnych pakietów do odblokowania.",
  ],
};

export interface WalkthroughStep {
  day: string;
  heading: string;
  text: string;
}

export const walkthrough: WalkthroughStep[] = [
  {
    day: "dzień 1",
    heading: "Przejęcie rejestru",
    text: "Zastajesz połowicznie prowadzony rejestr, trzy niezamknięte sprawy i wóz stojący pod wiatą z jednym kołem wymagającym naprawy. Pierwsza decyzja to zwykle to, czy naprawić koło od razu, czy poczekać do najbliższego wyjazdu.",
  },
  {
    day: "dzień 4",
    heading: "Pierwszy list",
    text: "Sąsiad z zachodniej granicy pisze o prawie przejazdu przez skrawek Twojej ziemi. Propozycja brzmi rozsądnie, ale nie wiesz jeszcze, czy w zamian dostaniesz coś więcej niż samą zgodę.",
  },
  {
    day: "dzień 9",
    heading: "Pierwszy zwiad",
    text: "Wysyłasz kogoś na wschodni odcinek białej plamy. Wraca dzień później niż planowano, z wieścią o moście, który wygląda gorzej, niż się spodziewałeś na podstawie starych zapisków poprzednika.",
  },
  {
    day: "dzień 15",
    heading: "Pierwsze zepsute zapasy",
    text: "Część zboża w drugiej skrzyni traci się, bo suszarnia nie nadążyła. Niewielka strata, ale to moment, w którym większość osób zaczyna prowadzić rejestr dokładniej, niż robiła to pierwsze dwa tygodnie.",
  },
  {
    day: "dzień 21",
    heading: "Zamknięcie pierwszego rozdziału roztopów",
    text: "Trakt wysycha na tyle, że wozy jeżdżą bez opóźnień. To dobry moment, żeby zobaczyć, ile z pierwotnego rejestru poprzednika w ogóle się zgadzało — u większości osób nie wszystko.",
  },
];

export const audience = {
  heading: "Dla kogo jest ta gra, a dla kogo niekoniecznie",
  forYou: {
    heading: "Prawdopodobnie spodoba się, jeśli:",
    items: [
      "lubisz planowanie z ołówkiem w ręku bardziej niż refleks,",
      "wolisz krótkie codzienne sesje od wielogodzinnych maratonów,",
      "cenisz gry, w których konsekwencje przychodzą z opóźnieniem, a nie od razu,",
      "odpowiada Ci samotna, spokojna rozgrywka bez potrzeby koordynowania się z innymi.",
    ],
  },
  notForYou: {
    heading: "Prawdopodobnie nie tutaj, jeśli szukasz:",
    items: [
      "szybkiej akcji i refleksowej rozgrywki,",
      "rywalizacji i rankingów z innymi graczami,",
      "rozbudowanego systemu walk i jednostek bojowych,",
      "natychmiastowej informacji zwrotnej po każdej decyzji.",
    ],
  },
};

export const requirements = {
  heading: "Wymagania i dostępność",
  items: [
    {
      label: "Sprzęt",
      text: "Działa w przeglądarce na komputerze i na tablecie. Nie potrzeba mocnej karty graficznej — warstwa graficzna jest celowo lekka.",
    },
    {
      label: "Instalacja",
      text: "Żadna. Otwierasz stronę i zaczynasz — bez pobierania klienta gry i bez sklepu z aplikacjami.",
    },
    {
      label: "Zapis stanu gry",
      text: "Na start zapis trzymany jest lokalnie w przeglądarce, z możliwością wyeksportowania pliku zapisu. Synchronizacja między urządzeniami jest w planach rozwoju, opisanych niżej.",
    },
    {
      label: "Język",
      text: "Treść przygotowana w języku polskim, dopasowana do realiów środkowoeuropejskiego kalendarza sezonowego.",
    },
    {
      label: "Grupa odbiorców",
      text: "Treść ogólnodostępna. Konflikty rozgrywają się w formie tekstowej korespondencji, bez przedstawień przemocy.",
    },
  ],
};

export interface DevNote {
  date: string;
  text: string;
}

export const devNotes: DevNote[] = [
  {
    date: "14 lutego",
    text: "Trzeci raz przepisuję system psucia się zapasów. Wcześniejsza wersja liczyła to co godzinę gry, co niepotrzebnie komplikowało coś, co i tak rozgrywa się dzień po dniu, a nie w czasie rzeczywistym.",
  },
  {
    date: "3 kwietnia",
    text: "Zrezygnowałem z pomysłu na tabelę wyników. Test z grupą testową pokazał, że samo porównywanie liczb psuje dokładnie to, co miało być mocną stroną projektu — spokojne, indywidualne tempo.",
  },
  {
    date: "22 czerwca",
    text: "Listy od sąsiadów przestały pochodzić z jednej puli szablonów. Teraz ich treść zależy od tego, co zrobiłeś w poprzednim sezonie — więcej pracy przy pisaniu, ale zupełnie inaczej się to czyta przy drugim podejściu do gry.",
  },
  {
    date: "9 sierpnia",
    text: "Osoba testująca zwróciła uwagę, że wieża strażnicza w opisie posterunku nie ma żadnej funkcji poza tłem. Zapisane do poprawy w kolejnym etapie prac nad mechaniką zwiadu.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faq: FaqItem[] = [
  {
    question: "Czy trzeba coś instalować?",
    answer:
      "Nie. Całość działa w przeglądarce internetowej — na komputerze i na tablecie. Nie ma osobnego klienta gry ani wersji do pobrania.",
  },
  {
    question: "Czy da się przegrać?",
    answer:
      "Tak, w tym sensie, że posterunek może podupaść — zapasy stracone przez zaniedbanie nie wracają, a zerwana korespondencja z sąsiadem może zamknąć pewne możliwości na dłużej. Nie ma jednak jednego ekranu „koniec gry” — zawsze można próbować odbudować sytuację od punktu, w którym się jest.",
  },
  {
    question: "Czy jest tu tryb wieloosobowy?",
    answer:
      "Nie, i nie jest planowany. To świadomie gra dla jednej osoby — bez rankingów, bez interakcji z innymi graczami w czasie rzeczywistym.",
  },
  {
    question: "Ile trwa jedna sesja?",
    answer:
      "Zwykle od kilku do kilkunastu minut, w zależności od liczby spraw czekających danego dnia. Da się grać krótkimi seriami rozłożonymi na wiele dni, bez utraty kontekstu — rejestr i listy zostają tam, gdzie je zostawiłeś.",
  },
  {
    question: "Czy trzeba wracać codziennie?",
    answer:
      "Nie. Upływ dni w grze liczony jest od chwili, w której otwierasz posterunek, a nie od zegara systemowego działającego w tle — więc dłuższa przerwa nie oznacza utraconych dni, choć może oznaczać więcej spraw czekających na rozpatrzenie za jednym razem.",
  },
  {
    question: "Czy zapis synchronizuje się między urządzeniami?",
    answer:
      "Na obecnym etapie zapis trzymany jest lokalnie w przeglądarce, z opcją ręcznego eksportu pliku. Synchronizacja przez konto jest w planach — informacje o postępie pojawią się w notatkach z rozwoju powyżej.",
  },
  {
    question: "Czy konflikty z sąsiadami mają formę walki?",
    answer:
      "Nie. Wszystkie spory rozstrzygają się w treści korespondencji — piszesz odpowiedź, a konsekwencje ujawniają się w kolejnych listach i w stanie traktu, nie na polu bitwy.",
  },
];

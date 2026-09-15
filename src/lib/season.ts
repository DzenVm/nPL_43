export type SeasonKey = "roztopy" | "posucha" | "zniwa" | "zamrozek";

export interface SeasonInfo {
  key: SeasonKey;
  label: string;
  dayInSeason: number;
  seasonLength: number;
  daysLeft: number;
  fieldNote: string;
  roadCondition: string;
}

interface SeasonDefinition {
  key: SeasonKey;
  label: string;
  startDayOfYear: number;
  endDayOfYear: number;
  fieldNote: string;
  roadCondition: string;
}

// Granice liczone w dniach roku (1-365/366), przybliżone do realiów
// środkowoeuropejskiego kalendarza rolniczego — nie co do dnia, bo to
// wystarczy dla klimatu rozgrywki, a nie prognoza pogody.
const SEASONS: SeasonDefinition[] = [
  {
    key: "roztopy",
    label: "roztopy",
    startDayOfYear: 60, // ok. 1 marca
    endDayOfYear: 140, // ok. 20 maja
    fieldNote:
      "Grunt puszcza dopiero na południowych stokach, reszta traktu jeszcze trzyma wodę pod skorupą.",
    roadCondition: "trakt częściowo rozmyty, wozy jadą z opóźnieniem",
  },
  {
    key: "posucha",
    label: "posucha",
    startDayOfYear: 141,
    endDayOfYear: 232, // ok. 20 sierpnia
    fieldNote:
      "Studnia przy spichlerzu trzyma poziom, ale rzeka spadła na tyle, że bród da się przejść pieszo.",
    roadCondition: "trakt suchy, przejezdny bez ograniczeń",
  },
  {
    key: "zniwa",
    label: "żniwa",
    startDayOfYear: 233,
    endDayOfYear: 314, // ok. 10 listopada
    fieldNote:
      "Magazyny zapełniają się szybciej, niż zdążamy je liczyć — to zwykle też najgorszy moment na przestój w dostawach.",
    roadCondition: "trakt zatłoczony wozami, ruch spowolniony",
  },
  {
    key: "zamrozek",
    label: "zamrożek",
    startDayOfYear: 315,
    endDayOfYear: 366,
    fieldNote:
      "Pierwszy szron na dachu wieży strażniczej — pora sprawdzić, czy wszystkie zapasy opału trafiły pod dach.",
    roadCondition: "trakt zamarznięty, część odcinków nieprzejezdna po zmroku",
  },
];

const WINTER_TAIL: SeasonDefinition = {
  key: "zamrozek",
  label: "zamrożek",
  startDayOfYear: 1,
  endDayOfYear: 59,
  fieldNote:
    "Śnieg leży jeszcze twardo, a dni są na tyle krótkie, że wyprawy zwiadowcze kończą się przed zmierzchem.",
  roadCondition: "trakt zamarznięty, część odcinków nieprzejezdna po zmroku",
};

function dayOfYear(date: Date): number {
  const start = Date.UTC(date.getUTCFullYear(), 0, 1);
  const current = Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  return Math.floor((current - start) / 86_400_000) + 1;
}

export function getSeasonInfo(date: Date = new Date()): SeasonInfo {
  const doy = dayOfYear(date);
  const def =
    doy <= WINTER_TAIL.endDayOfYear
      ? WINTER_TAIL
      : SEASONS.find((s) => doy >= s.startDayOfYear && doy <= s.endDayOfYear) ??
        SEASONS[SEASONS.length - 1]!;

  const dayInSeason = doy - def.startDayOfYear + 1;
  const seasonLength = def.endDayOfYear - def.startDayOfYear + 1;

  return {
    key: def.key,
    label: def.label,
    dayInSeason: Math.max(1, dayInSeason),
    seasonLength,
    daysLeft: Math.max(0, def.endDayOfYear - doy),
    fieldNote: def.fieldNote,
    roadCondition: def.roadCondition,
  };
}

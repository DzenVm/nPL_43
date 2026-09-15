import { getSeasonInfo } from "@/lib/season";
import { hero } from "@/content/homepage";
import styles from "./Hero.module.css";

const SEASON_LABELS: Record<string, string> = {
  roztopy: "roztopów",
  posucha: "posuchy",
  zniwa: "żniw",
  zamrozek: "zamrożka",
};

export default function Hero() {
  const season = getSeasonInfo();
  const seasonGenitive = SEASON_LABELS[season.key] ?? season.label;

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.kicker}>{hero.kicker}</p>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.lede}>{hero.lede}</p>

        <div className={styles.seasonCard} aria-label="Stan pory roku w rozgrywce, liczony na dziś">
          <p className={styles.seasonLine}>
            Gdybyś zakładał posterunek dziś, byłby to{" "}
            <strong>{season.dayInSeason}. dzień {seasonGenitive}</strong> —{" "}
            {season.fieldNote}
          </p>
          <p className={styles.seasonMeta}>
            Stan traktu: {season.roadCondition}. Do końca tej pory roku zostało w
            przybliżeniu {season.daysLeft} {daysWord(season.daysLeft)} kalendarzowych.
          </p>
        </div>

        <div className={styles.ctaRow}>
          <a className={styles.ctaPrimary} href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
          </a>
          <a className={styles.ctaSecondary} href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}

function daysWord(n: number): string {
  return n === 1 ? "dzień" : "dni";
}

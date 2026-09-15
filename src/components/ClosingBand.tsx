import styles from "./ClosingBand.module.css";

export default function ClosingBand() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <figure className={styles.figure}>
          <img
            src="/illustrations/wieza-straznicza.svg"
            alt="Sylwetka drewnianej wieży strażniczej o zmierzchu"
            width={480}
            height={360}
            loading="lazy"
          />
          <figcaption className={styles.caption}>
            Widok z posterunku o zmierzchu, tuż przed zamknięciem dnia w rejestrze.
          </figcaption>
        </figure>

        <div className={styles.text}>
          <h2 className="section-heading">Rejestr czeka tam, gdzie go zostawiłeś</h2>
          <p className="section-lede">
            Ta strona opisuje projekt na obecnym etapie prac — bez obietnic co do
            terminu, za to z bieżącymi notatkami z rozwoju powyżej. Jeśli masz pytanie,
            którego nie ma w sekcji FAQ, albo uwagę do samego opisu mechaniki, najlepiej
            napisać bezpośrednio.
          </p>
          <a className={styles.link} href="/kontakt">
            Przejdź do strony kontaktowej →
          </a>
        </div>

        <figure className={styles.figure}>
          <img
            src="/illustrations/szlak-karawany.svg"
            alt="Widok z góry na szlak karawany prowadzący do posterunku"
            width={480}
            height={360}
            loading="lazy"
          />
          <figcaption className={styles.caption}>
            Szlak, którym docierają zaopatrzenie i listy — jego stan zmienia się z porą
            roku.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

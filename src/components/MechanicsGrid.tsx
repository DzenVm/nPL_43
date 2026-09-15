import { mechanics } from "@/content/homepage";
import styles from "./MechanicsGrid.module.css";

export default function MechanicsGrid() {
  return (
    <section className="section" id="mechanika">
      <div className="container">
        <p className="eyebrow">jak zbudowana jest rozgrywka</p>
        <h2 className="section-heading">Cztery mechaniki, które trzymają się razem</h2>
        <p className="section-lede">
          Żadna z nich nie działa w oderwaniu od reszty — zepsute zapasy zmieniają, co
          możesz zaoferować sąsiadowi w liście, a wynik zwiadu decyduje, czy w ogóle
          zdążysz z dostawą przed końcem sezonu.
        </p>

        <div className={styles.grid}>
          {mechanics.map((card, index) => (
            <article key={card.id} id={card.id} className={styles.card}>
              <img
                src={card.illustration.src}
                alt={card.illustration.alt}
                width={480}
                height={360}
                loading={index === 0 ? "eager" : "lazy"}
                className={styles.illustration}
              />
              <div className={styles.cardBody}>
                <h3 className={styles.cardHeading}>{card.heading}</h3>
                {card.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className={styles.cardText}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

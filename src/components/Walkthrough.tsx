import { walkthrough } from "@/content/homepage";
import styles from "./Walkthrough.module.css";

export default function Walkthrough() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <p className="eyebrow">przykładowy przebieg</p>
        <h2 className="section-heading">Pierwszy sezon, krok po kroku</h2>
        <p className="section-lede">
          To nie jest gwarantowany scenariusz — kolejność spraw bywa inna zależnie od
          tego, co zostawił poprzednik. Poniżej opis jednego z możliwych przebiegów
          pierwszych trzech tygodni.
        </p>

        <ol className={styles.list}>
          {walkthrough.map((step) => (
            <li key={step.day} className={styles.step}>
              <span className={styles.day}>{step.day}</span>
              <div>
                <h3 className={styles.stepHeading}>{step.heading}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

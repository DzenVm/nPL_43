import { faq } from "@/content/homepage";
import styles from "./Faq.module.css";

export default function Faq() {
  return (
    <section className="section" id="pytania">
      <div className="container container--narrow">
        <p className="eyebrow">pytania, które wracają najczęściej</p>
        <h2 className="section-heading">Zanim zapytasz</h2>

        <div className={styles.list}>
          {faq.map((item) => (
            <details key={item.question} className={styles.item}>
              <summary className={styles.question}>{item.question}</summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

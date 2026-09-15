import { requirements } from "@/content/homepage";
import styles from "./Requirements.module.css";

export default function Requirements() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <h2 className="section-heading">{requirements.heading}</h2>
        <dl className={styles.list}>
          {requirements.items.map((item) => (
            <div key={item.label} className={styles.row}>
              <dt className={styles.label}>{item.label}</dt>
              <dd className={styles.value}>{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

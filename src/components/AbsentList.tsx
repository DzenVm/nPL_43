import { absent } from "@/content/homepage";
import styles from "./AbsentList.module.css";

export default function AbsentList() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <p className="eyebrow">{absent.eyebrow}</p>
        <h2 className="section-heading">{absent.heading}</h2>
        <ul className={styles.list}>
          {absent.items.map((item) => (
            <li key={item.slice(0, 24)} className={styles.item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { audience } from "@/content/homepage";
import styles from "./Audience.module.css";

export default function Audience() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <h2 className="section-heading">{audience.heading}</h2>
        <div className={styles.columns}>
          <div>
            <h3 className={styles.colHeading}>{audience.forYou.heading}</h3>
            <ul className={styles.list}>
              {audience.forYou.items.map((item) => (
                <li key={item.slice(0, 20)}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.colHeading}>{audience.notForYou.heading}</h3>
            <ul className={styles.list}>
              {audience.notForYou.items.map((item) => (
                <li key={item.slice(0, 20)}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

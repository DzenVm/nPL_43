import { intro } from "@/content/homepage";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className="section">
      <div className="container container--narrow">
        <p className="eyebrow">{intro.eyebrow}</p>
        <h2 className="section-heading">{intro.heading}</h2>
        <div className={styles.paragraphs}>
          {intro.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="section-lede">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

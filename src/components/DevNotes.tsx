import { devNotes } from "@/content/homepage";
import styles from "./DevNotes.module.css";

export default function DevNotes() {
  return (
    <section className="section" id="notatki">
      <div className="container container--narrow">
        <p className="eyebrow">dziennik prac</p>
        <h2 className="section-heading">Notatki z rozwoju</h2>
        <p className="section-lede">
          Krótkie wpisy zapisywane na bieżąco w trakcie pracy nad mechaniką —
          zostawione bez wygładzania, także tam, gdzie coś okazało się pomyłką.
        </p>

        <ul className={styles.list}>
          {devNotes.map((note) => (
            <li key={note.date} className={styles.entry}>
              <p className={styles.date}>{note.date}</p>
              <p className={styles.text}>{note.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

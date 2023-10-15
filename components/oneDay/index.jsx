import styles from "./styles.module.css";
import Link from "next/link";

export default function OneDay() {
  return (
    <section className={styles.center}>
      <h1 className={styles.title}>One day in my life</h1>

      <iframe
        src="https://www.youtube.com/embed/T8lIr6OX1JI?si=9NmBDuaSLdwGV75u"
        title="One day in the life of a Software Engineer in ITALY 🇮🇹🍕🍝"
        frameborder="0"
        className={styles.video}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        loading="lazy"
      ></iframe>
    </section>
  );
}

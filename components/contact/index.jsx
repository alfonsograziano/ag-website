import styles from "./styles.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <section className={styles.center}>
      <h1 className={styles.title}>Contact me at</h1>

      <Link href="mailto:info@alfonsograziano.it" className={styles.emailLink}>
        info@alfonsograziano.it
      </Link>
    </section>
  );
}

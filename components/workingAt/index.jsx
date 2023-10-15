import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export default function WorkingAt() {
  return (
    <section className={styles.center}>
      <h1 className={styles.title}>Currently working at</h1>
      <div className={styles.containerShadow}>
        <div className={styles.container}>
          <div className={styles.imageColumn}>
            <Image
              src="/nearform.png"
              width={140}
              height={140}
              alt="NearForm"
            />
          </div>

          <div className={styles.column}>
            <p className={styles.description}>
              <b>NearForm</b> creates software solutions that accelerate
              enterprise success, enrich customer experience and contribute to
              the development of our community.
            </p>

            <Link href="https://www.nearform.com/" className={styles.link}>
              About it
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

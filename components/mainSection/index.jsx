import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const links = [
  {
    label: "LinkedIn",
    url: "/linkedin",
  },
  {
    label: "YouTube",
    url: "/youtube",
  },
  {
    label: "GitHub",
    url: "/github",
  },
  {
    label: "Blog",
    url: "/blog",
  },
];

export default function MainSection() {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.column}>
          <h1 className={styles.title}>Hey, I&apos;m Alfonso 👋🏻</h1>
          <p className={styles.description}>
            Software developer who enjoys learning and sharing knowledge. Based
            in Italy 🇮🇹
          </p>

          <div className={styles.linksContainer}>
            {links.map((link, index) => (
              <Link key={index} href={link.url} className={styles.linkCard}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={{ ...styles.column, ...styles.container }}>
          <Image
            src="/me.jpg"
            width={240}
            height={240}
            alt="me"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

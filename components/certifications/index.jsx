import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

const certifications = [
  {
    src: "/ml_engineer.png",
    label: "AWS Machine Learning Engineer Associate",
    url: "#", //TODO: Add credly badge as soon as the accounts are merged
  },
  {
    src: "/solutions_architect.png",
    label: "AWS Solutions Architect Associate",
    url: "https://www.credly.com/earner/earned/badge/45ce4d38-2a99-4690-b191-1791a5d33bf8",
  },
  {
    src: "/developer_associate.png",
    label: "AWS Developer Associate",
    url: "https://www.credly.com/badges/192a7eb9-646e-4b55-ae05-9552d9a4f7f2",
  },
  {
    src: "/cloud_practitioner.png",
    label: "AWS Cloud Practitioner",
    url: "https://www.credly.com/badges/2948d77f-e0c3-4f69-8303-a08cd2e8fc02",
  },
];

export default function Certifications() {
  return (
    <section className={styles.center}>
      <h1 className={styles.title}>Certifications</h1>

      <div className={styles.row}>
        {certifications.map((certification, index) => (
          <Link
            key={index}
            href={certification.url}
            className={styles.certification}
          >
            <Image
              src={certification.src}
              width={120}
              height={120}
              alt={certification.label}
              className={styles.image}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

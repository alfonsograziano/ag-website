import styles from "./styles.module.css";
import MainSection from "@/components/mainSection";
import WorkingAt from "@/components/workingAt";
import Contact from "@/components/contact";
import Talks from "@/components/talks";
import OneDay from "@/components/oneDay";
import Certifications from "@/components/certifications";

export default function Home() {
  return (
    <main className={styles.pageContainer}>
      <MainSection />
      <WorkingAt />
      <Talks />
      <OneDay />
      <Certifications />
      <Contact />
    </main>
  );
}

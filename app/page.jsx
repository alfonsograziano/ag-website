import Image from "next/image";
import styles from "./styles.module.css";
import MainSection from "@/components/mainSection";
import WorkingAt from "@/components/workingAt";
import Contact from "@/components/contact";
import Talks from "@/components/talks";

export default function Home() {
  return (
    <main className={styles.pageContainer}>
      <MainSection />
      <WorkingAt />
      <Talks />
      <Contact />
    </main>
  );
}

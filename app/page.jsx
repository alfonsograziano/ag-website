import styles from "./styles.module.css";
import MainSection from "@/components/mainSection";
import WorkingAt from "@/components/workingAt";
import Contact from "@/components/contact";
import Talks from "@/components/talks";
import Certifications from "@/components/certifications";
import dynamic from "next/dynamic";

const OneDay = dynamic(() => import("@/components/oneDay"));

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

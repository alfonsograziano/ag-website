import Image from "next/image";
import styles from "./styles.module.css";
import MainSection from "@/components/mainSection";

export default function Home() {
  return (
    <main className={styles.pageContainer}>
      <MainSection />
      <section>
        <h2>Currently at</h2>
        <div>Add here the NF description...</div>
      </section>

      <section>
        <h2>My certifications</h2>
        <div>Add here the list...</div>
      </section>
    </main>
  );
}

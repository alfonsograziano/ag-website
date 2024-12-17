import styles from "./styles.module.css";
import MainSection from "@/components/mainSection";
import WorkingAt from "@/components/workingAt";
import Contact from "@/components/contact";
import Talks from "@/components/talks";
import Certifications from "@/components/certifications";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const OneDay = dynamic(() => import("@/components/oneDay"));

export default function Home() {
  return (
    <main className={styles.pageContainer}>
      <Suspense>
        <MainSection />
      </Suspense>
      <Suspense>
        <Certifications />
      </Suspense>
      <Suspense>
        <WorkingAt />
      </Suspense>
      <Suspense>
        <OneDay />
      </Suspense>
      <Suspense>
        <Talks />
      </Suspense>
      <Suspense>
        <Contact />
      </Suspense>
    </main>
  );
}

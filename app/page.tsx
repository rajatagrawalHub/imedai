import styles from "./page.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import DoctorImage from "@/public/doctor.svg";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.Container}>
      <Header />
      <main className={styles.heroPage}>
        <div className={styles.heroLeft}>
          <div className={styles.topLine}>
            <div className={styles.rect}></div>
            <p>Revolutionizing Healthcare with AI</p>
          </div>
          <p className={styles.heroTitle}>AI Powered Disease Detection and Treatment Planning</p>
          <p>Lorem ipsum dolor sit amet, consectetur adispacing elit, sed do eiusmod</p>
          <Link href={'/upload'} className={`${styles.button} ${styles.Fill}`}>Get Started</Link>
        </div>
        <div className={styles.heroRight}>
          <Image src={DoctorImage} alt="DoctorImage" className={styles.doctor}></Image>
        </div>
      </main>
    </div>
  );
}
import Image from "next/image";
import styles from "./page.module.css";
import DoctorImage from "../public/doctor.svg"

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.NavBar}>
        <div className={styles.Logo}>
          <p>iMed.<span className={styles.blueText}>ai</span></p>
        </div>
        <div className={`${styles.menu} ${styles.menuLarge}`}>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Product</p>
        </div>
        <div className={styles.buttonBox}>
        <button className={`${styles.button} ${styles.noFill}`}>Log In</button>
        <button className={`${styles.button} ${styles.Fill}`}>Sign Up</button>
        </div>
      </div>
      <div className={`${styles.menu} ${styles.menuSmall}`}>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact</p>
          <p>Product</p>
        </div>
      <div className={styles.heroPage}>
        <div className={styles.heroLeft}>
          <div className={styles.topLine}>
            <div className={styles.rect}></div>
            <p>Revolutionizing Healthcare with AI</p>
          </div>
          <p className={styles.heroTitle}>AI Powered Disease Detection and Treatment Planning</p>
          <p>Lorem ipsum d  olor sit amet, consectetur adispacing elit, sed do eiusmod</p>
          <button className={`${styles.button} ${styles.Fill}`}>Get Started</button>
        </div>
        <div className={styles.heroRight}>
            <Image src={DoctorImage} alt="DoctorImage" className={styles.doctor}></Image>
        </div>
      </div>
    </div>
  );
}

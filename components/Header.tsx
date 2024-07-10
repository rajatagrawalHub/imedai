import styles from "@/app/page.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.NavBar}>
        <div className={styles.Logo}>
          <a href="/">iMed.<span className={styles.blueText}>ai</span></a>
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
    </header>
  );
}
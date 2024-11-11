"use client";

import Header from "./header/header";
import Footer from "./footer/footer";
import Services from "./services/services";
import Photos from "./photos/photos";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <section className={styles.welcomeSection}>
          <h1 className={styles.title}>Bienvenue chez Svetlana Studio</h1>
          <p className={styles.texte}>Spécialiste en extension des cils et architecture des sourcils</p>
        </section>
        <Services />
        <Photos />
        <div className={styles.ctas}>
          <a href="/appointment" className={styles.primary}>Prendre rendez-vous</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}


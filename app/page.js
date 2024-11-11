"use client";

import Header from "./header/header";
import Footer from "./footer/footer";
import Services from "./services/services";
import Photos from "./photos/photos";
import Contact from "./contact/contact";
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
        <div className={styles.ctas} id="appointment"> {/* Ajouter un ID ici */}
          {/* Rediriger directement vers Setmore au clic */}
          <a
            href="https://booking.setmore.com/scheduleappointment/735eb74d-0c35-4462-8d0e-e8ccec04489b"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary}
          >
            Prendre rendez-vous
          </a>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

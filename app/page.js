"use client";

import { useState, useEffect } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Services from "./services/services";
import Photos from "./photos/photos";
import Contact from "./contact/contact";
import styles from "./page.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>
      {isLoading && (
        <div className={styles.loadingScreen}>
          <div className={styles.spinner} aria-label="Chargement en cours"></div>
        </div>
      )}
      <Header />
      <main className={styles.main}>
        <section className={styles.welcomeSection}>
          <img 
            src="/left-image.png" 
            alt="Les yeux avec des cils après l'extenstion" 
            className={styles.welcomeImage} 
            loading="lazy" 
          />
          <div className={styles.welcomeContent}>
            <h1 className={styles.title}>Bienvenue chez Svetlana Studio</h1>
            <p className={styles.texte}>
              Spécialiste en extension des cils et architecture des sourcils à Ychoux.
            </p>
          </div>
          <img 
            src="/right-image.png" 
            alt="Le processus de pose d'extension de cils : client et spécialiste" 
            className={styles.welcomeImage} 
            loading="lazy" 
          />
        </section>

        <Services />

        {/* Section Tarifs */}
        <section className={styles.tarifsSection} id="tarifs">
          <h2 className={styles.tarifsTitle}>Nos Tarifs</h2>
          <ul className={styles.tarifsText}>
            <li><span className={styles.bullet}>•</span> À partir de 35€ pour une séance complète d'extension de cils.</li>
            <li><span className={styles.bullet}>•</span> Première séance à -10% !</li>
            <li><span className={styles.bullet}>•</span> Dépose des cils gratuite.</li>
          </ul>
        </section>

        {/* CTA Section */}
        <div className={styles.ctas} id="appointment">
          <a
            href="https://booking.setmore.com/scheduleappointment/735eb74d-0c35-4462-8d0e-e8ccec04489b"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary}
            aria-label="Prendre rendez-vous en ligne chez Svetlana Studio"
          >
            Prendre rendez-vous
          </a>
        </div>
        
        <Photos />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

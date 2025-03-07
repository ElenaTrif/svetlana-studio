"use client";

import { useState, useEffect } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Services from "./services/services";
import Photos from "./photos/photos";
import Contact from "./contact/contact";
import styles from "./page.module.css";
import Avis from "./avis/avis";


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
            src="/left-image.webp"
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
            src="/right-image.webp"
            alt="Le processus de pose d'extension de cils : client et spécialiste"
            className={styles.welcomeImage}
            loading="lazy"
          />
        </section>

        {/* CTA Section */}
        <div className={styles.ctas1} id="appointment">
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

        <Avis />

        <Photos />

        {/* Section Tarifs */}
        <section className={styles.tarifsSection} id="tarifs">
          <h2 className={styles.tarifsTitle}>Nos Tarifs</h2>
          <ul className={styles.tarifsText}>
            <li>
              <span className={styles.bullet}>•</span>
              <em style={{ textDecoration: 'underline' }}>Classique 1D –</em> Pose cil à cil pour un effet naturel et des cils allongés - <strong>40 €</strong>
            </li>
            <li>
              <span className={styles.bullet}>•</span>
              <em style={{ textDecoration: 'underline' }}>Effet volume “mouillé” –</em> Pour un look plus intense et captivant, avec des cils plux volumineux - <strong>45 €</strong>
            </li>
            <li>
              <span className={styles.bullet}>•</span>
              <em style={{ textDecoration: 'underline' }}>Remplissage 2 semaines –</em> <strong>25 €</strong>
            </li>
            <li>
              <span className={styles.bullet}>•</span>
              <em style={{ textDecoration: 'underline' }}>Remplissage 3 semaines –</em> <strong>35 €</strong>
            </li>
            <li>
              <span className={styles.bullet}>•</span>
              <em style={{ textDecoration: 'underline' }}>Dépose des cils –</em> Gratuite ✅
            </li>
            <li>
              <span className={styles.bullet}>•</span>
              <em style={{ textDecoration: 'underline' }}>Coloration des cils –</em> <strong>15 €</strong>
            </li>
            <li>
              <span className={styles.bullet}>•</span>
              <em style={{ textDecoration: 'underline' }}>Coloration et modélisation des sourcils –</em> <strong>20 €</strong>
            </li>
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
            Prenez RDV maintenant !
          </a>
        </div>
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

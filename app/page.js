"use client";

import { useState, useEffect } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import Services from "./services/services";
import Photos from "./photos/photos";
import Contact from "./contact/contact";
import styles from "./page.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // État pour gérer le chargement de la page

  useEffect(() => {
    // Masquer l'écran de chargement après 1.5 seconde (ou quand la page est prête)
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer); // Nettoyer le timeout au démontage du composant
  }, []);

  return (
    <div className={styles.page}>
      {isLoading && (
        <div className={styles.loadingScreen}>
          <div className={styles.spinner}></div> {/* Spinner animé */}
        </div>
      )}
      <Header />
      <main className={styles.main}>
        <section className={styles.welcomeSection}>
          <img 
            src="/left-image.png" 
            alt="Image avant" 
            className={styles.welcomeImage} 
          />
          <div className={styles.welcomeContent}>
            <h1 className={styles.title}>Bienvenue chez Svetlana Studio</h1>
            <p className={styles.texte}>Spécialiste en extension des cils et architecture des sourcils</p>
          </div>
          <img 
            src="/right-image.png" 
            alt="Image après" 
            className={styles.welcomeImage} 
          />
        </section>
        
        <Services />
        <div className={styles.ctas} id="appointment">
          <a
            href="https://booking.setmore.com/scheduleappointment/735eb74d-0c35-4462-8d0e-e8ccec04489b"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primary}
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

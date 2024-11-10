"use client";

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Svetlana Studio Logo"
          width={180}
          height={180}
          priority
        />
        <h1 className={styles.title}>Bienvenue chez Svetlana Studio</h1>
        <p className={styles.texte}>Spécialiste en extension des cils et architecture des sourcils</p>
        <ol>
          <li>Prendre rendez-vous pour des services de qualité</li>
          <li>Résultats impeccables et naturels</li>
        </ol>

        <div className={styles.ctas}>
          {/* Lien vers la page de rendez-vous */}
          <a
            className={styles.primary}
            href="/appointment"  // Lien vers la page appointment
          >
            Prendre rendez-vous
          </a>

          {/* Lien vers les services */}
          <a
            href="#services"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Nos services
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://www.instagram.com/svetlanastudio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/instagram.svg"
            alt="Instagram"
            width={16}
            height={16}
          />
          Suivez-nous sur Instagram
        </a>
      </footer>
    </div>
  );
}

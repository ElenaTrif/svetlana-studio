"use client";

import { useState, useEffect } from "react";
import styles from "./contact.module.css";

const Contact = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsFormVisible(true);
  }, []);

  return (
    <section id="contact" className={`${styles.contactSection} ${isFormVisible ? styles.showForm : ""}`}>
      <h2 className={styles.contactTitle}>Contactez-nous</h2>
      <p className={styles.contactText}>
        Vous pouvez nous contacter en utilisant les informations ci-dessous.
      </p>

      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <h3>Adresse</h3>
            <p>Ychoux, 40260</p>
          </div>
        </div>

        <div className={styles.contactItem}>
          <i className="fas fa-phone-alt"></i>
          <div>
            <h3>Téléphone</h3>
            <p>
              <a href="tel:+33656675016">0656675016</a>
            </p>
          </div>
        </div>

        <div className={styles.contactItem}>
          <i className="fas fa-envelope"></i>
          <div>
            <h3>Email</h3>
            <p>
              <a href="mailto:nsb1978@yandex.ru">nsb1978@yandex.ru</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

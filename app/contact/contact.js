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
            <p>Impasse des Résiniers, Ychoux, 40160</p>
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

      {/* Section de la carte */}
      <div className={styles.mapContainer}>
        <iframe
          title="Google Map Ychoux"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2892.8273547254316!2d-1.0734562246295198!3d44.33564797910371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd54916d5f53965b%3A0x20f9a87b5701f50!2sYchoux%2C%2040160!5e0!3m2!1sfr!2sfr!4v1697118886416!5m2!1sfr!2sfr"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;

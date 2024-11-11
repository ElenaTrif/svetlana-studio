"use client";

import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Contactez-nous</h2>
      <p className={styles.contactText}>Nous serions ravis de répondre à vos questions. N'hésitez pas à nous contacter !</p>
      
      <div className={styles.contactForm}>
        <form action="https://formsubmit.co/svetlanastudio@email.com" method="POST">
          <div className={styles.inputGroup}>
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>Envoyer</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

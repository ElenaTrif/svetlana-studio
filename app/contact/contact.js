"use client";

import { useState } from "react";
import styles from "./contact.module.css";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(""); // Pour gérer les messages de retour du formulaire
  const [loading, setLoading] = useState(false); // Pour indiquer que le formulaire est en cours de soumission

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    setLoading(true); // Active l'état de chargement

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(new FormData(form)).toString(),
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    } finally {
      setLoading(false); // Désactive l'état de chargement après la soumission
    }

    // Masquer automatiquement le message après 5 secondes
    setTimeout(() => {
      setFormStatus("");
    }, 5000);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Contactez-nous</h2>
      <p className={styles.contactText}>Nous serions ravis de répondre à vos questions. N'hésitez pas à nous contacter !</p>

      <div className={styles.contactForm}>
        <form
          action="https://formsubmit.co/novicovalena@yahoo.fr"
          method="POST"
          onSubmit={handleSubmit}
        >
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

          <button type="submit" className={styles.submitButton} disabled={loading}>
            {loading ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
        
        {/* Affichage des messages de succès ou d'erreur */}
        {formStatus === "success" && (
          <p className={styles.successMessage}>Votre message a été envoyé avec succès !</p>
        )}
        {formStatus === "error" && (
          <p className={styles.errorMessage}>Une erreur est survenue. Veuillez réessayer.</p>
        )}
      </div>
    </section>
  );
};

export default Contact;

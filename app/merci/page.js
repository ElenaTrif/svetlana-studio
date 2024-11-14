import styles from "./merci.module.css";

export default function Merci() {
  return (
    <div className={styles.thankYouPage}>
      <h1 className={styles.title}>Merci pour votre message !</h1>
      <p className={styles.message}>
        Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais.
      </p>
      <a href="/" className={styles.homeLink}>
        Retour à la page d'accueil
      </a>
    </div>
  );
}

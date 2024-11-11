import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <Link href="https://www.instagram.com/svetlanastudio" target="_blank" rel="noopener noreferrer">
          Instagram
        </Link>
        <Link href="https://www.facebook.com/svetlanastudio" target="_blank" rel="noopener noreferrer">
          Facebook
        </Link>
      </div>

      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Svetlana Studio. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

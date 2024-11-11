import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <Link
          href="https://www.instagram.com/svetlanastudio"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <Image
            src="/instagram.svg"
            alt="Instagram"
            width={24}
            height={24}
            className={styles.icon}
          />
          Instagram
        </Link>

        <Link
          href="https://www.facebook.com/svetlanastudio"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <Image
            src="/facebook.svg"
            alt="Facebook"
            width={24}
            height={24}
            className={styles.icon}
          />
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

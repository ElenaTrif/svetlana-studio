import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <Link
          href="https://www.instagram.com/svetlana_studio40/?igsh=MTkwNzZqb3lzb283dg%3D%3D"
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
          href="https://www.facebook.com/profile.php?id=100074753333531"
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

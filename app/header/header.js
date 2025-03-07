import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';
import FacebookIcon from '../icons/facebook';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Logo */}
        <Link href="/">
          <Image
            className={styles.logo}
            src="/logo.png"
            alt="Svetlana Studio Logo"
            width={40}
            height={40}
          />
        </Link>

        {/* Menu de navigation */}
        <nav className={styles.navLinks}>
          <Link href="/#services">Services</Link>
          <Link href="/#photos">Photos</Link>
          <a
            href="https://booking.setmore.com/scheduleappointment/735eb74d-0c35-4462-8d0e-e8ccec04489b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rendez-vous
          </a>
          <Link href="/#tarifs">Tarifs</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        {/* Icônes de réseaux sociaux */}
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/svetlana_studio40/?igsh=MTkwNzZqb3lzb283dg%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            {/* Icône Instagram */}
            <Image
              src="/Instagram_icon.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100074753333531" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            {/* Icône Facebook */}
            <FacebookIcon />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

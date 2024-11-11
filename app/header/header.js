import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

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
          <Link href="/appointment">Rendez-vous</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


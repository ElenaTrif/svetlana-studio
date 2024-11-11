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
          <Link href="/#tarifs">Tarifs</Link>
          <Link href="/#appointment">Rendez-vous</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        {/* Icônes de réseaux sociaux */}
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/svetlana_studio40/?igsh=MTkwNzZqb3lzb283dg%3D%3D" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            {/* Icône Instagram */}
            <Image 
              src="/instagram.svg" 
              alt="Instagram" 
              width={24} 
              height={24} 
            />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100074753333531" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            {/* Icône Facebook */}
            <Image 
              src="/facebook.svg" 
              alt="Facebook" 
              width={24} 
              height={24} 
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

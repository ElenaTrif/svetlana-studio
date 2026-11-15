"use client";
import styles from "./photos.module.css";

export default function Photos() {
  const photos = [
    "/photo1.jpg",
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",
    "/photo5.jpg",
    "/photo6.jpg",
    "/photo7.jpg",
    "/photo8.jpg",
    "/photo9.webp",
    "/photo10.webp",
    "/photo11.webp",
    "/photo12.webp",
    "/photo14.webp",
    "/photo15.webp",
    "/photo16.webp",
    "/photo17.webp",
    "/photo18.webp",
    "/photo19.webp",
    "/photo20.webp",
    "/photo21.webp",
    "/photo22.webp",
    "/photo23.webp",
    "/photo24.webp",
    "/photo25.webp",
    "/photo26.webp",
    "/photo27.webp",
    "/photo28.webp",
    "/photo29.webp",
    "/photo30.webp",
  ];

  return (
    <section className={styles.photos} id="photos">
      <h2 className={styles.sectionTitle}>Galérie</h2>
      <div className={styles.photoGrid}>
        {photos.map((photo, index) => (
          <div key={index} className={styles.photoItem}>
            <img src={photo} alt={`Photo ${index + 1}`} className={styles.photo} />
          </div>
        ))}
      </div>
    </section>
  );
}

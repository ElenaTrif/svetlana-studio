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

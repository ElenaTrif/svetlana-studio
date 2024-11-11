"use client";
import styles from "./photos.module.css";

export default function Photos() {
  const photos = [
    "/photo1.png",
    "/photo2.png",
    "/photo3.png",
    "/photo4.png",
    "/photo5.png",
    "/photo6.png",
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

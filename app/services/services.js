"use client";
import styles from "./services.module.css";

export default function Services() {
  const services = [
    {
      title: "Extension de cils",
      description: "Des extensions de cils pour un regard intense et naturel.",
      icon: "/eyelash-icon.svg", // Chemin vers l'icône
    },
    {
      title: "Architecture des sourcils",
      description: "Sourcils parfaitement dessinés pour équilibrer votre visage.",
      icon: "/brows-icon.svg", // Chemin vers l'icône
    },
    {
      title: "Soins du visage",
      description: "Des soins pour revitaliser et nourrir votre peau.",
      icon: "/facial-icon.svg", // Chemin vers l'icône
    },
  ];

  return (
    <section className={styles.services} id="services">
      <h2 className={styles.sectionTitle}>Nos Services</h2>
      <div className={styles.serviceList}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img src={service.icon} alt="" className={styles.serviceIcon} />
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

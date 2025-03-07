"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./avis.module.css";

const avisClients = [
    {
        note: "⭐⭐⭐⭐⭐",
        auteur: "Laura",
        commentaire: "Un excellent travail, à l'écoute et et un calme très apprécié. Un pure bonheur ! J’adore mes nouveaux cils ! Vous pouvez y aller les yeux fermés 😁",
    },
    {
        note: "⭐⭐⭐⭐⭐",
        auteur: "Claverie E.",
        commentaire: "Pose cil à cil est une merveille, agrandit le regard et met en valeur les yeux ! Bravo Svetlana et merci pour vos conseils et votre professionnalisme.",
    },
    {
        note: "⭐⭐⭐⭐⭐",
        auteur: "Robert M.",
        commentaire: "L’accueil de Svetlana vous met de suite en confiance. Très à l’écoute, son travail est très professionnel ! D ouceur et minutie ! Vivement mon prochain rendez-vous 😊",
    },
    {
        note: "⭐⭐⭐⭐⭐",
        auteur: "Robert M.",
        commentaire: "Très satisfaite de mes extensions de cils. Svetlana est vraiment très minutieuse et très douce. J’admire son travail effectué avec passion !",
    },
    {
        note: "⭐⭐⭐⭐⭐",
        auteur: "Tatiana P.",
        commentaire: "Un immense merci à cette merveilleuse professionnelle des cils ! Son travail est précis, soigné et réalisé avec beaucoup d’attention aux détails. Je recommande à 100 % ! 💖",
    },
    {
        note: "⭐⭐⭐⭐⭐",
        auteur: "Robert M.",
        commentaire: "A nouveau une séance très agréable, au calme avec Svetlana qui s’est très bien occupée de mes cils. Merci 🙏 beaucoup. Je recommande en toute confiance !",
    },
];

export default function Avis() {
    return (
        <section className={styles.avisSection} id="avis">
            <h2 className={styles.avisTitle}>Avis Clients</h2>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                className={styles.swiper}
            >
                {avisClients.map((avis, index) => (
                    <SwiperSlide key={index} className={styles.avisSlide}>
                        <div className={styles.avisCard}>
                            <p className={styles.note}>{avis.note}</p>
                            <p className={styles.commentaire}>"{avis.commentaire}"</p>
                            <p className={styles.auteur}>- {avis.auteur}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

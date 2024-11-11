// appointment.js
"use client";

import Link from 'next/link';
import { useEffect } from 'react';
import styles from './appointment.module.css';

const AppointmentPage = () => {
    const openSetmore = () => {
        window.open(
            "https://booking.setmore.com/scheduleappointment/735eb74d-0c35-4462-8d0e-e8ccec04489b", 
            "_blank", 
            "noopener,noreferrer"
        );
    };

    return (
        <div className={styles.appointmentPage}>
            <h1>Prendre un Rendez-vous</h1>
            
            {/* Utilise un bouton personnalisé avec votre propre style */}
            <button onClick={openSetmore} className={styles.submitButton}>
                Réserver avec Setmore
            </button>

            <div className={styles.backLink}>
                <Link href="/">Retour à l'accueil</Link>
            </div>
        </div>
    );
};

export default AppointmentPage;


"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './appointment.module.css';

const AppointmentPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); 
    const [date, setDate] = useState('');

    const googleAppsScriptUrl = "https://script.google.com/macros/s/AKfycbx8j3p7X2VzziTCvlOdDMx0qXBy-mquBi12HAKkf4ThONMNAO8Vsdype8ETyRY_GLiQ3A/exec";

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const params = new URLSearchParams({
            name,
            email,
            phone, // Téléphone avant la date
            date,
        });
    
        try {
            const response = await fetch(`${googleAppsScriptUrl}?${params.toString()}`, {
                method: "GET",
            });
    
            if (response.ok) {
                alert(`Merci ${name}, votre rendez-vous est enregistré pour le ${date}!`);
            } else {
                alert("Erreur lors de l'enregistrement du rendez-vous.");
            }
        } catch (error) {
            console.error("Erreur lors de l'enregistrement du rendez-vous :", error);
            alert("Une erreur est survenue lors de l'enregistrement du rendez-vous.");
        }
    
        setName('');
        setEmail('');
        setPhone(''); 
        setDate('');
    };

    return (
        <div className={styles.appointmentPage}>
            <h1>Prendre un Rendez-vous</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                    <label>Nom :</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={styles.inputField}
                    />
                </div>
                <div>
                    <label>Email :</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.inputField}
                    />
                </div>
                <div>
                    <label>Téléphone :</label> {/* Téléphone avant la date */}
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className={styles.inputField}
                    />
                </div>
                <div>
                    <label>Date :</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className={styles.inputField}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>
                    Réserver
                </button>
            </form>

            <div className={styles.backLink}>
                <Link href="/">
                    Retour à l'accueil
                </Link>
            </div>
        </div>
    );
};

export default AppointmentPage;

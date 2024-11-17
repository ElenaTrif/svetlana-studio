import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Svetlana Studio | Extension des cils à Ychoux, Biscarosse et Parentis",
  description: "Sublimez votre regard avec nos services d'extension des cils et d'architecture des sourcils. Rendez-vous chez Svetlana Studio à Ychoux.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content="https://svetlana-studio-5lvn.vercel.app" />
        <meta property="og:image" content="/images/preview.jpg" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD: Beauty Salon */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "BeautySalon",
            "name": "Svetlana Studio",
            "image": "https://svetlana-studio-5lvn.vercel.app/images/salon.jpg",
            "url": "https://svetlana-studio-5lvn.vercel.app",
            "telephone": "+33656675016",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Impasse des Résiniers",
              "addressLocality": "Ychoux",
              "postalCode": "40160",
              "addressCountry": "FR"
            },
            "openingHours": "Mo-Fr 09:00-17:00",
            "priceRange": "10€-50€",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "57"
            },
            "review": [
              {
                "@type": "Review",
                "author": "Claire R.",
                "datePublished": "2024-11-12",
                "reviewBody": "Service impeccable et résultat magnifique ! Merci Svetlana.",
                "name": "Extension des cils",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              },
              {
                "@type": "Review",
                "author": "Sophie L.",
                "datePublished": "2024-10-28",
                "reviewBody": "Les extensions de cils sont parfaites, je recommande vivement.",
                "name": "Architecture des sourcils",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                }
              }
            ]
          }
        ` }} />

        {/* JSON-LD: FAQ */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quels services propose Svetlana Studio ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nous proposons des extensions de cils, l'architecture des sourcils, et d'autres soins personnalisés."
                }
              },
              {
                "@type": "Question",
                "name": "Comment prendre rendez-vous ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vous pouvez prendre rendez-vous en nous appelant au +33656675016 ou via notre site web."
                }
              }
            ]
          }
        ` }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

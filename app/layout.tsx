import type { Metadata } from "next";
import { Gantari, Crete_Round } from "next/font/google";
import "./globals.css";

const gantari = Gantari({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapeService",
  name: "Rodriguez Landscaping & Gardening",
  telephone: "(559) 960-8804",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4460 E Madison Ave",
    addressLocality: "Fresno",
    addressRegion: "CA",
    postalCode: "93702",
    addressCountry: "US",
  },
  areaServed: { "@type": "City", name: "Fresno, CA" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "2",
    bestRating: "5",
  },
  description: "Local landscaping and gardening in east Fresno. Residential landscaping, garden maintenance, lawn care, pruning, and planting. Call (559) 960-8804.",
  sameAs: [
    "https://www.instagram.com/rodriguezlandscapingca/",
    "https://www.facebook.com/rodriguezlandscapingandgardeningservices/",
  ],
};

export const metadata: Metadata = {
  title: "Rodriguez Landscaping & Gardening | Fresno Lawn & Garden Services",
  description:
    "Fresno's local landscaping and gardening team. Residential landscaping, garden maintenance, lawn mowing, pruning, and planting in east Fresno. Call (559) 960-8804.",
  keywords: ["landscaping Fresno", "lawn care Fresno", "gardening Fresno", "lawn mowing Fresno", "garden maintenance Fresno"],
  openGraph: {
    title: "Rodriguez Landscaping & Gardening | Fresno",
    description: "Local, reliable landscaping and gardening in east Fresno. Call (559) 960-8804.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${gantari.variable} ${creteRound.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import ReactQueryProvider from "@/src/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/sonner";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AltaNettsider",
  description:
    "Profesjonelle nettsider for lokale bedrifter i Alta og Finnmark",
  url: "https://altanettsider.no",
  telephone: "+47-412-34-567",
  email: "kontakt@altanettsider.no",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Breidablikk 14",
    postalCode: "9511",
    addressLocality: "Alta",
    addressRegion: "Finnmark",
    addressCountry: "NO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "69.9689",
    longitude: "23.2716",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Alta",
    },
    {
      "@type": "State",
      name: "Finnmark",
    },
  ],
  serviceType: "Web Development",
  priceRange: "4900-14900 NOK",
  paymentAccepted: ["Cash", "Credit Card", "Invoice"],
  currenciesAccepted: "NOK",
  openingHours: "Mo-Fr 09:00-17:00",
  image: "https://altanettsider.no/logo.png",
  founder: {
    "@type": "Person",
    name: "Dave Kjellmarong",
  },
  sameAs: ["https://www.linkedin.com/in/davekjellmarong"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Nettsider for lokale bedrifter",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enkel nettside",
          description: "1-3 sider, responsivt design, kontaktskjema",
        },
        price: "4900",
        priceCurrency: "NOK",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Profesjonell nettside",
          description: "3-8 sider, bildegalleri, booking/bestilling",
        },
        price: "8900",
        priceCurrency: "NOK",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nettbutikk",
          description: "Komplett e-handel løsning",
        },
        price: "14900",
        priceCurrency: "NOK",
      },
    ],
  },
};

export const metadata: Metadata = {
  title: "Nettsider for lokale bedrifter i Alta - AltaNettsider",
  description:
    "Profesjonelle nettsider for lokale bedrifter i Alta og Finnmark. Jeg hjelper små bedrifter med å bli synlige på nett – raskt, enkelt og uten stress. Gratis forslag uten forpliktelser.",
  generator: "v0.dev",
  keywords:
    "nettsider for lokale bedrifter, nettsider Alta, nettsider Finnmark, små bedrifter nettside, lokal bedrift nettside, web utvikler Alta",
  authors: [{ name: "Dave Kjellmarong" }],
  creator: "Dave Kjellmarong",
  publisher: "AltaNettsider",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://altanettsider.no",
    siteName: "AltaNettsider",
    title: "Nettsider for lokale bedrifter i Alta - AltaNettsider",
    description:
      "Profesjonelle nettsider for lokale bedrifter i Alta og Finnmark. Fra 4,900 kr. Gratis forslag uten forpliktelser.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AltaNettsider - Nettsider for lokale bedrifter i Alta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nettsider for lokale bedrifter i Alta",
    description:
      "Profesjonelle nettsider for små bedrifter i Alta og Finnmark. Fra 4,900 kr.",
    images: ["/og-image.png"],
    creator: "@davekjellmarong",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%232563eb'/><text x='50' y='58' font-family='Arial,sans-serif' font-size='32' font-weight='bold' fill='white' text-anchor='middle'>A</text></svg>",
    shortcut:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%232563eb'/><text x='50' y='58' font-family='Arial,sans-serif' font-size='32' font-weight='bold' fill='white' text-anchor='middle'>A</text></svg>",
    apple:
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%232563eb'/><text x='50' y='58' font-family='Arial,sans-serif' font-size='32' font-weight='bold' fill='white' text-anchor='middle'>A</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <ReactQueryProvider>
          <main>{children}</main>
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}

import { LucideIcon, Star, Zap, ShoppingCart } from "lucide-react";

export interface PricingFeature {
  text: string;
  highlight?: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string; // For showing discounts
  description: string;
  icon: LucideIcon;
  features: PricingFeature[];
  popular?: boolean;
  buttonText?: string;
  deliveryTime?: string;
  ctaLink?: string;
}

export interface AdditionalService {
  name: string;
  price: string;
  description?: string;
}

// Main pricing plans - single source of truth
export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "startpakke",
    name: "Startpakke",
    price: "6.990",
    description:
      "Perfekt for små bedrifter som trenger en profesjonell tilstedeværelse på nett",
    icon: Star,
    deliveryTime: "1-2 uker",
    features: [
      { text: "Moderne, mobilvennlig design" },
      { text: "Inntil 3 sider (Hjem, Om oss, Kontakt)" },
      { text: "Kontaktskjema med e-post notifikasjoner" },
      { text: "Google Maps integrasjon" },
      { text: "Lenker til sosiale medier" },
      { text: "Grunnleggende SEO optimering" },
      { text: "SSL-sertifikat inkludert" },
      { text: "1 år hosting inkludert" },
    ],
    popular: false,
    buttonText: "Velg Startpakke",
    ctaLink: "/#contact",
  },
  {
    id: "bedriftspakke",
    name: "Bedriftspakke",
    price: "9.990",
    description: "For bedrifter som ønsker mer synlighet og funksjonalitet",
    icon: Zap,
    deliveryTime: "2-3 uker",
    features: [
      { text: "Alt i Startpakke +", highlight: true },
      { text: "Inntil 6 sider med tilpasset innhold" },
      { text: "Google My Business oppsett og optimering" },
      { text: "Google Analytics installasjon og oppsett" },
      { text: "Avansert SEO med søkeord research" },
      { text: "Billedegalleri/portfolio seksjon" },
    ],
    popular: true,
    buttonText: "Mest Populær",
    ctaLink: "/#contact",
  },
  {
    id: "avansert",
    name: "Avansert Løsning",
    price: "Fra 15.990",
    description: "Skreddersydd løsning med avanserte funksjoner",
    icon: ShoppingCart,
    deliveryTime: "3-6 uker",
    features: [
      { text: "Alt i Bedriftspakke +", highlight: true },
      { text: "Nettbutikk med betalingsløsninger" },
      { text: "Booking/reservasjonssystem" },
      { text: "Medlems-/kundeportaler" },
      { text: "Nyhetsbrev/blogg funksjonalitet" },
      { text: "Sosiale medier integrasjon (feed widgets)" },
      { text: "Skreddersydde funksjoner" },
      { text: "Opplæring og prioritert support" },
    ],
    popular: false,
    buttonText: "Kontakt for tilbud",
    ctaLink: "/#contact",
  },
];

// Additional services
export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    name: "Logo og visuell identitet",
    price: "",
    description: "Profesjonell logo og grafisk profil for din bedrift",
  },
  {
    name: "Tekst og innholdsproduksjon",
    price: "",
    description: "Profesjonell tekstforfatning og innholdsstrategi",
  },
  {
    name: "Løpende vedlikehold",
    price: "",
    description: "Månedlig vedlikehold, oppdateringer og support",
  },
  {
    name: "Spesialtilpasninger",
    price: "",
    description: "Skreddersydde funksjoner og integrasjoner",
  },
];

// Helper function to get plan by ID
export const getPlanById = (id: string): PricingPlan | undefined => {
  return PRICING_PLANS.find((plan) => plan.id === id);
};

// Helper function to get starting price (cheapest plan)
export const getStartingPrice = (): string => {
  const prices = PRICING_PLANS.map((plan) =>
    parseFloat(plan.price.replace(/\./g, "").replace(",", "."))
  );
  const minPrice = Math.min(...prices);
  return minPrice.toLocaleString("nb-NO");
};

// Formatted starting price for marketing copy
export const STARTING_PRICE = "6.990";
export const STARTING_PRICE_FORMATTED = "6.990 kr";

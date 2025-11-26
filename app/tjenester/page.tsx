import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Globe,
  Server,
  BarChart3,
  Smartphone,
  Search,
  MapPin,
  ShoppingCart,
  Calendar,
  Mail,
  Camera,
  Palette,
  Code,
  Shield,
  Zap,
  Users,
  MessageSquare,
  FileText,
  Settings,
  Headphones,
  Star,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Tjenester for Nettsider | Alta Nettsider - Komplett Webutvikling i Alta",
  description:
    "Jeg leverer alle tjenester du trenger for en suksessfull nettside: domene, hosting, design, SEO, Google Analytics, og mer. Komplett webutvikling i Alta og Finnmark.",
  keywords:
    "webutvikling tjenester Alta, domene registrering, webhosting Norge, SEO tjenester Finnmark, Google Analytics oppsett, nettside design Alta",
  openGraph: {
    title: "Tjenester for Nettsider | Alta Nettsider",
    description:
      "Komplett webutvikling med alle tjenester: domene, hosting, design, SEO og mer i Alta og Finnmark.",
    url: "https://altanettsider.no/tjenester",
    type: "website",
  },
};

const coreServices = [
  {
    title: "Nettside Design & Utvikling",
    description:
      "Moderne, responsiv nettside som fungerer perfekt på alle enheter",
    icon: Globe,
    features: [
      "Responsive design (mobil, tablet, desktop)",
      "Moderne og profesjonelt utseende",
      "Rask lastetid og god ytelse",
      "Brukervennlig navigasjon",
      "Tilpasset ditt brand og farger",
    ],
    category: "Utvikling",
  },
  {
    title: "Domene Registrering",
    description: "Sikre det perfekte domenenavnet for din bedrift",
    icon: Search,
    features: [
      ".no domene registrering",
      "Internasjonale domener (.com, .org, etc.)",
      "Domene fornyelse og administrasjon",
      "DNS konfiguration",
      "E-post viderekobling",
    ],
    category: "Hosting & Domene",
  },
  {
    title: "Webhosting",
    description: "Pålitelig og rask hosting for din nettside",
    icon: Server,
    features: [
      "99.9% oppetid garanti",
      "SSD lagring for rask ytelse",
      "Automatiske sikkerhetskopier",
      "SSL-sertifikat inkludert",
      "24/7 overvåking",
    ],
    category: "Hosting & Domene",
  },
  {
    title: "Google Analytics",
    description: "Følg med på besøkende og ytelse på nettsiden din",
    icon: BarChart3,
    features: [
      "Google Analytics 4 oppsett",
      "Konverteringssporing",
      "Månedlige rapporter",
      "Besøkerstatistikk",
      "Måloppnåelse tracking",
    ],
    category: "Markedsføring & SEO",
  },
];

const marketingServices = [
  {
    title: "Google My Business",
    description: "Bli synlig på Google Maps og lokale søk",
    icon: MapPin,
    features: [
      "Profil opprettelse og optimering",
      "Åpningstider og kontaktinfo",
      "Bilder og produktgalleri",
      "Kundeomtaler administrasjon",
      "Lokal SEO optimering",
    ],
    category: "Markedsføring & SEO",
  },
  {
    title: "SEO Optimering",
    description: "Bli funnet av dine kunder på Google",
    icon: Search,
    features: [
      "Søkeord research og analyse",
      "On-page SEO optimering",
      "Meta tags og beskrivelser",
      "Lokale søkeord fokus",
      "Månedlig SEO rapport",
    ],
    category: "Markedsføring & SEO",
  },
  {
    title: "Google Ads Oppsett",
    description: "Start med betalt annonsering på Google",
    icon: Zap,
    features: [
      "Kampanje opprettelse",
      "Søkeord research",
      "Annonsetekst optimering",
      "Landing page tilpasning",
      "Konverteringssporing",
    ],
    category: "Markedsføring & SEO",
  },
];

const businessServices = [
  {
    title: "Online Booking System",
    description: "La kunder bestille timer direkte på nettsiden",
    icon: Calendar,
    features: [
      "Kalender integrasjon",
      "Automatiske påminnelser",
      "Kunde administrasjon",
      "Betalingsintegrasjon",
      "SMS/e-post notifikasjoner",
    ],
    category: "Business Funksjonalitet",
  },
  {
    title: "Kontaktskjema & E-post",
    description: "Motta henvendelser direkte på e-post",
    icon: Mail,
    features: [
      "Tilpassede kontaktskjemaer",
      "E-post notifikasjoner",
      "Spam beskyttelse",
      "Automatiske svar",
      "Lead tracking",
    ],
    category: "Business Funksjonalitet",
  },
  {
    title: "E-handel Løsning",
    description: "Selg produkter direkte fra nettsiden din",
    icon: ShoppingCart,
    features: [
      "Produktkatalog",
      "Betalingsløsninger (Stripe, Vipps)",
      "Lager administrasjon",
      "Ordre håndtering",
      "Kunde database",
    ],
    category: "Business Funksjonalitet",
  },
];

const designServices = [
  {
    title: "Logo Design",
    description: "Profesjonelt logo som representerer din bedrift",
    icon: Palette,
    features: [
      "Unique logo design",
      "Flere design forslag",
      "Vektorformat (skalérbart)",
      "Fargevarianter",
      "Bruksrettigheter inkludert",
    ],
    category: "Design & Innhold",
  },
  {
    title: "Fotografering",
    description: "Profesjonelle bilder av din bedrift og produkter",
    icon: Camera,
    features: [
      "Bedriftsfotografering",
      "Produktbilder",
      "Team/personale bilder",
      "Lokaler og fasiliteter",
      "Bearbeidede høykvalitetsbilder",
    ],
    category: "Design & Innhold",
  },
  {
    title: "Tekstskriving",
    description: "Engasjerende innhold som selger",
    icon: FileText,
    features: [
      "SEO optimerte tekster",
      "Salgsrettede beskrivelser",
      "Om oss tekster",
      "Produktbeskrivelser",
      "Blogginnlegg",
    ],
    category: "Design & Innhold",
  },
];

const supportServices = [
  {
    title: "Vedlikehold & Support",
    description: "Hold nettsiden oppdatert og sikker",
    icon: Settings,
    features: [
      "Månedlige sikkerhetskopier",
      "Software oppdateringer",
      "Sikkerhetsovervåking",
      "Teknisk support",
      "Innholdsoppdateringer",
    ],
    category: "Support & Vedlikehold",
  },
  {
    title: "Kundesupport",
    description: "Hjelp når du trenger det",
    icon: Headphones,
    features: [
      "E-post support",
      "Telefonsupport",
      "Fjernhjelp (TeamViewer)",
      "Opplæring og veiledning",
      "Prioritert support tilgjengelig",
    ],
    category: "Support & Vedlikehold",
  },
];

const allServices = [
  ...coreServices,
  ...marketingServices,
  ...businessServices,
  ...designServices,
  ...supportServices,
];

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
        {/* Header Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <Badge
              variant="outline"
              className="mb-4 border-alta-blue text-alta-blue"
            >
              Komplett Webutvikling
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-alta-dark mb-6">
              Alt du trenger for en{" "}
              <span className="text-alta-blue">suksessfull nettside</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Fra domene og hosting til design og markedsføring - jeg leverer
              alle tjenester du trenger for å lykkes på nett. Én leverandør,
              komplett løsning.
            </p>
          </div>
        </section>

        {/* Core Services */}
        <section className="pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-alta-dark mb-4">
                Grunnleggende Tjenester
              </h2>
              <p className="text-gray-600">
                Alt du trenger for en profesjonell nettside
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="border-gray-200 hover:shadow-lg transition-all duration-300 group"
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="w-16 h-16 rounded-full bg-alta-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-alta-blue group-hover:text-white transition-colors">
                        <IconComponent className="h-8 w-8 text-alta-blue group-hover:text-white" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-alta-dark">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 text-sm">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <ul className="space-y-2 mb-4">
                        {service.features
                          .slice(0, 3)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-alta-blue flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                      </ul>

                      <div className="text-center">
                        <Badge variant="outline" className="text-xs">
                          {service.category}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Services Grid */}
        <section className="pb-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-alta-dark mb-4">
                Alle Tjenester
              </h2>
              <p className="text-gray-600">
                Komplett oversikt over alt jeg kan hjelpe deg med
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="border-gray-200 hover:shadow-md transition-all duration-200 h-full"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-lg bg-alta-blue/10 flex items-center justify-center">
                          <IconComponent className="h-5 w-5 text-alta-blue" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold text-alta-dark">
                            {service.title}
                          </CardTitle>
                          <Badge variant="outline" className="text-xs mt-1">
                            {service.category}
                          </Badge>
                        </div>
                      </div>
                      <CardDescription className="text-gray-600 text-sm">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <ul className="space-y-1.5 mb-4">
                        {service.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center gap-2 text-sm text-gray-600"
                            >
                              <div className="w-1 h-1 rounded-full bg-alta-blue flex-shrink-0 mt-2"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        {service.features.length > 4 && (
                          <li className="text-xs text-gray-500 italic">
                            + {service.features.length - 4} flere funksjoner
                          </li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-alta-dark mb-4">
                Slik jobber jeg
              </h2>
              <p className="text-gray-600">
                Fra første kontakt til ferdig nettside - min prosess
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Konsultasjon",
                  description: "Jeg diskuterer dine behov og ønsker",
                },
                {
                  step: "2",
                  title: "Planlegging",
                  description: "Jeg lager en detaljert plan og tidslinje",
                },
                {
                  step: "3",
                  title: "Utvikling",
                  description:
                    "Jeg bygger nettsiden med regelmessige oppdateringer",
                },
                {
                  step: "4",
                  title: "Lansering",
                  description: "Testing, lansering og opplæring",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-alta-blue text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-alta-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-alta-blue text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Klar for å komme i gang?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              La oss diskutere hvilke tjenester som passer best for din bedrift
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-alta-blue hover:bg-gray-100"
              >
                <Link href="/#contact">Få et tilbud</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-alta-blue"
              >
                <Link href="/priser">Se priser</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

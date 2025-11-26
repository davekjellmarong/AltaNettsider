import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PriceCard from "@/components/PriceCard";
import { Check, Crown, ShoppingCart, Calendar, Users } from "lucide-react";
import Link from "next/link";
import {
  PRICING_PLANS,
  ADDITIONAL_SERVICES,
  STARTING_PRICE,
} from "@/src/utils/pricing";

export const metadata: Metadata = {
  title:
    "Priser for Nettsider | Alta Nettsider - Transparente Priser for Lokale Bedrifter",
  description: `Se våre konkurransedyktige priser for nettsider til lokale bedrifter i Alta og Finnmark. Startpakke fra ${STARTING_PRICE} kr. Ingen skjulte kostnader, transparent prising.`,
  keywords:
    "nettsider pris Alta, hjemmeside kostnad Finnmark, billige nettsider Norge, priser webutvikling Alta, nettsider for små bedrifter pris",
  openGraph: {
    title: "Priser for Nettsider | Alta Nettsider",
    description: `Konkurransedyktige priser for nettsider til lokale bedrifter i Alta og Finnmark. Fra ${STARTING_PRICE} kr.`,
    url: "https://altanettsider.no/priser",
    type: "website",
  },
};

export default function PricingPage() {
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
              Transparente Priser
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-alta-dark mb-6">
              Priser for{" "}
              <span className="text-alta-blue">profesjonelle nettsider</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Jeg tilpasser løsningene til dine behov og budsjett. Her får du en
              oversikt over mine hovedpakker for nettsider til lokale bedrifter
              i Alta og Finnmark.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Skreddersydde løsninger</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Gratis konsultasjon</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Lokalt engasjement</span>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {PRICING_PLANS.map((plan) => (
                <PriceCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Solutions */}
        <section className="pb-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-alta-dark mb-4">
                Avanserte Løsninger
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trenger din bedrift noe mer avansert? Jeg kan skreddersy
                løsninger for alle behov. Kontakt meg for et tilpasset tilbud.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-gray-200 text-center p-6">
                <ShoppingCart className="h-12 w-12 text-alta-blue mx-auto mb-4" />
                <h3 className="font-bold text-alta-dark mb-2">E-handel</h3>
                <p className="text-gray-600 text-sm">
                  Nettbutikk med betalingsløsninger, produktkatalog og
                  ordrehåndtering
                </p>
              </Card>

              <Card className="border-gray-200 text-center p-6">
                <Calendar className="h-12 w-12 text-alta-blue mx-auto mb-4" />
                <h3 className="font-bold text-alta-dark mb-2">
                  Booking & Reservasjon
                </h3>
                <p className="text-gray-600 text-sm">
                  Online booking system for tjenester, timer og arrangementer
                </p>
              </Card>

              <Card className="border-gray-200 text-center p-6">
                <Users className="h-12 w-12 text-alta-blue mx-auto mb-4" />
                <h3 className="font-bold text-alta-dark mb-2">Kundeportaler</h3>
                <p className="text-gray-600 text-sm">
                  Innloggingsområder, medlemssider og kundedatabaser
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Card className="border-alta-blue bg-alta-blue/5 p-8 max-w-2xl mx-auto">
                <Crown className="h-16 w-16 text-alta-blue mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-alta-dark mb-4">
                  Skreddersydde Løsninger
                </h3>
                <p className="text-gray-600 mb-6">
                  Har du spesielle behov eller ønsker en helt unik løsning? Jeg
                  utvikler skreddersydde nettsider og webapplikasjoner tilpasset
                  akkurat din virksomhet.
                </p>
                <Button asChild className="bg-alta-blue hover:bg-alta-blue/90">
                  <Link href="/kontakt">Kontakt meg for tilbud</Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-alta-dark mb-4">
                Tilleggstjenester
              </h2>
              <p className="text-gray-600 mb-2">
                Komplett digital tilstedeværelse med tilleggstjenester
              </p>
              <p className="text-sm text-alta-blue font-medium">
                Alle priser på forespørsel - kontakt meg for tilbud
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {ADDITIONAL_SERVICES.map((service, index) => (
                <Card
                  key={index}
                  className="border-gray-200 hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-alta-dark mb-2">
                      {service.name}
                    </h3>
                    {service.description && (
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="pb-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-alta-dark mb-4">
                Ofte stilte spørsmål om priser
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Hvordan fungerer prissettingen?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Jeg lager alltid et skreddersydd tilbud basert på dine
                    spesifikke behov og ønsker. Prisene over er veiledende
                    startpriser for hver kategori.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Hva er inkludert?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Alle pakker inkluderer design, utvikling, testing og
                    lansering. Hosting og domene tilbys som separate tjenester
                    eller kan inkluderes i avtalen.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Kan løsningen utvides senere?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Absolutt! Jeg bygger nettsider som kan vokse med bedriften
                    din. Du kan enkelt legge til nye funksjoner og sider etter
                    behov.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Tilbyr du vedlikehold?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Jeg tilbyr fleksible vedlikeholdsavtaler tilpasset ditt
                    behov og budsjett. Ta kontakt for å diskutere mulighetene.
                  </p>
                </CardContent>
              </Card>
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
              La meg bygge den perfekte nettsiden for din bedrift i Alta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-alta-blue hover:bg-gray-100"
              >
                <Link href="/#contact">Start ditt prosjekt</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white bg-transparent text-white hover:bg-white hover:text-alta-blue"
              >
                <Link href="/nettsider-for-lokale-bedrifter">
                  Les mer om tjenestene
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

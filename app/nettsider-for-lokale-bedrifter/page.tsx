import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nettsider for lokale bedrifter i Alta og Finnmark | AltaNettsider",
  description:
    "Spesialist på nettsider for lokale bedrifter i Alta og Finnmark. Profesjonelle nettsider for små bedrifter - fra 4,900 kr. Gratis forslag uten forpliktelser. Kontakt Dave i dag!",
  keywords: "nettsider for lokale bedrifter, nettsider Alta, nettsider Finnmark, små bedrifter nettside, lokal bedrift nettside",
  openGraph: {
    title: "Nettsider for lokale bedrifter i Alta og Finnmark",
    description: "Profesjonelle nettsider for små bedrifter - fra 4,900 kr. Gratis forslag uten forpliktelser.",
    url: "https://altanettsider.no/nettsider-for-lokale-bedrifter",
    siteName: "AltaNettsider",
    locale: "nb_NO",
    type: "website",
  },
};

export default function NettisiderForLokaleBedrifterPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        {/* SEO-optimized hero section */}
        <section className="section bg-gradient-to-br from-alta-white to-alta-gray">
          <div className="container-custom text-center max-w-4xl mx-auto">
            <h1 className="heading-xl text-alta-dark mb-6">
              Nettsider for <span className="text-alta-blue">lokale bedrifter</span> i Alta og Finnmark
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Som spesialist på nettsider for lokale bedrifter, hjelper jeg små bedrifter i Alta og Finnmark med å bli synlige på nett. 
              Profesjonelle nettsider som faktisk gir deg flere kunder - fra 4,900 kr.
            </p>
            
            {/* Key benefits for local businesses */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/70 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-alta-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-alta-dark mb-2">Lokal ekspertise</h3>
                <p className="text-gray-600 text-sm">
                  Jeg forstår lokale bedrifter i Alta og hva som fungerer for kunder i Finnmark.
                </p>
              </div>
              
              <div className="bg-white/70 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-alta-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-alta-dark mb-2">Rask levering</h3>
                <p className="text-gray-600 text-sm">
                  Ferdig nettside på 1-2 uker. Perfekt for lokale bedrifter som vil komme raskt i gang.
                </p>
              </div>
              
              <div className="bg-white/70 rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-alta-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-alta-dark mb-2">Transparente priser</h3>
                <p className="text-gray-600 text-sm">
                  Fra 4,900 kr for enkel nettside. Alle kostnader er klare på forhånd - ingen skjulte gebyrer.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/kontakt" className="btn-primary py-4 px-8 text-lg font-semibold">
                Få gratis forslag nå
              </Link>
              <Link href="/eksempler" className="btn-secondary py-4 px-8 text-lg font-semibold">
                Se eksempler fra lokale bedrifter
              </Link>
            </div>
            
            {/* Local trust signals */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Basert i Alta, Finnmark • Personlig service til lokale bedrifter
              </p>
            </div>
          </div>
        </section>

        {/* Why choose local web developer section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="heading-lg text-alta-dark mb-8">
                Hvorfor velge en lokal utvikler for din bedrifts nettside?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-alta-dark mb-4">Forstår lokale bedrifter</h3>
                  <p className="text-gray-600 mb-6">
                    Som lokaleier i Alta forstår jeg utfordringene små bedrifter møter. Jeg vet hva som fungerer for kunder i Finnmark og hvordan man når lokale kunder online.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-alta-dark mb-4">Personlig oppfølging</h3>
                  <p className="text-gray-600">
                    Når du velger en lokal utvikler får du personlig service. Vi kan møtes ansikt til ansikt, og jeg er alltid tilgjengelig for spørsmål og oppdateringer.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-alta-dark mb-4">Lokal SEO-optimalisering</h3>
                  <p className="text-gray-600 mb-6">
                    Jeg optimaliserer nettsiden din for lokale søk i Alta og Finnmark. Dette betyr at kunder i området lettere finner din bedrift når de søker etter tjenestene dine.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-alta-dark mb-4">Rask responstid</h3>
                  <p className="text-gray-600">
                    Siden vi er i samme tidssone og geografiske område, får du rask respons på henvendelser og rask hjelp hvis noe skulle oppstå med nettsiden din.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Marketing Services Section */}
        <section className="section bg-gradient-to-b from-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="heading-lg text-alta-dark mb-4">
                Mer enn bare en nettside
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Vi hjelper lokale bedrifter med å bli funnet og forstå sine kunder gjennom kraftige Google-verktøy som de fleste ikke vet om.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Google My Business */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-alta-dark">Google My Business Oppsett</h3>
                </div>
                
                <p className="text-gray-700 text-lg mb-6">
                  De fleste lokale bedrifter vet ikke at de kan dukke opp på Google Maps og få gratis anmeldelser. 
                  Vi setter opp din Google My Business-profil så kunder finner deg når de søker i Alta.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-alta-dark">Synlig på Google Maps</p>
                      <p className="text-sm text-gray-600">Kunder finner deg når de søker "frisør Alta" eller lignende</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-alta-dark">Kundeanmeldelser</p>
                      <p className="text-sm text-gray-600">Få 5-stjernes anmeldelser som bygger tillit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-alta-dark">Gratis markedsføring</p>
                      <p className="text-sm text-gray-600">Del nyheter og tilbud direkte til lokale kunder</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Google My Business Visual */}
              <div className="relative">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">G</span>
                    </div>
                    <h4 className="font-semibold text-gray-800">Eks: Alta Frisørsalong</h4>
                    <div className="flex justify-center mt-2">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                      <span className="text-sm text-gray-600 ml-2">4.8 (23 anmeldelser)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span className="text-gray-700">Markens gate 5, 9510 Alta</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-gray-700">+47 78 12 34 56</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-green-600 font-medium">Åpent • Stenger 17:00</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm font-medium">Ring</button>
                      <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded text-sm font-medium">Veibeskrivelse</button>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  GRATIS!
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Analytics Visual */}
              <div className="lg:order-2">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-800">Nettside Statistikk</h4>
                    <span className="text-xs text-gray-500">Siste 30 dager</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">847</div>
                      <div className="text-xs text-gray-600">Besøkende</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">23</div>
                      <div className="text-xs text-gray-600">Kontakter</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">73%</div>
                      <div className="text-xs text-gray-600">Fra Alta</div>
                    </div>
                  </div>
                  
                  {/* Simple chart visualization */}
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <span className="text-xs text-gray-600 w-16">Google</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '65%'}}></div>
                      </div>
                      <span className="text-xs text-gray-600">65%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-600 w-16">Direkte</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                      <span className="text-xs text-gray-600">25%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-600 w-16">Facebook</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{width: '10%'}}></div>
                      </div>
                      <span className="text-xs text-gray-600">10%</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Analytics Description */}
              <div className="lg:order-1">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-alta-dark">Google Analytics & Rapporter</h3>
                </div>
                
                <p className="text-gray-700 text-lg mb-6">
                  Få innsikt i hvem som besøker nettsiden din. Vi setter opp Google Analytics og sender deg månedlige rapporter 
                  på norsk som viser hvor mange kunder du får fra nettsiden.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-alta-dark">Hvor mange besøker nettsiden din?</p>
                      <p className="text-sm text-gray-600">Se antall besøkende per dag, uke og måned</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-alta-dark">Hvor kommer kundene fra?</p>
                      <p className="text-sm text-gray-600">Google, Facebook, direkte besøk eller andre nettsider</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-alta-dark">Månedlige rapporter på norsk</p>
                      <p className="text-sm text-gray-600">Enkle rapporter som viser om nettsiden fungerer for bedriften din</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <div className="bg-alta-blue/5 rounded-xl p-8 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-alta-dark mb-4">
                  Inkludert i alle pakker fra Profesjonell side (8,900 kr)
                </h3>
                <p className="text-gray-600 mb-6">
                  Google My Business oppsett og Analytics er inkludert uten ekstra kostnad. 
                  Vi hjelper deg å forstå og forbedre din online tilstedeværelse.
                </p>
                <Link href="/kontakt" className="btn-primary text-lg px-8 py-4">
                  Få gratis forslag på komplett pakke
                </Link>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Pricing />
        <Portfolio />
      </div>
      <Footer />
    </main>
  );
}
import React from 'react';
import Link from 'next/link';

// Feature icons helper
const getFeatureIcon = (feature: string) => {
  if (feature.includes('sider') || feature.includes('side')) {
    return (
      <svg className="w-4 h-4 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
  }
  if (feature.includes('SEO')) {
    return (
      <svg className="w-4 h-4 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    );
  }
  if (feature.includes('hosting') || feature.includes('Hosting')) {
    return (
      <svg className="w-4 h-4 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    );
  }
  if (feature.includes('domain') || feature.includes('Domain')) {
    return (
      <svg className="w-4 h-4 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    );
  }
  if (feature.includes('support') || feature.includes('Support')) {
    return (
      <svg className="w-4 h-4 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
      </svg>
    );
  }
  // Default check icon
  return (
    <svg className="w-4 h-4 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
};

const pricingPlans = [
  {
    name: "Enkel side",
    price: "4 900",
    description: "For små firmaer med én tjeneste.",
    features: [
      "1-3 sider",
      "Responsivt design",
      "Kontaktskjema",
      "Grunnleggende SEO",
      "Google Analytics oppsett",
      "Domenehjelp",
      "1 år hosting inkludert"
    ],
    recommended: false
  },
  {
    name: "Profesjonell side",
    price: "8 900",
    description: "Flere sider, galleri eller booking.",
    features: [
      "3-8 sider",
      "Bildegalleri",
      "Booking/bestilling",
      "Avansert SEO",
      "Google My Business oppsett",
      "Google Analytics + rapporter",
      "Domenehjelp",
      "1 år hosting inkludert",
      "Prioritert support"
    ],
    recommended: true
  },
  {
    name: "Nettbutikk",
    price: "14 900",
    description: "Shopify eller Sanity-løsning.",
    features: [
      "Komplett nettbutikk",
      "Produkthåndtering",
      "Betalingsløsninger",
      "Lagerintegrasjon",
      "Avansert SEO",
      "Google My Business oppsett",
      "E-handel Analytics",
      "Domenehjelp",
      "1 år hosting inkludert",
      "Opplæring inkludert"
    ],
    recommended: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="section bg-alta-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-alta-dark mb-4">Pris og løsninger</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transparente priser uten skjulte kostnader. Velg løsningen som passer din bedrift best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-xl p-8 transition-all duration-300 border-2 ${
                plan.recommended 
                  ? 'border-alta-blue shadow-2xl shadow-alta-blue/25 transform hover:scale-105' 
                  : 'border-gray-100 hover:border-alta-blue/30 shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-alta-blue to-alta-blue-light text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-alta-blue to-alta-blue-light rounded-full blur opacity-75"></div>
                    <span className="relative">⭐ Mest populær</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-alta-dark mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-alta-blue">{plan.price}</span>
                  <span className="text-gray-600"> kr</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0">
                      {getFeatureIcon(feature)}
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/kontakt" 
                className={`block w-full text-center py-3 px-6 rounded-md font-medium transition-colors ${
                  plan.recommended 
                    ? 'bg-alta-blue text-white hover:bg-alta-blue/90' 
                    : 'bg-alta-white text-alta-dark border border-alta-blue hover:bg-alta-gray'
                }`}
              >
                Velg denne
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-alta-dark mb-4">
            Alle løsninger inkluderer
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-gray-600 mb-6">
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-alta-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Domenehjelp
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-alta-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hosting
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-5 h-5 text-alta-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Trygg oppfølging
            </div>
          </div>
          
          {/* Trust reassurance */}
          <div className="pt-6 border-t border-gray-200">
            <p className="text-alta-blue font-medium flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Du betaler ingenting før du har godkjent første forslag.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
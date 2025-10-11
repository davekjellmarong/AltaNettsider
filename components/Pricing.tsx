import React from 'react';
import Link from 'next/link';

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
      "Google My Business",
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
              className={`relative bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border-2 ${
                plan.recommended ? 'border-alta-blue' : 'border-gray-100'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-alta-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                    Mest populær
                  </span>
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
                    <svg 
                      className="w-5 h-5 text-alta-blue mt-0.5 mr-3 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
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
          <div className="grid md:grid-cols-3 gap-6 text-gray-600">
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
        </div>
      </div>
    </section>
  );
};

export default Pricing;
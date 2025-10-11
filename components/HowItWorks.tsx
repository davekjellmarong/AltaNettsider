import React from 'react';
import Link from 'next/link';

const steps = [
  {
    number: "1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Gratis forslag",
    description: "Du får et utkast uten forpliktelser."
  },
  {
    number: "2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Utvikling & lansering",
    description: "Vi bygger sammen."
  },
  {
    number: "3",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Drift & støtte",
    description: "Jeg tar hånd om alt det tekniske."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-alta-dark mb-4">Hvordan det fungerer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enkel prosess fra idé til ferdig nettside – ingen kompliserte tekniske detaljer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines for desktop */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-alta-blue via-alta-blue-light to-alta-blue opacity-30"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step number circle */}
              <div className="mx-auto w-16 h-16 bg-alta-blue text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 relative z-10 group-hover:bg-alta-blue-light transition-colors duration-300">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="flex justify-center text-alta-blue mb-4 group-hover:text-alta-blue-light transition-colors duration-300">
                {step.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-alta-dark mb-2 group-hover:text-alta-blue transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Klar for å komme i gang?
          </p>
          <Link href="/kontakt" className="btn-primary">
            Start her
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
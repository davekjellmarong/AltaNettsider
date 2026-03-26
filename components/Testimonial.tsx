import React from 'react';

const Testimonial = () => {
  return (
    <section className="section bg-gradient-to-br from-alta-blue/5 to-alta-gray">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-lg text-alta-dark mb-3">Hvorfor velge AltaNettsider?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              En lokal partner som kjenner Alta – og som leverer nettsider som faktisk fungerer for din bedrift.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-alta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-alta-dark mb-2">Rask levering</h4>
              <p className="text-gray-500 text-sm">Fra idé til ferdig nettside på 1–3 uker</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-alta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-alta-dark mb-2">Lokal forankring</h4>
              <p className="text-gray-500 text-sm">Basert i Alta, forstår lokale behov</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-alta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-alta-dark mb-2">Komplett løsning</h4>
              <p className="text-gray-500 text-sm">Alt fra design til hosting og vedlikehold</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

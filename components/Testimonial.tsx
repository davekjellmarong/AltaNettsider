import React from 'react';

const Testimonial = () => {
  return (
    <section className="section bg-gradient-to-br from-alta-blue/5 to-alta-gray">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-lg text-alta-dark mb-12">Hva sier kundene mine?</h2>
          
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 relative">
            {/* Quote icon */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="w-12 h-12 bg-alta-blue rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 italic">
              "Vi fikk en moderne nettside på under en uke – og fikk første kunde samme uke."
            </blockquote>
            
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-alta-blue to-alta-blue-light rounded-full flex items-center justify-center text-white font-bold text-xl">
                O
              </div>
              <div className="text-left">
                <p className="font-semibold text-alta-dark text-lg">Ola Nordmann</p>
                <p className="text-gray-600">Daglig leder, DinDrenering.no</p>
              </div>
            </div>
            
            {/* Success metrics */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-alta-blue mb-1">+40%</div>
                  <div className="text-sm text-gray-600">flere henvendelser</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-alta-blue mb-1">1 uke</div>
                  <div className="text-sm text-gray-600">fra start til lansering</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-alta-blue mb-1">100%</div>
                  <div className="text-sm text-gray-600">fornøyd kunde</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
import React from 'react';
import Image from 'next/image';

const projectShowcase = [
  {
    title: "DinDrenering",
    category: "Markedsplass",
    url: "dindrenering.no",
    image: "/dindrenering.png",
    description: "Markedsplass for dreneringstjenester",
    deliveryTime: "2 uker",
    features: "Mobilvennlig, Søkefunksjon",
    result: "Økt synlighet"
  },
  {
    title: "Minihjørne", 
    category: "E-handel",
    url: "minihjorne.no",
    image: "/minihjorne.png",
    description: "Markedsplass for brukte barneklær",
    deliveryTime: "3 uker",
    features: "Brukerregistrering, Betalingsløsning",
    result: "Aktive brukere"
  }
];

const Testimonial = () => {
  return (
    <section className="section bg-gradient-to-br from-alta-blue/5 to-alta-gray">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="heading-lg text-alta-dark mb-12">Våre Prosjekter</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projectShowcase.map((project, index) => (
              <div
                key={index}
                className="group transform transition-all duration-500 hover:-translate-y-2"
              >
                {/* Laptop Frame */}
                <div className="relative bg-gray-800 rounded-t-xl p-3 shadow-xl border border-gray-700 group-hover:shadow-2xl group-hover:shadow-alta-blue/25 transition-all duration-500">
                  {/* Category tag */}
                  <div className="absolute -top-3 left-4 bg-gradient-to-r from-alta-blue to-blue-600 text-white text-xs px-4 py-1 rounded-full font-semibold z-10 shadow-lg">
                    {project.category}
                  </div>
                  
                  {/* Laptop screen bezel */}
                  <div className="bg-black rounded-lg p-4 border border-gray-600">
                    {/* Browser bar */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex space-x-1">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full transition-all duration-300 group-hover:bg-red-400"></div>
                        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full transition-all duration-300 group-hover:bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full transition-all duration-300 group-hover:bg-green-400"></div>
                      </div>
                      <div className="flex-1 bg-gray-700 rounded text-xs text-gray-400 px-3 py-1.5 font-mono">
                        {project.url}
                      </div>
                    </div>
                    
                    {/* Website preview */}
                    <div className="relative h-48 bg-white rounded-md overflow-hidden border border-gray-200 shadow-inner">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Success metric overlay */}
                      <div className="absolute bottom-3 right-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold shadow-lg">
                        ✓ {project.result}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Project info card */}
                <div className="bg-white rounded-b-xl shadow-xl border border-gray-200 border-t-0 p-6 group-hover:shadow-2xl transition-all duration-500">
                  <h3 className="text-xl font-bold text-alta-dark mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-alta-dark mb-6">Hvorfor velge Alta Nettsider?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-16 h-16 bg-alta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-alta-dark mb-2">Rask levering</h4>
                <p className="text-gray-600 text-sm">Fra idé til ferdig nettside på 1-3 uker</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-alta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-alta-dark mb-2">Lokal forankring</h4>
                <p className="text-gray-600 text-sm">Basert i Alta, forstår lokale behov</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-alta-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-alta-dark mb-2">Komplett løsning</h4>
                <p className="text-gray-600 text-sm">Alt fra design til hosting og vedlikehold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
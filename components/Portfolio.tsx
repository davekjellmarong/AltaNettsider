"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  description: string;
  clientType: string;
  purpose: string;
  stack: string;
  techTag?: string;
  successMetric?: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    title: "DinDrenering",
    category: "Drenering",
    image: "/dindrenering.png",
    description: "Et nettsted for å finne lokale bedrifter som kan hjelpe utføre drenere.",
    clientType: "Tjenestebedrift",
    purpose: "Markedsplass for dreneringstjenester",
    stack: "Next.js, Tailwind CSS",
    techTag: "Next.js + Tailwind",
    successMetric: "+40% flere henvendelser etter lansering"
  },
  {
    title: "Minihjørne",
    category: "Brukte barneklær",
    image: "/minihjorne.png",
    description: "En plattform for kjøp og salg av brukte barneklær.",
    clientType: "E-handel",
    purpose: "Markedsplass for brukte barneklær",
    stack: "React, Node.js, Stripe",
    techTag: "React + Stripe",
    successMetric: "300+ aktive brukere første måned"
  },
  {
    title: "Alta Tannlege",
    category: "Helse",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    description: "Moderne nettside for tannlegepraksis med booking-system.",
    clientType: "Helsepraksis",
    purpose: "Presentasjon og booking",
    stack: "Next.js, Sanity CMS",
    techTag: "Next.js + CMS",
    successMetric: "60% flere bookinger online"
  },
  {
    title: "Nordlys Rørlegger",
    category: "Håndverk",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800",
    description: "Nettside for lokal rørleggerbedrift med tjenesteoversikt.",
    clientType: "Håndverksbedrift",
    purpose: "Tjenestepresentasjon og kontakt",
    stack: "WordPress, Custom Theme",
    techTag: "WordPress + SEO",
    successMetric: "Top 3 på Google for 'rørlegger Alta'"
  }
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  return (
    <section id="portfolio" className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-alta-dark mb-4">Tidligere arbeid</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Se eksempler på nettsider jeg har laget for lokale bedrifter i Alta og omegn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedProject(item)}
            >
              {/* Laptop Frame */}
              <div className="relative bg-gray-800 rounded-t-lg p-2 shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                {/* Tech tag */}
                {item.techTag && (
                  <div className="absolute -top-3 left-4 bg-alta-blue text-white text-xs px-3 py-1 rounded-full font-medium z-10">
                    {item.techTag}
                  </div>
                )}
                
                {/* Laptop screen bezel */}
                <div className="bg-black rounded-lg p-4">
                  {/* Browser bar */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-gray-700 rounded text-xs text-gray-400 px-2 py-1">
                      {item.title.toLowerCase()}.no
                    </div>
                  </div>
                  
                  {/* Website preview */}
                  <div className="relative h-48 bg-white rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Success metric */}
                    {item.successMetric && (
                      <div className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        📈 {item.successMetric}
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-alta-blue bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm mb-3">{item.category}</p>
                        <span className="inline-block bg-white text-alta-blue px-4 py-2 rounded-md font-medium">
                          Vis prosjekt
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Laptop base */}
                <div className="h-2 bg-gray-600 rounded-b-lg"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-semibold text-alta-dark mb-4">
              Har du et prosjekt i tankene?
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              La meg lage en tilsvarende løsning for din bedrift. Gratis forslag og ingen forpliktelser.
            </p>
            <Link href="/kontakt" className="btn-primary text-lg px-8 py-4">
              Få gratis forslag nå
            </Link>
          </div>
        </div>
      </div>

      {/* Modal for project details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-alta-dark">{selectedProject.title}</h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-alta-dark mb-2">Beskrivelse</h4>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-alta-dark mb-2">Klienttype</h4>
                    <p className="text-gray-600">{selectedProject.clientType}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-alta-dark mb-2">Formål</h4>
                    <p className="text-gray-600">{selectedProject.purpose}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-alta-dark mb-2">Teknologi</h4>
                    <p className="text-gray-600">{selectedProject.stack}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <Link href="/kontakt" className="btn-primary" onClick={() => setSelectedProject(null)}>
                  Få tilsvarende løsning
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;

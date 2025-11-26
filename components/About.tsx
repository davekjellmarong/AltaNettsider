import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <section id="about" className="section bg-alta-gray">
      <div className="container-custom">
        {/* Business visual element instead of personal photo */}
        <div className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-alta-dark mb-4">Om meg</h2>
            <p className="text-alta-blue font-semibold italic text-xl mb-8">
              "Enkle nettsider som gir resultater for lokale bedrifter"
            </p>
            
            {/* Alta business graphic */}
            <div className="relative bg-gradient-to-br from-white to-alta-gray rounded-xl p-8 shadow-lg border border-gray-100 mb-8">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-alta-blue rounded-full opacity-10"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-alta-blue-light rounded-full opacity-10"></div>
              
              <div className="relative grid md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-alta-blue/10 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-alta-dark">Basert i Alta</h3>
                  <p className="text-sm text-gray-600">Finnmark, Norge</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-alta-blue/10 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-alta-dark">Mobilvennlig</h3>
                  <p className="text-sm text-gray-600">Fungerer på alle enheter</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-alta-blue/10 rounded-full flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-alta-dark">Rask levering</h3>
                  <p className="text-sm text-gray-600">1-2 uker</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center">
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Jeg heter Dave og lager moderne nettsider for lokale bedrifter i Alta og Finnmark. Som liten aktør forstår jeg utfordringene små bedrifter møter, og lager enkle løsninger som faktisk gir deg flere kunder.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Basert i Alta kjenner jeg området og hvordan lokale bedrifter tenker. Jeg tror på enkle løsninger som bare fungerer, uten masse teknisk pirk eller unødvendig kompleksitet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/70 rounded-lg p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-alta-blue/10 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-alta-blue">Mitt mål</h4>
              </div>
              <p className="text-gray-700">
                At din bedrift skal få flere kunder gjennom en <Link href="/nettsider-for-lokale-bedrifter" className="text-alta-blue hover:underline font-medium">nettside som faktisk fungerer for deg</Link>.
              </p>
            </div>
            <div className="bg-white/70 rounded-lg p-6 border border-gray-100 shadow-sm">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-alta-blue/10 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-alta-blue">Vår tilnærming</h4>
              </div>
              <p className="text-gray-700">
                Ingen oppblåst teknisk språk. Bare ærlig rådgivning og <Link href="/nettsider-for-lokale-bedrifter" className="text-alta-blue hover:underline font-medium">nettsider for lokale bedrifter</Link> som passer din bedrift.
              </p>
            </div>
          </div>

          {/* Local credentials with Finnmark outline */}
          <div className="flex items-center justify-center pt-8">
            <div className="bg-white rounded-full px-6 py-3 shadow-sm border border-gray-200 flex items-center space-x-3">
              <svg className="w-6 h-6 text-alta-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-gray-800 font-medium">Basert i Alta, Finnmark</span>
              <div className="w-8 h-6 bg-gradient-to-b from-alta-blue to-alta-blue-light opacity-20 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

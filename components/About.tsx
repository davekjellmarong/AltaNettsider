import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="section bg-alta-gray">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-alta-blue rounded-full opacity-20"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-alta-blue-light rounded-full opacity-10"></div>
          
          {/* Dave's photo */}
          <div className="relative bg-white p-4 rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
              alt="Dave - Web utvikler i Alta"
              className="rounded-lg w-full h-auto object-cover"
              width={600}
              height={400}
            />
            
            {/* Local context overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-lg p-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-alta-dark">Dave Kjellmarong</p>
                  <p className="text-xs text-gray-600">Web utvikler, Alta</p>
                </div>
                {/* Alta location pin */}
                <div className="flex items-center text-xs text-alta-blue">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Alta, Finnmark
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="heading-lg text-alta-dark">Om meg</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Jeg heter Dave og bor i Alta. Jeg lager moderne nettsider for lokale bedrifter — med fokus på enkelhet, fart og at du faktisk får kunder via siden din.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Som en som har bodd i Alta i mange år, forstår jeg hvordan lokale bedrifter tenker og hva som fungerer her. Jeg tror på enkle løsninger som bare fungerer, uten masse teknisk pirk.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white/50 rounded-lg p-6 border border-gray-100">
              <h4 className="text-xl font-semibold text-alta-blue mb-2">Mitt mål</h4>
              <p className="text-gray-700">
                At din bedrift skal få flere kunder gjennom en nettside som faktisk fungerer for deg.
              </p>
            </div>
            <div className="bg-white/50 rounded-lg p-6 border border-gray-100">
              <h4 className="text-xl font-semibold text-alta-blue mb-2">Min tilnærming</h4>
              <p className="text-gray-700">
                Ingen oppblåst teknisk språk. Bare ærlig rådgivning og løsninger som passer din bedrift.
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

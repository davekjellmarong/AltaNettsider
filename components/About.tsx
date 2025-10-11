import Image from "next/image"

const About = () => {
  return (
    <section id="about" className="section bg-alta-gray">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-alta-blue rounded-full opacity-20"></div>
          <div className="relative bg-white p-4 rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team working on web development"
              className="rounded-lg w-full h-auto object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="heading-lg text-alta-dark">Om meg</h2>
          <p className="text-gray-600 text-lg">
            Jeg heter Dave og bor i Alta. Jeg lager moderne nettsider for lokale bedrifter — med fokus på enkelhet, fart og at du faktisk får kunder via siden din.
          </p>
          <p className="text-gray-600">
            Som en som har bodd i Alta i mange år, forstår jeg hvordan lokale bedrifter tenker og hva som fungerer her. Jeg tror på enkle løsninger som bare fungerer, uten masse teknisk pirk.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h4 className="text-xl font-semibold text-alta-blue mb-2">Mitt mål</h4>
              <p className="text-gray-600">
                At din bedrift skal få flere kunder gjennom en nettside som faktisk fungerer for deg.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-alta-blue mb-2">Min tilnærming</h4>
              <p className="text-gray-600">
                Ingen oppblåst teknisk språk. Bare ærlig rådgivning og løsninger som passer din bedrift.
              </p>
            </div>
          </div>

          {/* Local anchor element */}
          <div className="flex items-center pt-6">
            <svg className="w-6 h-6 text-alta-blue mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-gray-600 font-medium">Basert i Alta, Finnmark</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

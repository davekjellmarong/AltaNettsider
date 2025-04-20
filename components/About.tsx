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
          <h2 className="heading-lg text-alta-dark">Om AltaNettsider</h2>
          <p className="text-gray-600">
            AltaNettsider er et lokalt webdesign-byrå basert i Alta, Norge. Vi fokuserer på å hjelpe lokale bedrifter
            med å etablere og forbedre deres digitale tilstedeværelse gjennom moderne, brukervennlige nettsider.
          </p>
          <p className="text-gray-600">
            Med vår dype forståelse av det lokale markedet i Alta og omegn, kan vi skape skreddersydde løsninger som gir
            reell verdi for din bedrift og hjelper deg å nå ut til flere kunder.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div>
              <h4 className="text-xl font-semibold text-alta-blue mb-2">Vår Misjon</h4>
              <p className="text-gray-600">
                Å hjelpe lokale bedrifter i Alta med å lykkes i den digitale verden gjennom profesjonelle nettsider.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-alta-blue mb-2">Våre Verdier</h4>
              <p className="text-gray-600">
                Kundefokus, lokalt engasjement, kvalitet og innovasjon er kjerneverdiene som driver alt vi gjør.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

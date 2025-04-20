import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-alta-white to-alta-gray">
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="heading-xl text-alta-dark">
            Lokale <span className="text-alta-blue">nettsider</span> for din bedrift i Alta
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Vi utvikler moderne, brukervennlige og responsive nettsider som hjelper din bedrift å vokse og nå ut til
            flere kunder i Alta og omegn.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="#contact" className="btn-primary">
              Få et tilbud
            </Link>
            <Link href="#services" className="btn-secondary">
              Se våre tjenester
            </Link>
          </div>
        </div>
        <div className="relative animate-fade-in-right">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-alta-blue-light rounded-full opacity-20"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-alta-blue rounded-full opacity-20"></div>
          <div className="relative bg-white p-4 rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              alt="Web development illustration"
              className="rounded-lg w-full h-auto object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

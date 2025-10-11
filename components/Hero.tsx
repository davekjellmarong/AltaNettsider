import Image from "next/image"
import Link from "next/link"

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-alta-white to-alta-gray relative overflow-hidden">
      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent"></div>
      
      <div className="container-custom grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-6 animate-fade-in">
          <h1 className="heading-xl text-alta-dark">
            Profesjonelle <span className="text-alta-blue">nettsider</span> for små bedrifter i Alta
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Jeg hjelper lokale bedrifter med å bli synlige på nett – raskt, enkelt og uten stress.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/kontakt" className="btn-primary">
              Få gratis forslag
            </Link>
            <Link href="/eksempler" className="btn-secondary">
              Se eksempler
            </Link>
          </div>
          
          {/* Trust line */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 flex items-center">
              <svg className="w-4 h-4 text-alta-blue mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Over 10 lokale bedrifter i Alta har fått nettside av meg.
            </p>
          </div>
        </div>
        <div className="relative animate-fade-in-right">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-alta-blue-light rounded-full opacity-20"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-alta-blue rounded-full opacity-20"></div>
          <div className="relative bg-white p-4 rounded-xl shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
              alt="Lokale bedrifter i Alta sentrum"
              className="rounded-lg w-full h-auto object-cover"
              width={600}
              height={400}
            />
            {/* Overlay with local context */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-lg p-3">
              <p className="text-sm text-alta-dark font-medium">
                💼 Lokale bedrifter i Alta som får flere kunder online
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

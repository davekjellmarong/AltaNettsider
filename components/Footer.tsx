import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-alta-dark text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">AltaNettsider</h3>
            <p className="text-gray-300">
              Vi skaper moderne og brukervennlige nettsider for lokale bedrifter i Alta og omegn.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-gray-300">
              <li>E-post: kontakt@altanettsider.no</li>
              <li>Telefon: +47 123 45 678</li>
              <li>Adresse: Altaveien 123, 9510 Alta</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Lenker</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Hjem
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                  Tjenester
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Prosjekter
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AltaNettsider. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

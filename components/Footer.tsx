import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-alta-dark text-white py-12 md:py-16">
      <div className="container-custom px-4 md:px-8">
        <div className="text-center space-y-6 md:space-y-8">
          {/* LinkedIn CTA */}
          <div className="bg-gradient-to-r from-transparent via-gray-800/30 to-transparent p-6 md:p-8 rounded-xl border border-gray-700/50">
            <p className="text-gray-300 mb-4 text-sm md:text-base">
              Følg meg på LinkedIn for oppdateringer og tips om web
            </p>
            <a 
              href="https://linkedin.com/in/davekjellmarong" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              Følg på LinkedIn
            </a>
          </div>

          {/* Logo/Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Alta<span className="text-alta-blue-light">Nettsider</span>
            </h3>
          </div>

          {/* Navigation Links */}
          <div className="border-t border-gray-700/50 pt-6 md:pt-8">
            <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6">
              <Link
                href="/"
                className="text-gray-300 hover:text-alta-blue-light transition-colors duration-300 hover:underline px-2 py-1"
              >
                Hjem
              </Link>
              <div className="text-gray-600">|</div>
              <Link
                href="/om"
                className="text-gray-300 hover:text-alta-blue-light transition-colors duration-300 hover:underline px-2 py-1"
              >
                Om meg
              </Link>
              <div className="text-gray-600">|</div>
              <Link
                href="/tjenester"
                className="text-gray-300 hover:text-alta-blue-light transition-colors duration-300 hover:underline px-2 py-1"
              >
                Tjenester
              </Link>
              <div className="text-gray-600">|</div>
              <Link
                href="/eksempler"
                className="text-gray-300 hover:text-alta-blue-light transition-colors duration-300 hover:underline px-2 py-1"
              >
                Eksempler
              </Link>
              <div className="text-gray-600">|</div>
              <Link
                href="/priser"
                className="text-gray-300 hover:text-alta-blue-light transition-colors duration-300 hover:underline px-2 py-1"
              >
                Priser
              </Link>
              <div className="text-gray-600">|</div>
              <Link
                href="/kontakt"
                className="text-gray-300 hover:text-alta-blue-light transition-colors duration-300 hover:underline px-2 py-1"
              >
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-700/30 pt-6 md:pt-8 space-y-4">
            <p className="text-gray-400 text-sm md:text-base">
              &copy; {new Date().getFullYear()} AltaNettsider
            </p>
            <p className="text-alta-blue-light text-sm flex items-center justify-center px-4">
              Laget i Alta, med ❤️ for{" "}
              <Link href="/nettsider-for-lokale-bedrifter" className="underline hover:text-white transition-colors mx-1">
                lokale bedrifter
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

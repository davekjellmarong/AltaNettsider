import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-alta-dark text-white py-12 md:py-16">
      <div className="container-custom">
        <div className="text-center space-y-6 md:space-y-8">
          {/* LinkedIn CTA */}
          <div className="bg-gradient-to-r from-transparent via-gray-800/50 to-transparent p-6 rounded-lg">
            <p className="text-gray-300 mb-4">
              Følg meg på LinkedIn for oppdateringer og tips om web
            </p>
            <a 
              href="https://linkedin.com/in/davekjellmarong" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
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
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-alta-blue-light transition-colors duration-300 hover:underline"
            >
              Hjem
            </Link>
            <Link
              href="/om"
              className="text-gray-300 hover:text-alta-blue-light transition-colors duration-300 hover:underline"
            >
              Om
            </Link>
            <Link
              href="/tjenester"
              className="text-gray-300 hover:text-alta-blue-light transition-colors duration-300 hover:underline"
            >
              Tjenester
            </Link>
            <Link
              href="/eksempler"
              className="text-gray-300 hover:text-alta-blue-light transition-colors duration-300 hover:underline"
            >
              Eksempler
            </Link>
            <Link
              href="/kontakt"
              className="text-gray-300 hover:text-alta-blue-light transition-colors duration-300 hover:underline"
            >
              Kontakt
            </Link>
          </nav>

          {/* Separator */}
          <div className="border-t border-gray-700 pt-6 md:pt-8 space-y-4">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} AltaNettsider
            </p>
            <p className="text-alta-blue-light text-sm flex items-center justify-center">
              Laget i Alta, med ❤️ for lokale bedrifter
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

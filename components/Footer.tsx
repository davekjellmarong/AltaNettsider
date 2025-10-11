import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-alta-dark text-white py-16">
      <div className="container-custom">
        <div className="text-center space-y-8">
          {/* Logo/Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Alta<span className="text-alta-blue-light">Nettsider</span>
            </h3>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Hjem
            </Link>
            <Link
              href="/om"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Om
            </Link>
            <Link
              href="/tjenester"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Tjenester
            </Link>
            <Link
              href="/eksempler"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Eksempler
            </Link>
            <Link
              href="/kontakt"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Kontakt
            </Link>
          </nav>

          {/* Separator */}
          <div className="border-t border-gray-700 pt-8 space-y-4">
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

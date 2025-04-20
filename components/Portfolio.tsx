import Image from "next/image";

const portfolioItems = [
  {
    title: "Alta Café",
    category: "Restaurant",
    image:
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80",
    description:
      "En moderne nettside for en lokal kafé i Alta, med online meny og reservasjonssystem.",
  },
  {
    title: "Nordlys Tours",
    category: "Reiseliv",
    image:
      "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&q=80",
    description:
      "Nettside for et lokalt reiseselskap spesialisert på nordlysturer i Finnmark.",
  },
  {
    title: "Alta Håndverkere",
    category: "Håndverk",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80",
    description:
      "Profesjonell nettside for et lokalt håndverkerselskap, med prosjektgalleri og kontaktskjema.",
  },
  {
    title: "Finnmark Fitness",
    category: "Helse",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80",
    description:
      "Responsiv nettside for et treningssenter i Alta, med timeplan og medlemssystem.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-alta-dark mb-4">Våre Prosjekter</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ta en titt på noen av våre nylige prosjekter. Vi har hjulpet
            bedrifter fra forskjellige bransjer med å etablere en sterk digital
            tilstedeværelse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group bg-alta-gray rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-alta-blue text-white text-sm py-1 px-3 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-alta-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="btn-secondary">
            Har du et prosjekt i tankene? Kontakt oss!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

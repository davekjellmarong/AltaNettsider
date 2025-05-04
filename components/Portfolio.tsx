import Image from "next/image";

const portfolioItems = [
  {
    title: "DinDrenering",
    category: "Drenering",
    image: "/dindrenering.png",
    description:
      "Et nettsted for å finne lokale bedrifter som kan hjelpe utføre drenere.",
  },
  {
    title: "Minihjørne",
    category: "Brukte barneklær",
    image: "/minihjorne.png",
    description: "En plattform for kjøp og salg av brukte barneklær.",
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

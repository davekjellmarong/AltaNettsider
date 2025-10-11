import type { Metadata } from "next";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Eksempler på nettsider - Se våre prosjekter i Alta | AltaNettsider",
  description:
    "Se eksempler på nettsider vi har laget for lokale bedrifter i Alta. Fra tannlegepraksis til håndverksbedrifter - moderne løsninger som fungerer.",
};

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Portfolio />
      </div>
      <Footer />
    </main>
  );
}
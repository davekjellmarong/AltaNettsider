import type { Metadata } from "next";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Nettsider for lokale bedrifter - Priser og Tjenester | AltaNettsider",
  description:
    "Nettsider for lokale bedrifter i Alta og Finnmark. Transparente priser fra 4,900 kr for enkel side til 14,900 kr for nettbutikk. Alle løsninger inkluderer hosting og support for små bedrifter.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Pricing />
      </div>
      <Footer />
    </main>
  );
}
import type { Metadata } from "next";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Tjenester og Priser - Nettsider for små bedrifter i Alta | AltaNettsider",
  description:
    "Transparente priser på nettsider i Alta. Fra 4,900 kr for enkel side til 14,900 kr for nettbutikk. Alle løsninger inkluderer hosting og support.",
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
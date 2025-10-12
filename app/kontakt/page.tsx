import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kontakt - Nettsider for lokale bedrifter i Alta | AltaNettsider",
  description:
    "Trenger din lokale bedrift en ny nettside? Kontakt Dave for gratis forslag uten forpliktelser. Spesialist på nettsider for små bedrifter i Alta og Finnmark. Telefon: +47 412 34 567",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
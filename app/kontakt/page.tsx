import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kontakt Dave - Få gratis forslag på nettside i Alta | AltaNettsider",
  description:
    "Klar for å se hvordan nettsiden deres kan se ut? Kontakt Dave for gratis forslag uten forpliktelser. Telefon: +47 412 34 567 | E-post: dave@altanettsider.no",
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
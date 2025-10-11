import type { Metadata } from "next";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Om Dave - Lokale nettsider for din bedrift i Alta | AltaNettsider",
  description:
    "Møt Dave som lager moderne nettsider for lokale bedrifter i Alta. Med fokus på enkelhet, fart og at du faktisk får kunder via siden din.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
}
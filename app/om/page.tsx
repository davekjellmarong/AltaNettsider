import type { Metadata } from "next";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Om oss - AltaNettsider | Nettsider for lokale bedrifter i Alta",
  description:
    "AltaNettsider lager moderne nettsider for lokale bedrifter i Alta og Finnmark. Spesialist på nettsider for små bedrifter med fokus på enkelhet, fart og at du faktisk får kunder via siden din.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <PageBackground />
      <Navbar />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </div>
  );
}

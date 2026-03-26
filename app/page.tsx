import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import ClientLogos from "@/components/ClientLogos";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ClientLogos />
      <HowItWorks />
      <Testimonial />
      <Footer />
    </main>
  );
}

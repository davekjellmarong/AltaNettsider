import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import Benefits from "@/components/sections/Benefits";
import WhyDave from "@/components/sections/WhyDave";
import Projects from "@/components/sections/Projects";
import BeforeAfter from "@/components/sections/BeforeAfter";
import ContactCta from "@/components/sections/ContactCta";
import PageBackground from "@/components/PageBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <PageBackground />
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <WhyDave />
      <Projects />
      <BeforeAfter />
      <ContactCta />
      <Footer />
    </div>
  );
}

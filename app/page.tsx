import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import Example from "@/components/sections/Example";
import Problem from "@/components/sections/Problem";
import Origin from "@/components/sections/Origin";
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
      <Example />
      <Problem />
      <Origin />
      <WhyDave />
      <Projects />
      <BeforeAfter />
      <ContactCta />
      <Footer />
    </div>
  );
}

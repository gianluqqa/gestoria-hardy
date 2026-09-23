import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TrustSection } from "@/components/TrustSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ScrollReveal variant="fade-up" duration={800}>
          <Services />
        </ScrollReveal>
        <ScrollReveal variant="fade-up" duration={800}>
          <TrustSection />
        </ScrollReveal>
        <ScrollReveal variant="fade-up" duration={800}>
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal variant="fade-up" duration={800}>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}



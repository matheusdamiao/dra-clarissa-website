import AboutSection from "@/components/HomePage/AboutSection";
import AreasSection from "@/components/HomePage/AreasSection";
import ContactSection from "@/components/HomePage/ContactSection";
import CtaSection from "@/components/HomePage/CtaSection";
import DepoimentosSection from "@/components/HomePage/DepoimentosSection";
import DiferenciaisSection from "@/components/HomePage/DiferenciaisSection";
import Footer from "@/components/HomePage/Footer";
import HeroSectionHome from "@/components/HomePage/HeroSection";
import Maps from "@/components/HomePage/Maps";
import Menu from "@/components/Menu";
import TypeBot from "@/components/TypeBot";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Menu/>
      <HeroSectionHome/>
      <TypeBot/>
      <DiferenciaisSection/>
      <DepoimentosSection/>
      <AreasSection/>
      <CtaSection/>
      <AboutSection/>
      <ContactSection/>
      <Maps/>

      <Footer/>
    </main>
  );
}

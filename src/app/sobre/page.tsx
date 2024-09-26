import CtaSection from "@/components/HomePage/CtaSection";
import Footer from "@/components/HomePage/Footer";
import Maps from "@/components/HomePage/Maps";
import Menu from "@/components/Menu";
import TypeBot from "@/components/TypeBot";
import HeroSectionAbout from "@/components/AboutPage/HeroSectionAbout";
import MissionSection from "@/components/AboutPage/MissionSection";
import DraClarissaSection from "@/components/AboutPage/DraClarissaSection";

export default function Sobre() {
  return (
    <main className="flex flex-col">
      <Menu/>
      <HeroSectionAbout/>
      <MissionSection/>
      <DraClarissaSection/>
      <TypeBot/>
      <CtaSection/>
      <Maps/>
      <Footer/>
    </main>
  );
}

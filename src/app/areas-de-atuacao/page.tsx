import CtaSection from "@/components/HomePage/CtaSection";
import Footer from "@/components/HomePage/Footer";
import Maps from "@/components/HomePage/Maps";
import Menu from "@/components/Menu";
import TypeBot from "@/components/TypeBot";
import HeroSectionAreas from "@/components/AreasPage/HeroSectionAreas";
import AllAreasSection from "@/components/AreasPage/AllAreasSection";

export default function Sobre() {
  return (
    <main className="flex flex-col">
      <Menu/>
      <HeroSectionAreas/>
      <AllAreasSection/>
      <TypeBot/>
      <CtaSection/>
      <Maps/>
      <Footer/>
    </main>
  );
}

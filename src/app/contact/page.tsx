import { GA } from "@/components/atoms/analitiycs";
import Brands from "@/components/atoms/brands";
import McMenu from "@/components/molecules/mc-menu";
import Header from "@/components/organism/header";
import Behind from "@/components/organism/sections/about-us/behind-laptos";
import ContactCards from "@/components/organism/sections/contact-card";
import { Footer } from "@/components/organism/sections/footer";
import InfoSection from "@/components/organism/sections/home/InfoSection";
import SimpleForm from "@/components/organism/sections/home/formContact";
import Hero from "@/components/organism/sections/home/hero";
import { imagesBrand } from "@/model/api";

export default function page() {
  return (
    <div>
      <Header
        menu={<McMenu></McMenu>}
        className="bg-black"
        logo="/images/McLogo.svg"
        iconColor="text-white"
      />
      <GA />
      <Hero
        messageDesc="We’re here to help you develop your product or talk about your ideas. "
        messageEnd=" "
        lowerMessage="Want to work with us?"
        words={[]}
        colorDesc="text-black"
        colorFonts="text-black"
        colorWords="text-black font-semibold"
      ></Hero>
      
      <Brands imageUrls={imagesBrand} title="Brands that trust us"  titleColor="text-white"/>
      <SimpleForm></SimpleForm>
      <ContactCards></ContactCards>
      <Footer mctekk></Footer>
    </div>
  );
}

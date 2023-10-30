import { Footer } from "@/components/organism/sections/footer";
import Header from "@/components/organism/header";
import { GA } from "@/components/atoms/analitiycs";
import Info from "@/components/organism/sections/privacy-policy/info";
import Menu from "@/components/molecules/menu";

function PrivacyPolicy() {
  return (
    <>
      <GA />
      <Header
        menu={<Menu></Menu>}
        logo="/images/logo.png"
        iconColor="text-black"
      />
      ,
      <Info />
      <Footer kind="dark" />
    </>
  );
}

export default PrivacyPolicy;

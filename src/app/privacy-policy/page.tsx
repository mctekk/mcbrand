import { Footer } from "@/components/organism/sections/footer";
import Header from "@/components/organism/header";
import { GA } from "@/components/atoms/analitiycs";
import Info from "@/components/organism/sections/privacy-policy/info";

function PrivacyPolicy() {
  return (
    <>
      <GA />
      <Header/>
      <Info/>
      <Footer kind="dark" />
    </>
  );
}

export default PrivacyPolicy;

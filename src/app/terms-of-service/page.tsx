import React from "react";
import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";
import Terms from "@/components/organism/sections/terms-of-service/terms";
import { Menu } from "@headlessui/react";

function TermsAndService() {
  return (
    <div>
      <Header
        menu={<Menu></Menu>}
        logo="/images/logo.png"
        iconColor="text-black"
      />
      ,
      <Terms />
      <Footer kind="dark" />
    </div>
  );
}

export default TermsAndService;

import React from "react";
import Header from "@/components/organism/header";
import { Footer } from "@/components/organism/sections/footer";
import Terms from "@/components/organism/sections/terms-of-service/terms";

function TermsAndService() {
  return (
    <div >
      <Header/>
      <Terms/>
      <Footer kind="dark" />
    </div>
  );
}

export default TermsAndService;

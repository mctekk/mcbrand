import { translate } from "@/locales";
import React from "react";


export default function FooterRights() {
  return (
    <>
      {translate("rights.info")} {new Date().getFullYear()}
    </>
  );
}


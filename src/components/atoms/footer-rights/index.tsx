import { translate } from "@/locales";
import React from "react";

interface Props{
  mctekk?:Boolean
  gewaer?:Boolean
  kanvas?:Boolean
}
export default function FooterRights({mctekk,gewaer,kanvas}:Props) {
if(mctekk || kanvas || gewaer ){
  return (
    <>
      {"MCTEKK. All rights reserved."} {new Date().getFullYear()}
    </>
  );
}else{
  return (
    <>
      {translate("rights.info")} {new Date().getFullYear()}
    </>
  );
}
}

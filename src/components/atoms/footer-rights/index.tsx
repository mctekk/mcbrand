import { translate } from "@/locales";
import React from "react";

interface Props{
  mctekk?:Boolean
  gewaer?:Boolean
  kanvas?:Boolean
}
export default function FooterRights({mctekk,gewaer,kanvas}:Props) {
  if( kanvas){
    return (
      <>
        {"Kyanvasu INC. All rights reserved."} {new Date().getFullYear()}
      </>
    );
  }
if(mctekk  || gewaer ){
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

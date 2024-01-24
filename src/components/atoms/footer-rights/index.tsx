import { translate } from "@/locales";
import React from "react";

interface Props {
  mctekk?: boolean;
  gewaer?: boolean;
  kanvas?: boolean;
  gewaerEs?: boolean;
}

export default function FooterRights({ mctekk, gewaer, kanvas, gewaerEs }: Props) {
  let content;

  switch (true) {
    case kanvas:
      content = <>{"Kyanvasu INC. All rights reserved."} {new Date().getFullYear()}</>;
      break;

    case mctekk || gewaer || gewaerEs:
      content = <>{"MCTEKK. All rights reserved."} {new Date().getFullYear()}</>;
      break;

    default:
      content = <>{translate("rights.info")} {new Date().getFullYear()}</>;
      break;
  }

  return <>{content}</>;
}

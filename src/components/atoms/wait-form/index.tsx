import React, { useEffect } from "react";

declare global {
  interface Window {
    hbspt: any;
  }
}
function HubSpotForm (){
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://js.hsforms.net/forms/embed/v2.js";
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    const initializeHubSpotForm = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "23755688",
          formId: "cfe8d7cb-1d62-459f-bfee-812ccd3d758f",
          target: "#hubspotForm",
        });
      } else {
        setTimeout(initializeHubSpotForm, 100);
      }
    };

    script.onload = initializeHubSpotForm;

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="hubspotForm"></div>
    </div>
  );
};

export default HubSpotForm;

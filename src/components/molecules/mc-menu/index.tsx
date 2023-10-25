import React from "react";
import  { MenuItem } from "../../atoms/menuItem";
import { translate } from "@/locales";


const menuItems = [
  {
    text:"Blog",
    link: "https://mctekk.substack.com/",
  },
  { text: translate("navbar.section.aboutUs"), link: "/about-us" },
  { text:"Jobs" , link: "https://mctekk.grovehr.com/careers/job?id=65117eed2487c21055883347" },
  { text:"Contact" , link: "Contact" },
];
const externalLinks = [
  {
    text: "Get Started",
    link: "https://calendly.com/salesasssit/30min",
    isExternal: true,
    className: "lg:bg-orange-400 hover:bg-black lg:text-white bg-white hover:border border-orange-400 hover:text-orange-400"
  },
  
];

function McMenu({ }) {
  return (
    <ul className="lg:flex ">
      {menuItems.map((item, index) => (
        <MenuItem key={index} title={item.text} link={item.link} optionsColor="text-gray-400 hover:text-white" />
      ))}
      <div className="lg:ml-80 flex lg:space-x-2">
        {externalLinks.map((item, index) => (
          <MenuItem key={index} title={item.text} link={item.link} isExternal={item.isExternal} className={item.className}  />
        ))}
      </div>
    </ul>
  );
}

export default McMenu;

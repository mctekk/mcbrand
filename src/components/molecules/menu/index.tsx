import React from "react";
import  { MenuItem } from "../../atoms/menuItem";
import { translate } from "@/locales";


const menuItems = [
  {
    text: translate("navbar.section.whySalesAssist"),
    link: "/why-sales-assist",
  },
  { text: translate("navbar.section.pricing"), link: "/pricing" },
  { text: translate("navbar.section.aboutUs"), link: "/about-us" },
];
const externalLinks = [
  {
    text: translate("navbar.section.login"),
    link: "https://app.salesassist.io/",
    isExternal: true,
    className: "hidden lg:flex text-black"
  },
  {
    text: translate("navbar.section.bookDemo"),
    link: "https://calendly.com/salesasssit/30min",
    isExternal: true,
    className: "lg:bg-orange-500 lg:text-white bg-white "
  },
  
];

function Menu({ }) {
  return (
    <ul className="lg:flex ">
      {menuItems.map((item, index) => (
        <MenuItem key={index} title={item.text} link={item.link} optionsColor=" hover:text-orange-500"  />
      ))}
      <div className="lg:ml-80 flex lg:space-x-2">
        {externalLinks.map((item, index) => (
          <MenuItem key={index} title={item.text} link={item.link} isExternal={item.isExternal} className={item.className}  />
        ))}
      </div>
    </ul>
  );
}

export default Menu;

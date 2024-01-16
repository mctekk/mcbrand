import React from "react";
import { MenuItem } from "../../atoms/menuItem";
import { translate } from "@/locales";
import ButtonOptions from "@/components/atoms/optionsButton";

const menuItems = [
 
  {
    text: translate("mcnavbar.section.Blog"),
    link: "/blog",
  },
];
const externalLinks = [
  {
    text: translate("mcnavbar.section.GetStarted"),
    link: "https://meetings.hubspot.com/jennifer-herasme",
    isExternal: true,
    target:"",
    className:
      "lg:bg-mctekk-100 hover:bg-black lg:text-white  lg:hover:border border-mctekk-100 lg:hover:text-mctekk-100 text-gray-400 hover:text-white xl:ml-80 lg:ml-40  ",
  },
];
const options = [
  {
    name: "Kanvas",
    link: "https://kanvas.dev/",
  },
  { name: "Gewaer", link: "https://www.gewaer.io/" },
];
function McMenu({}) {
  return (
    <ul className="lg:flex ">
      <ButtonOptions options={options} />
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          title={item.text}
          link={item.link}
          optionsColor="text-gray-400 hover:text-white "
        />
      ))}
      <div className="lg:ml-80 flex lg:space-x-2">
        {externalLinks.map((item, index) => (
          <MenuItem
            key={index}
            title={item.text}
            link={item.link}
            isExternal={item.isExternal}
            className={item.className}
            target={item.target}
          />
        ))}
      </div>
    </ul>
  );
}

export default McMenu;

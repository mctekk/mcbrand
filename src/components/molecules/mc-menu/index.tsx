import React from "react";
import { MenuItem } from "../../atoms/menuItem";
import { translate } from "@/locales";
import ButtonOptions from "@/components/atoms/optionsButton";

const menuItems = [
  {
    text: "Services",
    link: "/Services",
  },
  {
    text: translate("mcnavbar.section.Blog"),
    link: "https://mctekk.substack.com/",
  },
];
const externalLinks = [
  {
    text: translate("mcnavbar.section.GetStarted"),
    link: "https://meetings.hubspot.com/jennifer-herasme",
    isExternal: true,
    className:
      "lg:bg-orange-400 hover:bg-black lg:text-white  lg:hover:border border-orange-400 lg:hover:text-orange-400 text-gray-400 hover:text-white xl:ml-72",
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
          optionsColor="text-gray-400 hover:text-white"
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
          />
        ))}
      </div>
    </ul>
  );
}

export default McMenu;

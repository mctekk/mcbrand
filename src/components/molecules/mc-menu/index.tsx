import React from "react";
import { MenuItem } from "../../atoms/menuItem";
import { translate } from "@/locales";
import ButtonOptions from "@/components/atoms/optionsButton";

const menuItems = [
  {
    text: translate("mcnavbar.section.Blog"),
    link: "https://mctekk.substack.com/",
  },
  { text:translate("mcnavbar.section.aboutUs"), link: "/about-us" },
  {
    text: translate("mcnavbar.section.jobs"),
    link: "https://mctekk.grovehr.com/careers/job?id=65117eed2487c21055883347",
  },
  { text: translate("mcnavbar.section.Contact"), link: "Contact" },
];
const externalLinks = [
  {
    text: translate("mcnavbar.section.GetStarted"),
    link: "https://calendly.com/salesasssit/30min",
    isExternal: true,
    className:
      "lg:bg-orange-400 hover:bg-black lg:text-white  lg:hover:border border-orange-400 lg:hover:text-orange-400 text-gray-400 hover:text-white ",
  },
];
const options = [
  {
    name: "Kanvas",
    link: "/Kanvas",
  },
  { name: "Gewaer", link: "/Gewaer" },
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

import React from "react";
import { MenuItem } from "../../atoms/menuItem";
import { translate } from "@/locales";


const menuItems = [
  {
    text: "Home",
    link: "/",
  },
  { text:"Core Functionalities", link: "/#features" },
  { text:"GitHub", link: "https://github.com/bakaphp/kanvas-ecosystem-api" },


];
const externalLinks = [
  {
    text: "Contact",
    link: "https://meetings.hubspot.com/jennherasme/kanvas",
    isExternal: true,
    className:
      "lg:bg-white  lg:text-sky-600  lg:hover:border  text-white xl:ml-64 w-fit",
  },
];

export function KanvasMenu({}) {
  return (
    <ul className="lg:flex ">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          title={item.text}
          link={item.link}
          optionsColor="text-white hover:text-white"
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


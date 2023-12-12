import React from "react";
import { MenuItem } from "../../atoms/menuItem";

const menuItems = [
  {
    text: "Home",
    link: "/",
  },
  { text: "Features", link: "#features" },
  { text: "Contact", link: "mailto:" },
];
const externalLinks = [
  {
    text: "Log In",
    link: "https://dev.app.gewaer.io/login",
    isExternal: true,
    className: "lg:border  lg:text-gewaer-100   text-white lg:bg-white xl:ml-64 ",
  },
];

export function GLMenu({}) {
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
      <div className="lg:ml-80 lg:flex-row lg:flex flex-col lg:space-x-2">
        {externalLinks.map((item, index) => (
          <MenuItem
            key={index}
            title={item.text}
            link={item.link}
            isExternal={item.isExternal}
            className={item.className}
            target="_blank"
          />
        ))}
      </div>
    </ul>
  );
}

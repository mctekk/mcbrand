import React from "react";
import { MenuItem } from "../../atoms/menuItem";
import { translate } from "@/locales";

const menuItems = [
  {
    text: "Home",
    link: "/",
  },
  { text: "Features", link: "#learnMore" },
  { text: "Learn more", link: "#learnMore" },
];
const externalLinks = [
  {
    text: "Log In",
    link: "https://www.gewaer.io/users/login",
    isExternal: true,
    className:
      "lg:border  lg:text-white   text-white lg:ml-64 ",
  },
  {
    text: "Request Demo",
    link: "https://meetings.hubspot.com/jennherasme/kanvas",
    isExternal: true,
    className:
      "lg:bg-white  lg:text-violet-500    text-white  ",
  },
];

export function GMenu({}) {
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
          />
        ))}
      </div>
    </ul>
  );
}

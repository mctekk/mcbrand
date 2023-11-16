import React from "react";
import { MenuItem } from "../../atoms/menuItem";
import { translate } from "@/locales";
import { BsGithub, BsLinkedin } from "react-icons/bs";


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
    text: <BsGithub></BsGithub>,
    link: "https://github.com/bakaphp/kanvas-ecosystem-api",
    isExternal: true,
    className:
      "   xl:ml-64 text-white ",
    isIcon: true
  },
  {
    text: <BsLinkedin/>,
    link: "https://www.linkedin.com/company/944172/admin/feed/posts/",
    isExternal: true,
    className:
      "    text-white ",
    isIcon: true
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
            isIcon={item.isIcon}
          />
        ))}
      </div>
    </ul>
  );
}


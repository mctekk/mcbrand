import React from "react";
import { MenuItem } from "../../atoms/menuItem";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const menuItems = [
  // { text:"Blog", link: "/blog" },
];
const externalLinks = [
  {
    text: <BsLinkedin />,
    link: "https://www.linkedin.com/company/944172/admin/feed/posts/",
    isExternal: true,
    className: "   ml-[500px] text-white ",
    isIcon: true,
  },
];

export function KanvasMenu({}) {
  return (
    <ul className="lg:flex ">
      {/* {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          title={item.text}
          link={item.link}
          optionsColor="text-white hover:text-white"
        /> */}
      {/* ))} */}
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

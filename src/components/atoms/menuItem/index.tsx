import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { Solid } from "../button/solid";
import { Link as ButtonLink } from "../button/link";


interface MenuItemProps {
  title: string;
  link: string;
  isExternal?: boolean;
  className?: string;
}


export function MenuItem({ link, title, isExternal, className }:MenuItemProps) {
  return (
    <li>
      <Link href={link} className="lg:font-semibold  ">
        {isExternal ? (
          <Solid className={`${className} text-black mb-9 lg:mt-1 lg:mb-0 text-xl text-[1.25rem] lg:text-[1rem] whitespace-nowrap`}>
            {title}
          </Solid>
        ) : (
          <ButtonLink className="text-black hover:text-orange-500 mb-9 lg:mt-1 lg:mb-0 text-[1.25rem] lg:text-[1rem] whitespace-nowrap">{title}</ButtonLink>
        )}
      </Link>
    </li>
  );
}

export default MenuItem;

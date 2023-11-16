import React, { ReactNode } from "react";
import Link from "next/link";
import { Solid } from "../button/solid";
import { Link as ButtonLink } from "../button/link";

interface MenuItemProps {
  title: string | ReactNode;
  link: string;
  isExternal?: boolean;
  isIcon?: boolean;
  className?: string;
  optionsColor?: string;
}

export function MenuItem({
  link,
  title,
  isExternal,
  isIcon,
  className,
  optionsColor,
}: MenuItemProps) {
  return (
    <li>
      <Link href={link} className="lg:font-semibold">
        {isExternal ? (
          isIcon ? (
            <ButtonLink
            className={`${className}  mb-9 lg:mt-1 lg:mb-0  text-[1.25rem] lg:text-[2rem] whitespace-nowrap`}
          >
            {title}
          </ButtonLink>
          ) : (
            <Solid
              className={`${className}  mb-9 lg:mt-1 lg:mb-0  text-[1.25rem] lg:text-[1rem] whitespace-nowrap`}
            >
              {title}
            </Solid>
          )
        ) : (
          <ButtonLink
            className={`${optionsColor} mb-9 lg:mt-1 lg:mb-0 text-[1.25rem] lg:text-[1rem] whitespace-nowrap`}
          >
            {title}
          </ButtonLink>
        )}
      </Link>
    </li>
  );
}

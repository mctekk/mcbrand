import classNames from "classnames";

import NextLink from "next/link";
import { RouteNames } from "@/model/api/routes-data/data";
import { ReactNode } from "react";

export interface FooterLinkProps {
  title: string;
  links: Array<{ name: string; path: string }>;
  className?: string;
  hideTitle?: boolean;
  kind?: "dark" | "light";
  mctekk?: boolean;
  icon?:ReactNode
}

export function FooterList({
  title,
  links,
  className,
  hideTitle,
  kind,
  mctekk,
}: FooterLinkProps) {
  const baseClass = classNames("md:w-1/2 text-left", className,{"md:w-fit": mctekk});
  const titleClass = classNames(
    "font-bold  mb-2 text-[1rem] md:text-[1.125]",
    { "text-white": kind == "dark" })

  function renderBookDemo(name: string, path: string) {
    return (
      <a
        key={path}
        href={path}
        target="_blank"
        rel="noreferrer"
        className="hover:text-orange-500"
      >
        {name}
      </a>
    );
  }

  function renderLink(name: string, path: string) {
    return (
      <NextLink passHref href={path} className="hover:text-orange-500  ">
        {name}
      </NextLink>
    );
  }

  return (
    <div className={baseClass}>
      {!hideTitle && (
        <h3 className={titleClass} style={{ wordBreak: "keep-all" }}>
          {title}
        </h3>
      )}
      <ul className="text-[.9rem] md:text-[1rem] w-fit ">
        {links.map((link, i) => (
          <li
            className="text-left w-fit"
            key={link.name + i}
            style={{ wordBreak: "break-all" }}
          >
            {link.path !== "#" &&
              (link.name === RouteNames.bookADemo
                ? renderBookDemo(link.name, link.path)
                : renderLink(link.name, link.path))}
            {link.path === "#" && link.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

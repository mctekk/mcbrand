import classNames from "classnames";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { RiLinkedinBoxLine, RiLinkedinLine } from "react-icons/ri";

type Props = {
  kind?: "dark" | "light";
  mctekk?: boolean;
  sales?: boolean;
  kanvas?: boolean;
  gewaer?: boolean;
  
};

const social = [
  {
    url: "https://www.linkedin.com/company/getsalesassist",
    icon: <BsLinkedin />,
  },
  { url: "https://twitter.com/SalesAssistSaaS", icon: <BsTwitter /> },
];
const gsocial = [
  {
    url: "https://www.linkedin.com/showcase/gewaer/",
    icon: <BsLinkedin />,
  },
];
const kanvasSocial = [
  {
    url: "https://github.com/bakaphp",
    icon: <BsGithub />,
  },
  { url: "https://www.linkedin.com/company/944172/admin/feed/posts/", icon: <BsLinkedin/> },
];
const MCsocial = [
  {
    url: "https://www.linkedin.com/company/mctekk/",
    icon: <BsLinkedin />,
  },
  { url: "https://twitter.com/mctekk", icon: <BsTwitter /> },
  { url: "https://github.com/mctekk", icon: <BsGithub  /> },
  { url: "https://www.instagram.com/mctekk", icon: <BsInstagram /> },
];

export default function FooterSocials({ kind, sales, kanvas,gewaer }: Props) {
  const socialClasses = classNames("text-[1.6rem] text-white rounded", {
    "bg-sky-700": kanvas,
    "bg-zinc-800": kind === "light" && sales,
  });
  if (kanvas) {
    return (
      <div className="flex gap-6 w-full flex-wrap md:justify-end">
        {kanvasSocial.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className={socialClasses}
          >
            {s.icon}
          </a>
        ))}
      </div>
    );
  }
  if (gewaer) {
    return (
      <div className="flex gap-6 w-full flex-wrap md:justify-end">
        {gsocial.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className={socialClasses}
          >
            {s.icon}
          </a>
        ))}
      </div>
    );
  }

  if (sales) {
    return (
      <div className="flex gap-6 w-full flex-wrap md:justify-end">
        {social.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className={socialClasses}
          >
            {s.icon}
          </a>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex gap-6 w-full flex-wrap md:justify-end">
        {MCsocial.map((s, i) => (
          <a
            key={i}
            href={s.url}
            target="_blank"
            rel="noreferrer"
            className={socialClasses}
            
          >
            {s.icon}
          </a>
        ))}
      </div>
    );
  }
}

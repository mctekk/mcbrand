import classNames from "classnames";
import React from "react";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { RiLinkedinBoxLine, RiLinkedinLine } from "react-icons/ri";

type Props = {
  kind?: "dark" | "light";
  mctekk?: boolean;
  sales?: boolean;
  kanvas?: boolean;
};

const social = [
  {
    url: "https://www.linkedin.com/company/getsalesassist",
    icon: <BsLinkedin />,
  },
  { url: "https://twitter.com/SalesAssistSaaS", icon: <BsTwitter /> },
];
const kanvasSocial = [
  {
    url: "https://www.linkedin.com/company/getsalesassist",
    icon: <BsGithub />,
  },
  { url: "https://twitter.com/SalesAssistSaaS", icon: <BsInstagram /> },
];
const MCsocial = [
  {
    url: "https://www.linkedin.com/company/mctekk/",
    icon: <BsLinkedin />,
  },
  { url: "https://twitter.com/mctekk", icon: <BsTwitter /> },
  { url: "https://github.com/mctekk", icon: <BsGithub /> },
  { url: "https://www.instagram.com/mctekk", icon: <BsInstagram /> },
];

export default function FooterSocials({ kind, sales, kanvas }: Props) {
  const socialClasses = classNames("text-[1.875rem] text-white rounded", {
    "bg-zinc-800": kind === "light",
    "bg-sky-800": kanvas,
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

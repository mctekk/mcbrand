import classNames from 'classnames';
import React from 'react'
import { BsLinkedin, BsTwitter } from 'react-icons/bs';

type Props = {
    kind?: "dark" | "light";
}

const social = [
    { url: 'https://www.linkedin.com/company/getsalesassist', icon: <BsLinkedin />},
    { url: 'https://twitter.com/SalesAssistSaaS', icon: <BsTwitter />}
]
export default function FooterSocials({kind}: Props) {
    const socialClasses = classNames(
        "text-[1.875rem] text-white rounded",
        { "": kind === "dark" },
        { "bg-zinc-800": kind === "light" }
      );
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
  )
}
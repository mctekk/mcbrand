import React from 'react'
import Image from 'next/image'
type Props = {
    kind?: "dark" | "light";
}

export default function FooterLogo({kind}: Props) {
  return (
    <div>{kind == "dark" ? (
        <Image
          src="/images/WLogo.svg"
          alt=""
          width={500}
          height={224}
        />
      ) : (
        <Image
          src="/images/logo.png"
          alt={""}
          width={500}
          height={224}
        />
      )}</div>
  )
}
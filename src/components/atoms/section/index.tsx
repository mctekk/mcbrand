import React, { PropsWithChildren } from "react";
import classNames from "classnames";

interface Props extends PropsWithChildren{
    className?: string
    }


export function Section({ children, className }:Props) {
  const classes = classNames("container mx-auto px-4 lg:px-0 w-full", className);

  return <div className={classes}>{children}</div>;
}

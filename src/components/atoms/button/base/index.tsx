import React from "react";
import classNames from "classnames";
import { ButtonProps } from "@/model/types/button.props";
import { useButton } from "@/model/interactions/use-button";

export function Button({
  type,
  disabled,
  className,
  children,
  size,
  variant,
  ...rest
}: ButtonProps): JSX.Element {
  const { model } = useButton({ size, variant });
  return (
    <button
      type={type}
      className={classNames(
        "rounded-md w-fit text-[0.875rem, 1.25rem] flex flex-row gap-2.5 py-2.5 px-3.5 cursor-pointer",
        model.size,
        model.variant,
        className
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

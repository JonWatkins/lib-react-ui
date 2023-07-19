import React, { FC } from "react";
import classNames from "classnames";
import type { ButtonProps } from "./Button.types";

const padding = (size: string): string => {
  if (['xl', 'large'].indexOf(size) !== -1) return 'pt-3 pr-3 pl-3 pb-3'
  if (size === 'medium') return 'pt-2 pr-2 pl-2 pb-2'
  return 'pt-1 pr-1 pl-1 pb-1'
}

export const Button: FC<ButtonProps> = ({
  size = "small",
  color = "primary",
  type = "button",
  disabled = false,
  text,
  className,
  onClick,
  ...props
}) => {
  const classes = [`text-${size}`, `bg-${color}`, padding(size), className];
  return (
    <button
      className={classNames(classes)}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

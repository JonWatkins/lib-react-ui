import React, { FC } from "react";
import classNames from "classnames";
import type { ButtonProps } from "./Button.types";

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
  const classes = [`text-${size}`, `bg-${color}`, className];
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

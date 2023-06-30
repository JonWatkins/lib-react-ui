import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import classNames from "classnames";

export const Button: FC<ButtonProps> = ({
  size = "sm",
  color = "primary",
  type = "button",
  disabled = false,
  text,
  className,
  onClick,
  ...props
}) => {
  const classes = ["btn", `btn-${size}`, `btn-${color}`, className];
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

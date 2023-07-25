import React, { FC } from "react";
import classNames from "classnames";
import type { ButtonProps } from "./Button.types";
import { ThemeColors, ThemeSizes } from "../../globals";

const sizes = {
  tiny: "btn-tiny",
  small: "btn-small",
  medium: "btn-medium",
  large: "btn-large",
};

const colors = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  success: "btn-success",
  danger: "btn-danger",
  warning: "btn-warning",
  info: "btn-info",
  lightest: "btn-lightest",
  light: "btn-light",
  dark: "btn-dark",
  muted: "btn-muted",
  white: "btn-white",
};

export const Button: FC<ButtonProps> = ({
  size,
  color,
  type = "button",
  disabled = false,
  text,
  className,
  onClick,
  ...props
}) => {
  const btnColor = colors[color as ThemeColors] || "btn-primary";
  const btnSize = sizes[size as ThemeSizes] || "btn-medium";
  const classes = [`btn`, `${btnColor}`, `${btnSize}`, className];

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

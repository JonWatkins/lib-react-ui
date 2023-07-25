import React, { FC } from "react";
import classNames from "classnames";
import type { BadgeProps } from "./Badge.types";
import { ThemeColors, ThemeSizes } from "../../globals";

const sizes = {
  tiny: "badge-tiny",
  small: "badge-small",
  medium: "badge-medium",
  large: "badge-large",
};

const colors = {
  primary: "badge-primary",
  secondary: "badge-secondary",
  success: "badge-success",
  danger: "badge-danger",
  warning: "badge-warning",
  info: "badge-info",
  lightest: "badge-lightest",
  light: "badge-light",
  dark: "badge-dark",
  muted: "badge-muted",
  white: "badge-white",
};

export const Badge: FC<BadgeProps> = ({
  id,
  color,
  size,
  children,
  className,
  ...props
}) => {
  const badgeColor = colors[color as ThemeColors] || "badge-primary";
  const badgeSize = sizes[size as ThemeSizes] || "badge-medium";
  const classes = [`badge`, `${badgeColor}`, `${badgeSize}`, className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

import React, { FC } from "react";
import classNames from "classnames";
import type { AlertProps } from "./Alert.types";
import { ThemeColors } from "../../globals";

const types = {
  primary: "alert-primary",
  secondary: "alert-secondary",
  success: "alert-success",
  danger: "alert-danger",
  warning: "alert-warning",
  info: "alert-info",
  lightest: "alert-lightest",
  light: "alert-light",
  dark: "alert-dark",
  muted: "alert-muted",
  white: "alert-white",
};

export const Alert: FC<AlertProps> = ({
  id,
  type,
  children,
  className,
  ...props
}) => {
  const alertType = types[type as ThemeColors] || "alert-info";
  const classes = ["alert", alertType, className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

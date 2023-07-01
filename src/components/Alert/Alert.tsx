import React, { FC } from "react";
import classNames from "classnames";
import type { AlertProps } from "./Alert.types";

export const Alert: FC<AlertProps> = ({
  id,
  type = "info",
  children,
  className,
  ...props
}) => {
  const classes = ["alert", `alert-${type}`, className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

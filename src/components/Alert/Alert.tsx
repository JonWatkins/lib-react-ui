import React, { FC } from "react";
import { AlertProps } from "./Alert.types";
import classNames from "classnames";

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

import React, { FC } from "react";
import classNames from "classnames";
import { inverseTextColor } from "../../utils";
import type { AlertProps } from "./Alert.types";

export const Alert: FC<AlertProps> = ({
  id,
  type = "info",
  children,
  className,
  ...props
}) => {
  const classes = [
    `bg-${type}/75`,
    "rounded",
    "border-1",
    "border-solid",
    `border-${type}-700`,
    "pxy-1",
    inverseTextColor(type),
    className,
  ];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

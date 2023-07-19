import React, { FC } from "react";
import classNames from "classnames";
import type { IconProps } from "./Icon.types";

export const Icon: FC<IconProps> = ({
  id,
  className,
  type,
  size = "medium",
  color = "dark",
  ...props
}) => {
  const classes = [
    "icon",
    `icon-${type}`,
    `icon-${size}`,
    `text-${color}`,
    className,
  ];
  return <i id={id} className={classNames(classes)} {...props} />;
};

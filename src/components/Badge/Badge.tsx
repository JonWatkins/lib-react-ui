import React, { FC } from "react";
import classNames from "classnames";
import type { BadgeProps } from "./Badge.types";

export const Badge: FC<BadgeProps> = ({
  id,
  color = "info",
  size = "md",
  children,
  className,
  ...props
}) => {
  const classes = ["badge", `badge-${color}`, `badge-${size}`, className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

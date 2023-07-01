import React, { FC } from "react";
import classNames from "classnames";
import type { CardHeaderProps } from "./CardHeader.types";

export const CardHeader: FC<CardHeaderProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["card-header", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

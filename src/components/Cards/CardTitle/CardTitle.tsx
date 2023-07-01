import React, { FC } from "react";
import classNames from "classnames";
import type { CardTitleProps } from "./CardTitle.types";

export const CardTitle: FC<CardTitleProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["card-title", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

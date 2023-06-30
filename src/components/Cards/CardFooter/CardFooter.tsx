import React, { FC } from "react";
import classNames from "classnames";
import { CardFooterProps } from "./CardFooter.types";

export const CardFooter: FC<CardFooterProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["card-footer", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

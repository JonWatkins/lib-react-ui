import React, { FC } from "react";
import classNames from "classnames";
import type { CardProps } from "./Card.types";

export const Card: FC<CardProps> = ({ id, children, className, ...props }) => {
  const classes = ["card", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

import React, { FC } from "react";
import classNames from "classnames";
import { CardBodyProps } from "./CardBody.types";

export const CardBody: FC<CardBodyProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["card-body", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

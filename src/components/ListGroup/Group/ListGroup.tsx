import React, { FC } from "react";
import { ListGroupProps } from "./ListGroup.types";
import classNames from "classnames";

export const ListGroup: FC<ListGroupProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["list-group", className];
  return (
    <ul id={id} className={classNames(classes)} {...props}>
      {children}
    </ul>
  );
};

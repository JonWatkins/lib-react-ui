import React, { FC } from "react";
import classNames from "classnames";
import type { ListGroupProps } from "./ListGroup.types";

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

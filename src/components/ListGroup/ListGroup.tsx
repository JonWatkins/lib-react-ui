import React, { FC } from "react";
import classNames from "classnames";
import type { ListGroupProps, ListGroupItemProps } from "./ListGroup.types";

export const ListGroupItem: FC<ListGroupItemProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["list-group-item", className];
  return (
    <li id={id} className={classNames(classes)} {...props}>
      {children}
    </li>
  );
};

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

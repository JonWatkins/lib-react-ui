import React, { FC } from "react";
import { ListGroupItemProps } from "./ListGroupItem.types";
import classNames from "classnames";

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

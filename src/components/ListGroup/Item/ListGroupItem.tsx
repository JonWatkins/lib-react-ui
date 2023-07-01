import React, { FC } from "react";
import classNames from "classnames";
import type { ListGroupItemProps } from "./ListGroupItem.types";

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

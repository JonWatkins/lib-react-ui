import React, { FC } from "react";
import classNames from "classnames";
import type { GridProps } from "./Grid.types";

export const Grid: FC<GridProps> = ({
  id,
  children,
  className,
  fluid = false,
  ...props
}) => {
  const classes = ["grid", { "grid-fluid": fluid === true }, className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

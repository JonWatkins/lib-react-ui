import React, { FC } from "react";
import classNames from "classnames";
import type { GridProps, GridColumnProps, GridRowProps } from "./Grid.types";

export const GridColumn: FC<GridColumnProps> = ({
  id,
  children,
  className,
  breakPoint = "lg",
  colWidth = "12",
  ...props
}) => {
  const classes = [`grid-col-${breakPoint}-${colWidth}`, className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

export const GridRow: FC<GridRowProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["grid-row", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

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

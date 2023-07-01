import React, { FC } from "react";
import classNames from "classnames";
import type { GridColumnProps } from "./GridColumn.types";

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

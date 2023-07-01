import React, { FC } from "react";
import classNames from "classnames";
import type { GridRowProps } from "./GridRow.types";

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

import React, { FC } from "react";
import classNames from "classnames";
import type { ButtonGroupProps } from "./ButtonGroup.types";

export const ButtonGroup: FC<ButtonGroupProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["btn-group", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

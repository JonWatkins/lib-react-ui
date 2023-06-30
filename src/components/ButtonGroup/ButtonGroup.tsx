import React, { FC } from "react";
import { ButtonGroupProps } from "./ButtonGroup.types";
import classNames from "classnames";

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

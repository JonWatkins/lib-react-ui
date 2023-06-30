import React, { FC } from "react";
import { InputGroupProps } from "./InputGroup.types";
import classNames from "classnames";

export const InputGroup: FC<InputGroupProps> = ({
  id,
  children,
  className,
  ...props
}) => {
  const classes = ["input-group", className];
  return (
    <div id={id} className={classNames(classes)} {...props}>
      {children}
    </div>
  );
};

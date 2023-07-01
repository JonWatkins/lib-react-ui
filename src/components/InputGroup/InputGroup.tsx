import React, { FC } from "react";
import classNames from "classnames";
import type { InputGroupProps } from "./InputGroup.types";

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

import React, { FC } from "react";
import classNames from "classnames";
import { FormProps } from "./Form.types";

export const Form: FC<FormProps> = ({
  id,
  children,
  className,
  onSubmit,
  ...props
}) => {
  const classes = ["form", className];
  return (
    <form
      id={id}
      className={classNames(classes)}
      onSubmit={onSubmit}
      {...props}
    >
      {children}
    </form>
  );
};

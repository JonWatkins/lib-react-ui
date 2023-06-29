import React, { FC } from "react";
import { ButtonProps } from "./Button.types";
import classNames from "classnames";

export const Button: FC<ButtonProps> = ({
  size = "sm",
  color = "primary",
  disabled,
  text,
  onClick,
  ...props
}) => {
  const classes = {
    btn: true,
    [`btn-${size}`]: true,
    [`btn-${color}`]: true,
  };

  return (
    <button
      className={classNames(classes)}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {text}
    </button>
  );
};

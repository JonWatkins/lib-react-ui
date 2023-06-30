import React, { FC, Fragment } from "react";
import { InputProps, InputLabelProps } from "./Input.types";
import classNames from "classnames";

export const InputLabel: FC<InputLabelProps> = ({ id, label }) => {
  if (!label) return null;
  return <label htmlFor={id}>{label}</label>;
};

export const Input: FC<InputProps> = ({
  id,
  label,
  placeholder,
  disabled,
  className,
  onChange,
  ...props
}) => {
  const classes = ["form-control", className];
  return (
    <Fragment>
      <InputLabel label={label} />
      <input
        id={id}
        className={classNames(classes)}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        {...props}
      />
    </Fragment>
  );
};

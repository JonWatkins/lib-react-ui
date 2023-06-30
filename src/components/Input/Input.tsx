import React, { FC } from "react";
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
  type,
  required,
  onChange,
  ...props
}) => {
  const classes = ["form-control", className];
  return (
    <div className="form-field">
      <InputLabel label={label} />
      <input
        id={id}
        className={classNames(classes)}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

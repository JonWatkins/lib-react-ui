import React, { FC } from "react";
import { InputProps, InputLabelProps } from "./Input.types";
import classNames from "classnames";

export const InputLabel: FC<InputLabelProps> = ({
  id,
  label,
  children,
  className,
}) => {
  if (!label) return null;
  return (
    <label htmlFor={id} className={className}>
      {children}
      {label}
    </label>
  );
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

  if (type && ["checkbox", "radio"].indexOf(type) > -1) {
    return (
      <div className="form-field">
        <InputLabel className="checkbox-label" label={label}>
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
        </InputLabel>
      </div>
    );
  }

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

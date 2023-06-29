import React, { FC, Fragment } from "react";
import { InputProps } from "./Input.types";

export const Input: FC<InputProps> = ({
  id,
  label,
  placeholder,
  disableld,
  onChange,
  ...props
}) => {
  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        disabled={disableld}
        onChange={onChange}
        {...props}
      />
    </Fragment>
  );
};

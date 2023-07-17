import React, {
  FC,
  ForwardRefRenderFunction,
  ForwardedRef,
  forwardRef,
} from "react";

import classNames from "classnames";
import type { InputProps, InputLabelProps } from "./Input.types";

const InputLabel: FC<InputLabelProps> = ({
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

const RenderInput: ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps & { innerRef?: ForwardedRef<HTMLInputElement> }
> = ({
  id,
  label,
  placeholder,
  disabled,
  className,
  type = 'text',
  required,
  value,
  onChange,
  innerRef,
  ...props
}) => {
  const classes = ["form-control", className];

  if (type && ["checkbox", "radio"].indexOf(type) > -1) {
    return (
      <div className="form-field">
        <InputLabel className="checkbox-label" label={label}>
          <input
            ref={innerRef}
            id={id}
            className={classNames(classes)}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            value={value}
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
        ref={innerRef}
        id={id}
        className={classNames(classes)}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <RenderInput {...props} innerRef={ref} />
  )
);

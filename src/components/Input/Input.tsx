import React, {
  FC,
  ForwardRefRenderFunction,
  ForwardedRef,
  forwardRef,
} from "react";

import classNames from "classnames";
import type { InputProps, InputLabelProps, FieldProps } from "./Input.types";

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
      <span>{label}</span>
    </label>
  );
};

const Field: FC<FieldProps> = ({ label, children }) => {
  if (label === true) {
    return <div className="form-field">{children}</div>;
  }

  return <>{children}</>;
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
  type = "text",
  required,
  value,
  onChange,
  innerRef,
  ...props
}) => {
  const classes = ["form-control", className];

  if (type && ["checkbox", "radio"].indexOf(type) > -1) {
    return (
      <Field>
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
      </Field>
    );
  }

  return (
    <Field label={typeof label === "string" && label.length > 0}>
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
    </Field>
  );
};

// eslint-disable-next-line react/display-name
export const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => (
    <RenderInput {...props} innerRef={ref} />
  )
);

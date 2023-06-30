import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  label?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface InputLabelProps {
  id?: string;
  label?: string;
}

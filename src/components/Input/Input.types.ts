import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface InputLabelProps {
  id?: string;
  label?: string;
}

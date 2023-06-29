import { ChangeEventHandler } from "react";

export interface InputProps {
  id?: string;
  label?: string;
  disableld?: boolean;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

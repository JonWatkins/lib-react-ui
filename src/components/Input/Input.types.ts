import { ChildNodes } from "../../globals";
import { ChangeEventHandler } from "react";

export type InputTypes =
  | "checkbox"
  | "radio"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "search"
  | "tel"
  | "text"
  | "url"
  | "week";

export interface InputProps {
  id?: string;
  label?: string;
  type?: InputTypes;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface InputLabelProps {
  id?: string;
  label?: string;
  children?: ChildNodes;
  className?: string;
}

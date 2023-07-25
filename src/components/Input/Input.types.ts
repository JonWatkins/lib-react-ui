import type { LRUIInputElement, LRUIElement, ChildNodes } from "../../globals";
import type { ChangeEventHandler } from "react";

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

export interface InputProps extends LRUIInputElement {
  id?: string;
  label?: string;
  type?: InputTypes;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  required?: boolean;
  value?: any;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export interface InputLabelProps extends LRUIElement {
  id?: string;
  label?: string;
  children?: ChildNodes;
  className?: string;
}

export interface FieldProps extends LRUIElement {
  label?: boolean;
  children?: ChildNodes;
}

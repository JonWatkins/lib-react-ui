import { InputHTMLAttributes, HTMLAttributes } from "react";

type Omitted =
  | "prefix"
  | "size"
  | "onChange"
  | "onClick"
  | "onSubmit"
  | "value"
  | "type";

export type ThemeColors =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "lightest"
  | "light"
  | "dark"
  | "muted"
  | "white";

export type ThemeSizes = "sm" | "md" | "lg";

export type ChildNodes = string | number | JSX.Element | JSX.Element[];

export type BreakPoints = "sm" | "md" | "lg" | "xl";

export type LRUIElement = Omit<HTMLAttributes<HTMLElement>, Omitted>;

export type LRUIFormElement = Omit<HTMLAttributes<HTMLFormElement>, Omitted>;

export type LRUIInputElement = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  Omitted
>;

export type LRUIButtonElement = Omit<
  HTMLAttributes<HTMLButtonElement>,
  Omitted
>;

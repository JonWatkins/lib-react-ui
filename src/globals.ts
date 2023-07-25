import { InputHTMLAttributes, HTMLAttributes, ReactNode } from "react";

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

export type ThemeColorWeights =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type ThemeOpacities = "100" | "75" | "50" | "25";

export type ThemeSizes = "tiny" | "small" | "medium" | "large";

export type ChildNodes = string | number | ReactNode | ReactNode[];

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

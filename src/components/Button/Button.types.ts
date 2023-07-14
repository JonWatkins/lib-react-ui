import type { MouseEventHandler } from "react";
import type { LRUIButtonElement, ThemeColors, ThemeSizes } from "../../globals";

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps extends LRUIButtonElement {
  text?: string;
  disabled?: boolean;
  color?: ThemeColors;
  size?: ThemeSizes;
  type?: ButtonType;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

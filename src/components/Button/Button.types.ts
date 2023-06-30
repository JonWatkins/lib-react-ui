import { MouseEventHandler } from "react";
import type { ThemeColors, ThemeSizes } from "../../globals";

export type ButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  text?: string;
  disabled?: boolean;
  color?: ThemeColors;
  size?: ThemeSizes;
  type?: ButtonType;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

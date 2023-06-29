import { MouseEventHandler } from "react";
import type { ThemeColors, ThemeSizes } from "../../globals";

export interface ButtonProps {
  text?: string;
  disabled?: boolean;
  color?: ThemeColors;
  size?: ThemeSizes;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

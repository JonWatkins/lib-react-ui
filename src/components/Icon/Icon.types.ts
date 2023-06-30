import type { ThemeColors, ThemeSizes } from "../../globals";

export type IconTypes = "copy" | "registered" | "tm";

export interface IconProps {
  id?: string;
  type?: IconTypes;
  size?: ThemeSizes;
  color?: ThemeColors;
  className?: string;
}

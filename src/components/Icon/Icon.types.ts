import type { ThemeColors, ThemeSizes } from "../../globals";

export type IconTypes =
  | "copy"
  | "registered"
  | "tm"
  | "counter-clockwise"
  | "clockwise";

export interface IconProps {
  id?: string;
  type?: IconTypes;
  size?: ThemeSizes;
  color?: ThemeColors;
  className?: string;
}

import type { LRUIElement, ThemeColors, ThemeSizes } from "../../globals";

export type IconTypes =
  | "copy"
  | "registered"
  | "tm"
  | "counter-clockwise"
  | "clockwise"
  | "left-arrow"
  | "down-arrow"
  | "up-arrow"
  | "right-arrow"
  | "close";

export interface IconProps extends LRUIElement {
  id?: string;
  type?: IconTypes;
  size?: ThemeSizes;
  color?: ThemeColors;
  className?: string;
}

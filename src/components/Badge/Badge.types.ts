import type { MouseEventHandler } from "react";

import type {
  LRUIElement,
  ChildNodes,
  ThemeColors,
  ThemeSizes,
} from "../../globals";

export interface BadgeProps extends LRUIElement {
  id?: string;
  color?: ThemeColors;
  size?: ThemeSizes;
  children?: ChildNodes;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

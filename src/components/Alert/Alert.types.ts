import type { LRUIElement, ChildNodes, ThemeColors } from "../../globals";

export type AlertTypes = ThemeColors;

export interface AlertProps extends LRUIElement {
  id?: string;
  type?: AlertTypes;
  children?: ChildNodes;
  className?: string;
}

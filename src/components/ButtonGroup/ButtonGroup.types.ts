import type { LRUIElement, ChildNodes } from "../../globals";

export interface ButtonGroupProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

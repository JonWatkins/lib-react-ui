import type { LRUIElement, ChildNodes } from "../../../globals";

export interface CardProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

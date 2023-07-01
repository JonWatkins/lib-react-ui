import type { LRUIElement, ChildNodes } from "../../../globals";

export interface GridProps extends LRUIElement {
  id?: string;
  fluid?: boolean;
  children?: ChildNodes;
  className?: string;
}

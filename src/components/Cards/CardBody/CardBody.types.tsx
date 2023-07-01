import type { LRUIElement, ChildNodes } from "../../../globals";

export interface CardBodyProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

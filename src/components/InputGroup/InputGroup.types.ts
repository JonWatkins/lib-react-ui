import type { LRUIElement, ChildNodes } from "../../globals";

export interface InputGroupProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

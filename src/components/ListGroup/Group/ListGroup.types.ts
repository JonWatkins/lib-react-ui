import type { LRUIElement, ChildNodes } from "../../../globals";

export interface ListGroupProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

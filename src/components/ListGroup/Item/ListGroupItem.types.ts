import type { LRUIElement, ChildNodes } from "../../../globals";

export interface ListGroupItemProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

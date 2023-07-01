import type { LRUIElement, ChildNodes } from "../../../globals";

export interface CardFooterProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

import type { LRUIElement, ChildNodes } from "../../../globals";

export interface CardTitleProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

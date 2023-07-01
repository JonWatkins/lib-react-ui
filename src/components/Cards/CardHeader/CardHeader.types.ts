import type { LRUIElement, ChildNodes } from "../../../globals";

export interface CardHeaderProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

import type { LRUIElement, ChildNodes } from "../../../globals";

export interface GridRowProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

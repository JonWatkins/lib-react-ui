import type { LRUIElement, ChildNodes } from "../../globals";

export interface CarouselProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
  timeout?: number;
}

export interface CarouselItemProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
  width?: string;
}

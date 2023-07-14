import type { LRUIElement, ChildNodes } from "../../globals";

export interface CardTitleProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

export interface CardHeaderProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

export interface CardBodyProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

export interface CardFooterProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

export interface CardProps extends LRUIElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
}

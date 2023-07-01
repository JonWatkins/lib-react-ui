import type { LRUIElement, BreakPoints } from "../../../globals";

export type ColumWidths =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export interface GridColumnProps extends LRUIElement {
  id?: string;
  children?: any; // TODO: fix this type
  breakPoint?: BreakPoints;
  colWidth?: string;
  className?: string;
}

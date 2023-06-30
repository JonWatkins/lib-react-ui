import { ChildNodes, BreakPoints } from "../../../globals";

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

export interface GridColumnProps {
  id?: string;
  children?: ChildNodes;
  breakPoint?: BreakPoints;
  colWidth?: string;
  className?: string;
}

import { ChildNodes, ThemeColors } from "../../globals";

export type AlertTypes = ThemeColors;

export interface AlertProps {
  id?: string;
  type?: AlertTypes;
  children?: ChildNodes;
  className?: string;
}

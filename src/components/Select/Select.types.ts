import type { LRUIElement } from "../../globals";

export type SelectedValue = SelectOption | SelectOption[] | null;

export interface SelectOption {
  value: string | number | object | Array<any> | boolean;
  label: string;
}

export interface SelectProps extends LRUIElement {
  id?: string;
  className?: string;
  placeholder?: string;
  options?: Array<SelectOption>;
  isMulti?: boolean;
  isSearchable?: boolean;
  required?: boolean;
  label?: string;
  onChange?: (value: SelectedValue) => void;
}

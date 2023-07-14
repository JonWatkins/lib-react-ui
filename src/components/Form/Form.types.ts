import type { LRUIFormElement, ChildNodes } from "../../globals";
import type { FormEventHandler } from "react";

export interface FormProps extends LRUIFormElement {
  id?: string;
  children?: ChildNodes;
  className?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

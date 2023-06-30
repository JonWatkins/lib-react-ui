import { ChildNodes } from "../../globals";
import { FormEventHandler } from "react";

export interface FormProps {
  id?: string;
  children?: ChildNodes;
  className?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

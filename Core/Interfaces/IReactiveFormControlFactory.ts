import { IReactiveFormControl } from "./IReactiveFormControl";

export interface IReactiveFormControlFactory {
  createInstance(): IReactiveFormControl;
}

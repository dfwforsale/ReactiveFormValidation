import { IReactiveFormGroup } from "./IReactiveFormGroup";


export interface IReactiveFormBuilder {
  buildForm(form: HTMLFormElement): IReactiveFormGroup | null;
  buildAll(): IReactiveFormGroup[];
}

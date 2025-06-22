import { inject, injectable } from "inversify";
import { IReactiveFormControlFactory } from "../Interfaces/IReactiveFormControlFactory";
import { IReactiveFormControl } from "../Interfaces/IReactiveFormControl";
import { ReactiveFormControl } from "../FormControl/ReactiveFormControl";
import { ContainerTypes } from "../Types/ContainerTypes";
import { IFieldStateProvider } from "../Interfaces/IFieldStateProvider";

@injectable()
export class ReactiveFormControlFactory implements IReactiveFormControlFactory {
  constructor(
    @inject(ContainerTypes.FormStateProvider)
    private readonly fieldStateProvider: IFieldStateProvider
  ) {}

  createInstance(): IReactiveFormControl {
    return new ReactiveFormControl(this.fieldStateProvider);
  }
}
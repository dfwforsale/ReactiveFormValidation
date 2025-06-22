import { IValidator } from "./IValidator";
import { IAsyncValidator } from "./IAsyncValidator";
import { IReactiveFormControl } from "./IReactiveFormControl";
import { IValidationRuleConfig } from "./IValidationRuleConfig";

export interface IFormControlFactory {
  createControl(key: string, rules: IValidationRuleConfig[]): IReactiveFormControl;

  create(
    key: string,
    validators: IValidator[],
    asyncValidators: IAsyncValidator[]
  ): IReactiveFormControl;
}

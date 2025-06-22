import { inject, injectable } from "inversify";
import { IFormControlFactory } from "../Interfaces/IFormControlFactory";
import { IReactiveFormControl } from "../Interfaces/IReactiveFormControl";
import { IValidator } from "../Interfaces/IValidator";
import { IAsyncValidator } from "../Interfaces/IAsyncValidator";
import { ContainerTypes } from "../Types/ContainerTypes";
import { IFieldStateProvider } from "../Interfaces/IFieldStateProvider";
import { ReactiveFormControl } from "../FormControl/ReactiveFormControl";
import { IValidatorFactory } from "../Interfaces/IValidatorFactory";
import { IAsyncValidatorFactory } from "../Interfaces/IAsyncValidationFactory";
import { IValidationRuleConfig } from "../Interfaces/IValidationRuleConfig";
import { IReactiveFormControlFactory } from "../Interfaces/IReactiveFormControlFactory";

@injectable()
export class FormControlFactory implements IFormControlFactory {
  constructor(
    @inject(ContainerTypes.ValidatorFactory)
    private validatorFactory: IValidatorFactory,

    @inject(ContainerTypes.AsyncValidatorFactory)
    private asyncValidatorFactory: IAsyncValidatorFactory,

    @inject(ContainerTypes.ReactiveFormControlFactory)
    private controlFactory: IReactiveFormControlFactory
  ) {}

  createControl(
    key: string,
    rules: IValidationRuleConfig[]
  ): IReactiveFormControl {
    const validators: IValidator[] = this.validatorFactory.createValidators(rules);
    const asyncValidators: IAsyncValidator[] = this.asyncValidatorFactory.createAsyncValidators(rules);
    return this.create(key, validators, asyncValidators);
  }

  create(
    key: string,
    validators: IValidator[],
    asyncValidators: IAsyncValidator[] = []
  ): IReactiveFormControl {
    const control = this.controlFactory.createInstance();
    control.initialize(key, validators, asyncValidators);
    return control;
  }
}

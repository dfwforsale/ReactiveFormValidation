// Improrth the necessary interfaces from ../Core/Interfaces

import { IReactiveFormControl } from "./IReactiveFormControl";
import { IReactiveFormGroup } from "./IReactiveFormGroup";
import { IValidationRuleConfig } from "./IValidationRuleConfig";


export interface IReactiveValidatorService {
  /**
   * Creates a single control based on the provided key and rules.
   */
  createControlFromRules(
    key: string,
    rules: IValidationRuleConfig[]
  ): IReactiveFormControl;

  /**
   * Registers a full form and returns the associated form group instance.
   */
  registerForm(form: HTMLFormElement): IReactiveFormGroup;

  /**
   * Registers a form group based on a model with metadata decorators.
   */
  registerFormFromModel(model: object): IReactiveFormGroup;

  /**
   * Validates the entire form group.
   */
  validateForm(group: IReactiveFormGroup): Promise<boolean>;
}
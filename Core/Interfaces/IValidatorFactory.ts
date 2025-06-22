import { IValidationRuleConfig } from "./IValidationRuleConfig";
import { IValidator } from "./IValidator";

export interface IValidatorFactory {
  createValidators(rules: IValidationRuleConfig[]): IValidator[];
}
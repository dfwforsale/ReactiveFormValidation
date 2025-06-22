import { IAsyncValidator } from "./IAsyncValidator";
import { IValidationRuleConfig } from "./IValidationRuleConfig";

export interface IAsyncValidatorFactory {
  createAsyncValidators(rules: IValidationRuleConfig[]): IAsyncValidator[];
}

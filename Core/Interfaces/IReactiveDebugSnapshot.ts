import { IFormState } from "./IFormState";
import { IValidationRuleConfig } from "./IValidationRuleConfig";

export interface ReactiveFormDebugSnapshot {
  timestamp: number;
  formKey: string;
  states: IFormState;
  rules: Record<string, IValidationRuleConfig[]>;
}

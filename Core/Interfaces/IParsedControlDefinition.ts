// Core/Interfaces/IParsedControlDefinition.ts
import { IValidationRuleConfig } from "./IValidationRuleConfig";

export interface IParsedControlDefinition {
  input: HTMLInputElement;
  key: string; // typically the `name` or `id`
  rules: IValidationRuleConfig[];
}

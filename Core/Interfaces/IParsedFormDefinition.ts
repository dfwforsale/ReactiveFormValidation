// Core/Interfaces/IParsedFormDefinition.ts

import { IValidationRuleConfig } from "./IValidationRuleConfig";

export interface IParsedFormDefinition {
  controls: Array<{
    key: string;
    rules: any;
    input: HTMLInputElement | null;
  }>;
  form: HTMLFormElement | null;
}

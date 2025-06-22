// Core/Interfaces/IAsyncValidationHandler.ts
import { IValidationRuleConfig } from "./IValidationRuleConfig";

export interface IAsyncValidationHandler {
  validateAsync(
    rule: IValidationRuleConfig,
    value: string,
    context: Record<string, any>
  ): Promise<{ isValid: boolean; message?: string }>;
}

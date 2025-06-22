import { IValidationRuleConfig } from "./IValidationRuleConfig";

export interface IAsyncValidationHandler {
  validateAsync(rule: IValidationRuleConfig, value: string, context: Record<string, any>): any;
  validate(
    methodName: string,
    value: string,
    context?: any,
    args?: any[]
  ): Promise<{ isValid: boolean; message?: string }>;
}

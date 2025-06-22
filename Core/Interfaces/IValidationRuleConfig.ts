// Core/Interfaces/IValidationRuleConfig.ts
export interface IValidationRuleConfig {
  type: string; // "required", "minLength", "signalr", "custom", etc.

  // Common optional metadata
  message?: string;
  order?: number;

  // Specific properties per validator type
  value?: number | string | boolean;
  pattern?: string | RegExp;
  matches?: string;
  methodName?: string;
  args?: any[];

  // For custom validators
  validate?: string | ((value: string, context?: any) => boolean | Promise<boolean>);
}

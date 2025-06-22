// Core/Interfaces/IValidator.ts
export interface IValidator {
  validate(value: string, context?: any): boolean | { isValid: boolean; message?: string };
}

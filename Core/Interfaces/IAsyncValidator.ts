// Core/Interfaces/IAsyncValidator.ts
export interface IAsyncValidator {
  validate(value: string, context?: any): Promise<{ isValid: boolean; message?: string }>;
}

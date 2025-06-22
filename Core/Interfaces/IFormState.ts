import { IFieldState } from "./IFieldState";

export interface IFormState {
  fields: Record<string, IFieldState>;
  isValid: boolean;
}
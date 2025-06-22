import { ValidationState } from "../Types/AppTypes";

export interface IFieldState {
  key: string;
  value: string;
  state: ValidationState;
  error?: string | null;
  dirty?: boolean;
  touched?: boolean;
}
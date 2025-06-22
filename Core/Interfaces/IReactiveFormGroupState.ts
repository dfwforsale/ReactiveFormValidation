import { ValidationState } from "../Types/AppTypes";
import { IReactiveFormControl } from "./IReactiveFormControl";

export interface ReactiveFormDebugState {
  timestamp: number;
  isValid: boolean;
  isDirty: boolean;
  wasTouched: boolean;
  values: Record<string, string>;
  states: Record<string, ValidationState>;
  errors: Record<string, string | null>;
  raw: Record<string, IReactiveFormControl>;
}

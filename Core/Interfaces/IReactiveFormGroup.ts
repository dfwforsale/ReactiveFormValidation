import { IReactiveFormControl } from "./IReactiveFormControl";

export interface IReactiveFormGroup {
  onDebugUpdate(arg0: (debugState: any) => void): unknown;
  registerControl(key: string, control: IReactiveFormControl): void;
  getControl(key: string): IReactiveFormControl | undefined;
  getControlKeys(): string[];
  getValue(): Record<string, string>;
  validateAll(): Promise<boolean>;
  isValid(): boolean;
  isDirty(): boolean;
  wasTouched(): boolean;
}


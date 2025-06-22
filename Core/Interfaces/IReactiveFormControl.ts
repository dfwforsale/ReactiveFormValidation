import { ValidationState } from "../Types/AppTypes";
import { IAsyncValidator } from "./IAsyncValidator";
import { IReactiveFormGroup } from "./IReactiveFormGroup";
import { IValidator } from "./IValidator";

export interface IReactiveFormControl {
  error$: any;
  state$: any;
  value$: any;
  initialize(
    key: string,
    validators: IValidator[],
    asyncValidators?: IAsyncValidator[]
  ): void;

  setFormGroup(group: IReactiveFormGroup): void;
  setValidationRules(validators: IValidator[], asyncValidators?: IAsyncValidator[]): void;

  setValue(value: string): Promise<void>;
  updateValueDebounced(value: string): void;
  validate(): Promise<boolean>;
  validateNow(): Promise<boolean>;

  markAsTouched(): Promise<void>;
  setServerValidationState(result: { state: ValidationState; message?: string }): Promise<void>;

  onValueChange(cb: (val: string) => void): void;
  onErrorChange(cb: (msg: string | null) => void): void;
  onStateChange(cb: (state: ValidationState) => void): void;

  isDirty(): boolean;
  wasTouched(): boolean;
  isValid(): boolean;
  get currentValue(): string;
  get currentState(): ValidationState;
  getError(): string | null;
}
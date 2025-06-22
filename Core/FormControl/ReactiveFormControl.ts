import { inject, injectable } from "inversify";
import { IAsyncValidator } from "../Interfaces/IAsyncValidator";
import { IFieldState } from "../Interfaces/IFieldState";
import { IReactiveFormGroup } from "../Interfaces/IReactiveFormGroup";
import { IValidator } from "../Interfaces/IValidator";
import { ValidationState } from "../Types/AppTypes";
import { IReactiveFormControl } from "../Interfaces/IReactiveFormControl";
import { SimpleSubject } from "../Utils/SimpleSubject";
import { IFieldStateProvider } from "../Interfaces/IFieldStateProvider";
import { ContainerTypes } from "../Types/ContainerTypes";
import { Debouncer } from "../Utils/Debounce";

@injectable()
export class ReactiveFormControl implements IReactiveFormControl {
  private key!: string;
  private value = "";
  private state: ValidationState = "idle";
  private errorMessage: string | null = null;
  private dirty = false;
  private touched = false;
  private validatedOnce = false;
  private validators: IValidator[] = [];
  private asyncValidators: IAsyncValidator[] = [];
  private currentRunId = 0;
  private lastValidatedValue: string | null = null;
  private formGroup?: IReactiveFormGroup;

  private value$ = new SimpleSubject<string>();
  private error$ = new SimpleSubject<string | null>();
  private state$ = new SimpleSubject<ValidationState>();

  private debouncer: Debouncer<(val: string) => void>;

    constructor(
        @inject(ContainerTypes.FieldStateProvider) private stateProvider: IFieldStateProvider
    ) {
        this.debouncer = new Debouncer<(val: string) => void>(this.updateValueDebounced.bind(this), 300);
    }

  initialize(
    key: string,
    validators: IValidator[],
    asyncValidators: IAsyncValidator[] = []
  ): void {
    this.key = key;
    this.validators = validators;
    this.asyncValidators = asyncValidators;
  }

  setFormGroup(group: IReactiveFormGroup): void {
    this.formGroup = group;
  }

  onValueChange(cb: (val: string) => void): void {
    this.value$.subscribe(cb);
  }

  onErrorChange(cb: (msg: string | null) => void): void {
    this.error$.subscribe(cb);
  }

  onStateChange(cb: (state: ValidationState) => void): void {
    this.state$.subscribe(cb);
  }

  async setValue(val: string): Promise<void> {
    if (val === this.value) return;
    this.value = val;
    this.dirty = true;
    this.emitValue(val);
    this.emitDirtyTouched();
    if (this.touched) {
      this.debouncer.run(val);
    }
  }

  updateValueDebounced(val: string): void {
    if (val === this.value) return;
    this.value = val;
    this.dirty = true;
    this.emitValue(val);
    this.emitDirtyTouched();
    if (this.touched) {
      this.debouncer.run(val);
    }
  }

  async markAsTouched(): Promise<void> {
    if (!this.touched) {
      this.touched = true;
      this.emitDirtyTouched();
      if (this.dirty || !this.validatedOnce) {
        await this.validateInternal(this.value, true);
      }
    }
  }

  validate(): Promise<boolean> {
    this.touched = true;
    this.validatedOnce = true;
    this.emitDirtyTouched();
    return this.validateInternal(this.value, true);
  }

  validateNow(): Promise<boolean> {
    return this.validate();
  }

  setValidationRules(validators: IValidator[], asyncValidators: IAsyncValidator[] = []): void {
    this.validators = validators;
    this.asyncValidators = asyncValidators;
    if (this.touched || this.dirty) {
      this.validate();
    }
  }

  async setServerValidationState(result: { state: ValidationState; message?: string }): Promise<void> {
    this.validatedOnce = true;
    this.touched = true;
    this.setState(result.state);
    this.setError(result.state === "valid" ? null : result.message || "Invalid input");
  }

  // --- Observables + Emitters ---
  private emitValue(val: string): void {
    this.value$.next(val);
    this.emitState();
  }

  private setError(msg: string | null): void {
    this.errorMessage = msg;
    this.error$.next(msg);
    this.emitState();
  }

  private setState(state: ValidationState): void {
    this.state = state;
    this.state$.next(state);
    this.emitState();
  }

  private emitDirtyTouched(): void {
    this.emitState();
  }

  private emitState(): void {
    const state: IFieldState = {
      key: this.key,
      value: this.value,
      state: this.state,
      error: this.errorMessage,
      dirty: this.dirty,
      touched: this.touched,
    };
    this.stateProvider.updateFieldState(state);
  }

  private async validateInternal(val: string, isExplicit = false): Promise<boolean> {
    const runId = ++this.currentRunId;
    const context = this.formGroup?.getValue() ?? { [this.key]: val };

    // Required / Early exit
    if (val.trim() === "") {
      this.setState("invalid");
      this.setError("Field is required.");
      return false;
    }

    for (const validator of this.validators) {
      const rawResult = await Promise.resolve(validator.validate(val, context));
      const result = typeof rawResult === "boolean"
        ? { isValid: rawResult, message: rawResult ? undefined : "Invalid input" }
        : rawResult;
      if (!result.isValid) {
        this.setState("invalid");
        this.setError(result.message ?? "Invalid input");
        return false;
      }
    }

    if (this.asyncValidators.length > 0 && (isExplicit || this.lastValidatedValue !== val)) {
      this.setState("validating");
      this.setError(null);

      for (const validator of this.asyncValidators) {
        const result = await validator.validate(val, context);
        if (this.currentRunId !== runId) return false;
        if (!result.isValid) {
          this.setState("invalid");
          this.setError(result.message ?? "Invalid input");
          return false;
        }
      }

      this.lastValidatedValue = val;
    }

    this.setState("valid");
    this.setError(null);
    return true;
  }

  // --- Getters ---
  isDirty(): boolean {
    return this.dirty;
  }

  wasTouched(): boolean {
    return this.touched;
  }

  isValid(): boolean {
    return this.state === "valid";
  }

  get currentValue(): string {
    return this.value;
  }

  get currentState(): ValidationState {
    return this.state;
  }

  getError(): string | null {
    return this.errorMessage;
  }
}
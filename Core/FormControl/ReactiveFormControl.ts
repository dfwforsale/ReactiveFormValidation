import { inject, injectable } from "inversify";
import { IReactiveFormControl } from "../Interfaces/IReactiveFormControl";
import { ValidationState } from "../Types/AppTypes";
import { IValidator } from "../Interfaces/IValidator";
import { IAsyncValidator } from "../Interfaces/IAsyncValidator";
import { IReactiveFormGroup } from "../Interfaces/IReactiveFormGroup";
import { SimpleSubject } from "../Utils/SimpleSubject";
import { Debouncer } from "../Utils/Debounce";
import { ContainerTypes } from "../Types/ContainerTypes";
import { IFieldStateProvider } from "../Interfaces/IFieldStateProvider";
import { IFieldState } from "../Interfaces/IFieldState";

@injectable()
export class ReactiveFormControl implements IReactiveFormControl {
  private key!: string;
  private value = "";
  private dirty = false;
  private touched = false;
  private validatedOnce = false;
  private state: ValidationState = "idle";
  private errorMessage: string | null = null;

  private validators: IValidator[] = [];
  private asyncValidators: IAsyncValidator[] = [];
  private formGroup?: IReactiveFormGroup;
  private currentRunId = 0;
  private lastValidatedValue: string | null = null;

  public value$ = new SimpleSubject<string>();
  public error$ = new SimpleSubject<string | null>();
  public state$ = new SimpleSubject<ValidationState>();

  private debouncer: Debouncer<(val: string) => Promise<void>>;

  constructor(
    @inject(ContainerTypes.FieldStateProvider)
    private readonly stateProvider: IFieldStateProvider
  ) {
    this.debouncer = new Debouncer(this.handleDebouncedValue.bind(this), 300);
  }
  updateValueDebounced(value: string): void {
    throw new Error("Method not implemented.");
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

  async setValue(newVal: string): Promise<void> {
    if (newVal === this.value) return;
    this.value = newVal;
    this.dirty = true;
    this.emit("value", newVal);
    this.emitState();

    if (this.touched) {
      this.debouncer.run(newVal);
    }
  }

  async markAsTouched(): Promise<void> {
    if (!this.touched) {
      this.touched = true;
      this.emitState();
      await this.validate();
    }
  }

  async validate(): Promise<boolean> {
    this.validatedOnce = true;
    this.touched = true;
    return await this.validateInternal(this.value);
  }

  async validateNow(): Promise<boolean> {
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
    this.setState(result.state, result.message ?? null);
  }

  // ----------------
  // Private Helpers
  // ----------------

  private async validateInternal(val: string): Promise<boolean> {
    const runId = ++this.currentRunId;
    const context = this.formGroup?.getValue() ?? { [this.key]: val };

    // Required shortcut (first)
    if (val.trim() === "") {
      this.setState("invalid", "Field is required.");
      return false;
    }

    // Sync Validators
    for (const validator of this.validators) {
      const res = await Promise.resolve(validator.validate(val, context));
      const result = typeof res === "boolean" ? { isValid: res } : res;

      if (!result.isValid) {
        this.setState("invalid", result.message ?? "Invalid input");
        return false;
      }
    }

    // Async Validators
    if (this.asyncValidators.length > 0 && this.lastValidatedValue !== val) {
      this.setState("validating", null);

      for (const validator of this.asyncValidators) {
        const result = await validator.validate(val, context);
        if (this.currentRunId !== runId) return false;
        if (!result.isValid) {
          this.setState("invalid", result.message ?? "Invalid input");
          return false;
        }
      }

      this.lastValidatedValue = val;
    }

    this.setState("valid", null);
    return true;
  }

  private emit(type: "value", val: string): void {
    if (type === "value") {
      this.value$.next(val);
    }
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
    this.state$.next(this.state);
    this.error$.next(this.errorMessage);
  }

  private setState(newState: ValidationState, error: string | null): void {
    this.state = newState;
    this.errorMessage = error;
    this.emitState();
  }

  // Handle debounced value update
  private async handleDebouncedValue(val: string): Promise<void> {
  // This is the actual logic that gets debounced
  if (val === this.lastValidatedValue) return;
  await this.validateInternal(val);
}

  // ----------------
  // Public Accessors
  // ----------------

  get currentValue(): string {
    return this.value;
  }

  get currentState(): ValidationState {
    return this.state;
  }

  getError(): string | null {
    return this.errorMessage;
  }

  isDirty(): boolean {
    return this.dirty;
  }

  wasTouched(): boolean {
    return this.touched;
  }

  isValid(): boolean {
    return this.state === "valid";
  }
}

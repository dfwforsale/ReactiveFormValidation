import { injectable } from "inversify";
import { IReactiveFormControl } from "../Interfaces/IReactiveFormControl";
import { IReactiveFormGroup } from "../Interfaces/IReactiveFormGroup";
import { ReactiveFormDebugState } from "../Interfaces/IReactiveFormGroupState";
import { SimpleSubject } from "../Utils/SimpleSubject";

@injectable()
export class ReactiveFormGroup implements IReactiveFormGroup {
  private controls: Map<string, IReactiveFormControl> = new Map();
  private debug$ = new SimpleSubject<ReactiveFormDebugState>();

  registerControl(key: string, control: IReactiveFormControl): void {
    this.controls.set(key, control);

    // Auto-wire debug pipe for any control change
    control.onValueChange(() => this.emitDebug());
    control.onStateChange(() => this.emitDebug());
    control.onErrorChange(() => this.emitDebug());
  }

  getControl(key: string): IReactiveFormControl | undefined {
    return this.controls.get(key);
  }
  getControlKeys(): string[] {
    return Array.from(this.controls.keys());
  }
  getValue(): Record<string, string> {
    const result: Record<string, string> = {};
    for (const [key, control] of this.controls.entries()) {
      result[key] = control.currentValue;
    }
    return result;
  }

  async validateAll(): Promise<boolean> {
    const results = await Promise.all(
      Array.from(this.controls.values()).map((c) => c.validate())
    );
    return results.every((result) => result === true);
  }

  isValid(): boolean {
    return Array.from(this.controls.values()).every((c) => c.isValid());
  }

  isDirty(): boolean {
    return Array.from(this.controls.values()).some((c) => c.isDirty());
  }

  wasTouched(): boolean {
    return Array.from(this.controls.values()).some((c) => c.wasTouched());
  }

  onDebugUpdate(callback: (debugState: ReactiveFormDebugState) => void): void {
    this.debug$.subscribe(callback);
  }

  private emitDebug(): void {
    const debug: ReactiveFormDebugState = {
      timestamp: Date.now(),
      isValid: this.isValid(),
      isDirty: this.isDirty(),
      wasTouched: this.wasTouched(),
      values: {},
      states: {},
      errors: {},
      raw: {},
    };

    for (const [key, control] of this.controls.entries()) {
      debug.values[key] = control.currentValue;
      debug.states[key] = control.currentState;
      debug.errors[key] = control.getError();
      debug.raw[key] = control;
    }

    this.debug$.next(debug);
  }
}

import { IFieldState } from "../Interfaces/IFieldState";
import { IFieldStateProvider } from "../Interfaces/IFieldStateProvider";
import { IFormState } from "../Interfaces/IFormState";
import { IFormStateProvider } from "../Interfaces/IFormStateProvider";

export class FormStateProvider implements IFieldStateProvider, IFormStateProvider {
  private fieldStates = new Map<string, IFieldState>();
  private fieldSubscribers = new Map<string, ((state: IFieldState) => void)[]>();
  private formSubscribers: ((state: IFormState) => void)[] = [];

  getFieldState(key: string): IFieldState | null {
    return this.fieldStates.get(key) ?? null;
  }

  updateFieldState(state: IFieldState): void {
    this.fieldStates.set(state.key, state);

    // Notify field listeners
    this.fieldSubscribers.get(state.key)?.forEach(cb => cb(state));

    // Notify form-level listeners
    const formState = this.getFormState();
    this.formSubscribers.forEach(cb => cb(formState));
  }

  subscribeField(key: string, callback: (state: IFieldState) => void): void {
    if (!this.fieldSubscribers.has(key)) {
      this.fieldSubscribers.set(key, []);
    }
    this.fieldSubscribers.get(key)!.push(callback);
  }

  subscribeForm(callback: (formState: IFormState) => void): void {
    this.formSubscribers.push(callback);
  }

  getFormState(): IFormState {
    const fields: Record<string, IFieldState> = {};
    let isValid = true;

    for (const [key, value] of this.fieldStates.entries()) {
      fields[key] = value;
      if (value.state === "invalid") isValid = false;
    }

    return { fields, isValid };
  }
}
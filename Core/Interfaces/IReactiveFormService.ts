import { IReactiveFormGroup } from "./IReactiveFormGroup";
import { ReactiveFormDebugState } from "./IReactiveFormGroupState";

export interface IReactiveFormService {
  /**
   * Parses and builds all reactive forms on the page.
   */
  bootstrapAll(): void;

  /**
   * Parses and builds a single reactive form for the given element.
   */
  bootstrapForm(form: HTMLFormElement): void;

  /**
   * Gets the current form group associated with a given form element.
   */
  getFormGroup(form: HTMLFormElement): IReactiveFormGroup | null;

  /**
   * Subscribes to debug updates for a form.
   */
  onDebugUpdate(form: HTMLFormElement, cb: (state: ReactiveFormDebugState) => void): void;
}

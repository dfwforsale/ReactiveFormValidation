import { injectable } from "inversify";

import { IReactiveFormControl } from "../Interfaces/IReactiveFormControl";
import { IFormBinderBootstrapper } from "../Interfaces/IFormBinderBoostrapper";
import { IParsedFormDefinition } from "../Interfaces/IParsedFormDefinition";
import { IReactiveFormGroup } from "../Interfaces/IReactiveFormGroup";

@injectable()
export class FormBinderBootstrapper implements IFormBinderBootstrapper {
  bind(formDef: IParsedFormDefinition, group: IReactiveFormGroup): void {
    throw new Error("Method not implemented.");
  }
  bindControlsToInputs(
    form: HTMLFormElement,
    controlMap: Map<string, IReactiveFormControl>
  ): void {
    for (const [key, control] of controlMap.entries()) {
      const input = form.elements.namedItem(key) as HTMLInputElement;

      if (!input) {
        console.warn(`[FormBinderBootstrapper] No input found for: ${key}`);
        continue;
      }

      // Sync input -> control
      input.addEventListener("input", () => {
        control.setValue(input.value);
      });

      input.addEventListener("blur", () => {
        control.markAsTouched();
        control.validate(); // Optional: eager validation on blur
      });

      // Sync control -> input
      control.value$.subscribe((val: string) => {
        if (input.value !== val) input.value = val;
      });

      control.state$.subscribe((state: string) => {
        input.setAttribute("data-state", state);
      });

      control.error$.subscribe((msg: string) => {
        const status = document.getElementById(`${input.id}Status`);
        if (status) {
          status.textContent = msg || "";
          status.className = msg ? "error" : "";
        }
      });
    }
  }
}

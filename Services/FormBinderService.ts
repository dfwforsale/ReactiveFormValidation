import { injectable } from "inversify";
import { IReactiveFormGroup } from "../Core/Interfaces/IReactiveFormGroup";


@injectable()
export class FormBinderService {
  bindForm(form: HTMLFormElement, group: IReactiveFormGroup): void {
    const inputs = form.querySelectorAll("input[name]");

    inputs.forEach((input) => {
      const key = input.getAttribute("name");
      if (!key) return;

      const control = group.getControl(key);
      if (!control) {
        console.warn(`[FormBinder] No control found for "${key}"`);
        return;
      }

      // 🔄 DOM -> Control
      input.addEventListener("input", (e) => {
        const target = e.target as HTMLInputElement;
        control.setValue(target.value);
      });

      input.addEventListener("blur", () => {
        control.markAsTouched();
      });

      // 🔄 Control -> DOM (for external programmatic updates)
      control.onValueChange((val) => {
        const inputEl = input as HTMLInputElement;
        if (inputEl.value !== val) inputEl.value = val;
      });

      // 🎯 Hook status updates
      const statusEl = document.getElementById(`${key}Status`);
      if (statusEl) {
        control.onErrorChange((msg) => {
          statusEl.textContent = msg ?? "";
        });
        control.onStateChange((state) => {
          statusEl.setAttribute("data-state", state);
        });
      }
    });
  }
}

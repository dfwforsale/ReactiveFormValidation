import { container } from "../DependencyInjection/container-config";
import { IReactiveValidatorService } from "../Interfaces/IReactiveValidatorService";
import { ContainerTypes } from "../Types/ContainerTypes";

export class ReactiveFormBootstrapper {
  private service: IReactiveValidatorService | null = null;

  constructor(private formId: string) {}

  public bootstrap(): void {
    const formElement = document.getElementById(this.formId) as HTMLFormElement | null;

    if (!formElement) {
      console.error(`[Bootstrapper] ❌ Could not find form with id: ${this.formId}`);
      return;
    }

    try {
      this.service = container.get<IReactiveValidatorService>(ContainerTypes.ReactiveValidatorService);
    } catch (err) {
      console.error("[Bootstrapper] ❌ DI resolution failed for IReactiveValidatorService:", err);
      return;
    }

    const group = this.service.registerForm(formElement);

    // ---- CRITICAL: Bind inputs to controls ----
    // Assuming group has a method getControlKeys(): string[]
    for (const key of (typeof group.getControlKeys === "function" ? group.getControlKeys() : [])) {
      const control = group.getControl(key);
      // Prefer by name, fallback to id
      const input = formElement.querySelector<HTMLInputElement>(`[name='${key}'], [id='${key}']`);
      if (!control || !input) continue;

      // Set initial control value from DOM
      control.setValue(input.value);

      // Wire input event to update control value
      input.addEventListener("input", (e) => {
        control.setValue((e.target as HTMLInputElement).value);
      });

      // Wire blur event to mark as touched
      input.addEventListener("blur", () => {
        control.markAsTouched();
      });

      // Optional: live feedback with CSS class
      control.onErrorChange((msg) => {
        input.classList.toggle("is-invalid", !!msg);
      });
    }

    // ✅ Subscribe to real-time debug output
    group.onDebugUpdate((debugState) => {
      console.log("[Bootstrapper] 🐞 Debug Update:", JSON.stringify(debugState, null, 2));
    });

    formElement.addEventListener("submit", async (e) => {
      e.preventDefault();

      let isValid = false;
      try {
        isValid = await this.service!.validateForm(group);
      } catch (err) {
        console.error("[Bootstrapper] 🚨 Validation error:", err);
        return;
      }

      console.log("[Bootstrapper] ✅ Form valid?", isValid);

      if (!isValid) {
        console.warn("[Bootstrapper] 🚫 Form submission blocked due to validation errors.");
        return;
      }

      // 🔥 Replace with real backend integration
      try {
        console.log("[Bootstrapper] 📨 Submitting form with values:", group.getValue());
        // await sendToBackend(group.getValue()); // <--- your real backend call goes here
      } catch (err) {
        console.error("[Bootstrapper] ❌ Form submission failed:", err);
      }
    });
  }
}

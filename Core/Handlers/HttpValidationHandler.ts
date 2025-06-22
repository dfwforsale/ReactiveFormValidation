import { injectable } from "inversify";

import { IValidationRuleConfig } from "../Interfaces/IValidationRuleConfig";
import { IAsyncValidationHandler } from "../Interfaces/IAsyncValidationHandler";

@injectable()
export class HttpValidationHandler implements IAsyncValidationHandler {
  async validateAsync(
    rule: IValidationRuleConfig,
    value: string,
    context: Record<string, any>
  ): Promise<{ isValid: boolean; message?: string }> {
    try {
      const endpoint = rule.methodName; // Expect full URL
      const payload = { value, context, args: rule.args || [] };

      const res = await fetch(endpoint!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!res.ok) throw new Error("Request failed");

      return await res.json();
    } catch (err) {
      console.error("[HttpValidationHandler] Failed:", err);
      return { isValid: false, message: "Validation service unavailable." };
    }
  }
}
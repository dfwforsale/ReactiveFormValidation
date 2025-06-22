import { IFormParserService } from "../Core/Interfaces/IFormParserService";
import { IParsedControlDefinition } from "../Core/Interfaces/IParsedControlDefinition";
import { IParsedFormDefinition } from "../Core/Interfaces/IParsedFormDefinition";
import { IValidationRuleConfig } from "../Core/Interfaces/IValidationRuleConfig";

export class FormParserService implements IFormParserService {
  /**
   * Parses all forms on the page marked with `[data-reactive-form]`
   */
  parseAll(): IParsedFormDefinition[] {
    const forms = Array.from(document.querySelectorAll<HTMLFormElement>("form[data-reactive-form]"));
    return forms
      .map(form => this.parseForm(form))
      .filter((x): x is IParsedFormDefinition => x !== null);
  }

  /**
   * Parses a single form element.
   */
  parseForm(form: HTMLFormElement): IParsedFormDefinition | null {
    const raw = form.getAttribute("data-validate");
    if (!raw) return null;

    let parsed: Record<string, any>;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      console.warn("[FormParserService] Malformed validation JSON on form:", form, err);
      return null;
    }

    const controls: IParsedControlDefinition[] = [];

    for (const [key, rulesRaw] of Object.entries(parsed)) {
      const input = form.querySelector<HTMLInputElement>(`[name='${key}'], [id='${key}']`);
      if (!input) {
        console.warn(`[FormParserService] No matching input found for key: '${key}'`);
        continue;
      }

      try {
        const ruleList: IValidationRuleConfig[] = this.parseRuleList(rulesRaw);
        controls.push({ input, key, rules: ruleList });
      } catch (err) {
        console.warn(`[FormParserService] Failed to parse rules for '${key}':`, err);
      }
    }

    return { form, controls };
  }

  private parseRuleList(rules: Record<string, any>): IValidationRuleConfig[] {
    const out: IValidationRuleConfig[] = [];

    for (const [type, val] of Object.entries(rules)) {
      if (typeof type !== "string") continue;

      const config: IValidationRuleConfig = {
        type,
        value: val,
      };

      if (typeof val === "object" && val !== null && !Array.isArray(val)) {
        config.message = val.message;
        config.value = val.value ?? val;
        config.methodName = val.methodName;
        config.args = val.args;
        config.pattern = val.pattern;
        config.matches = val.matches;
        config.validate = val.validate;
      }

      out.push(config);
    }

    return out;
  }
}
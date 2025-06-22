import { IValidationRuleConfig } from "../Interfaces/IValidationRuleConfig";
import { IValidator } from "../Interfaces/IValidator";

export class RequiredValidator implements IValidator {
  constructor(private rule: IValidationRuleConfig) {}

  validate(value: string): boolean | { isValid: boolean; message?: string } {
    const isValid = value.trim().length > 0;
    return isValid || { isValid: false, message: this.rule.message || "This field is required." };
  }
}

export class MinLengthValidator implements IValidator {
  constructor(private rule: IValidationRuleConfig) {}

  validate(value: string): boolean | { isValid: boolean; message?: string } {
    const min = Number(this.rule.value || 0);
    const isValid = value.length >= min;
    return isValid || {
      isValid: false,
      message: this.rule.message || `Minimum length is ${min}.`
    };
  }
}

export class MaxLengthValidator implements IValidator {
  constructor(private rule: IValidationRuleConfig) {}

  validate(value: string): boolean | { isValid: boolean; message?: string } {
    const max = Number(this.rule.value || Infinity);
    const isValid = value.length <= max;
    return isValid || {
      isValid: false,
      message: this.rule.message || `Maximum length is ${max}.`
    };
  }
}

export class PatternValidator implements IValidator {
  constructor(private rule: IValidationRuleConfig) {}

  validate(value: string): boolean | { isValid: boolean; message?: string } {
    const patternValue = typeof this.rule.value === "string" ? this.rule.value : String(this.rule.value || ".*");
    const pattern = new RegExp(patternValue);
    const isValid = pattern.test(value);
    return isValid || {
      isValid: false,
      message: this.rule.message || `Value does not match the required pattern.`
    };
  }
}


export class MatchesValidator implements IValidator {
  constructor(private rule: IValidationRuleConfig) {}

  validate(value: string, context: Record<string, any>): boolean | { isValid: boolean; message?: string } {
    const matchKey = String(this.rule.value || "");
    const matchValue = context[matchKey];
    const isValid = value === matchValue;
    return isValid || {
      isValid: false,
      message: this.rule.message || `Value does not match ${matchKey}.`
    };
  }
}
export class EmailValidator implements IValidator {
  constructor(private rule: IValidationRuleConfig) {}

  validate(value: string): boolean | { isValid: boolean; message?: string } {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailPattern.test(value);
    return isValid || { isValid: false, message: this.rule.message || "Invalid email address." };
  }
}



import { injectable } from "inversify";
import { IValidatorFactory } from "../Interfaces/IValidatorFactory";
import { IValidationRuleConfig } from "../Interfaces/IValidationRuleConfig";
import { IValidator } from "../Interfaces/IValidator";
import {
  EmailValidator,
  MatchesValidator,
  MaxLengthValidator,
  MinLengthValidator,
  PatternValidator,
  RequiredValidator,
} from "../Validators/GlobalValidators";

@injectable()
export class ValidatorFactory implements IValidatorFactory {
  createValidators(rules: IValidationRuleConfig[]): IValidator[] {
    return rules
      .filter(rule => this.isSyncValidator(rule.type))
      .map((rule) => this.createValidator(rule))
      .filter((v): v is IValidator => v !== null);
  }

  private isSyncValidator(type: string): boolean {
    return [
      "required",
      "minLength",
      "maxLength",
      "pattern",
      "email"
    ].includes(type);
  }

  private createValidator(rule: IValidationRuleConfig): IValidator | null {
    switch (rule.type) {
      case "required":
        return new RequiredValidator(rule);
      case "minLength":
        return new MinLengthValidator(rule);
      case "maxLength":
        return new MaxLengthValidator(rule);
      case "pattern":
        return new PatternValidator(rule);
      case "email":
        return new EmailValidator(rule);
      default:
        console.warn(`[ValidatorFactory] Unknown validator type: ${rule.type}`);
        return null;
    }
  }
}

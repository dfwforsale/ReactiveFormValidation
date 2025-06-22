import { injectable } from "inversify";
import { IValidatorFactory } from "../Interfaces/IValidatorFactory";
import { IValidationRuleConfig } from "../Interfaces/IValidationRuleConfig";
import { IValidator } from "../Interfaces/IValidator";
import {
  MatchesValidator,
  MaxLengthValidator,
  MinLengthValidator,
  PatternValidator,
  RequiredValidator,
} from "../Validators/RequiredValidator";

@injectable()
export class ValidatorFactory implements IValidatorFactory {
  createValidators(rules: IValidationRuleConfig[]): IValidator[] {
    return rules
      .map((rule) => this.createValidator(rule))
      .filter((v): v is IValidator => v !== null);
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
      case "matches":
        return new MatchesValidator(rule);
      default:
        console.warn(`[ValidatorFactory] Unknown validator type: ${rule.type}`);
        return null;
    }
  }
}

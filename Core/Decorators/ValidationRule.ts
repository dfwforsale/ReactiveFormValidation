import "reflect-metadata";
import { IValidationRuleConfig } from "../Interfaces/IValidationRuleConfig";

const VALIDATION_RULES_KEY = Symbol("validation:rules");

export function ValidationRule(rule: IValidationRuleConfig): PropertyDecorator {
  return (target, propertyKey) => {
    const existingRules: IValidationRuleConfig[] =
      Reflect.getMetadata(VALIDATION_RULES_KEY, target, propertyKey) || [];
    existingRules.push(rule);
    Reflect.defineMetadata(VALIDATION_RULES_KEY, existingRules, target, propertyKey);
  };
}

export function getValidationRules(target: any, propertyKey: string | symbol): IValidationRuleConfig[] {
  return Reflect.getMetadata(VALIDATION_RULES_KEY, target, propertyKey) || [];
}

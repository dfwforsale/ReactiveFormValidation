

import { IParsedFormDefinition } from "../Interfaces/IParsedFormDefinition";
import { IValidationRuleConfig } from "../Interfaces/IValidationRuleConfig";

export function parseModelToFormDefinition(model: object): IParsedFormDefinition {
  const controls = Object.keys(model).map((key) => {
    const rules: IValidationRuleConfig[] =
      Reflect.getMetadata("validation:rules", model, key) || [];

    return {
      key,
      rules,
      input: null
    };
  });

  return {
    form: null,
    controls
  };
}



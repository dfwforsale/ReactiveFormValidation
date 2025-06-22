import { inject, injectable } from "inversify";
import { IReactiveValidatorService } from "../Core/Interfaces/IReactiveValidatorService";
import { IFormControlFactory } from "../Core/Interfaces/IFormControlFactory";
import { IFormGroupFactory } from "../Core/Interfaces/IFormGroupFactory";
import { IFormParserService } from "../Core/Interfaces/IFormParserService";
import { IReactiveFormControl } from "../Core/Interfaces/IReactiveFormControl";
import { IReactiveFormGroup } from "../Core/Interfaces/IReactiveFormGroup";
import { IValidationRuleConfig } from "../Core/Interfaces/IValidationRuleConfig";
import { ContainerTypes } from "../Core/Types/ContainerTypes";

@injectable()
export class ReactiveValidatorService implements IReactiveValidatorService {
  private formRegistry: Map<HTMLFormElement, IReactiveFormGroup> = new Map();

  constructor(
    @inject(ContainerTypes.FormParserService)
    private parser: IFormParserService,

    @inject(ContainerTypes.FormControlFactory)
    private controlFactory: IFormControlFactory,

    @inject(ContainerTypes.FormGroupFactory)
    private groupFactory: IFormGroupFactory
  ) {}

  createControlFromRules(
    key: string,
    rules: IValidationRuleConfig[]
  ): IReactiveFormControl {
    return this.controlFactory.createControl(key, rules);
  }

  registerForm(form: HTMLFormElement): IReactiveFormGroup {
    const def = this.parser.parseForm(form);
    if (!def) {
      throw new Error("Failed to parse form definition.");
    }
    const group = this.groupFactory.create(def);
    this.formRegistry.set(form, group);
    return group;
  }

  async validateForm(group: IReactiveFormGroup): Promise<boolean> {
    return await group.validateAll();
  }
}
import { inject, injectable } from "inversify";
import { IFormGroupFactory } from "../Interfaces/IFormGroupFactory";
import { IReactiveFormGroup } from "../Interfaces/IReactiveFormGroup";
import { IFormControlFactory } from "../Interfaces/IFormControlFactory";
import { IParsedFormDefinition } from "../Interfaces/IParsedFormDefinition";

import { ContainerTypes } from "../Types/ContainerTypes";
import { ReactiveFormGroup } from "../FormGroup/ReactiveFormGroup";


@injectable()
export class FormGroupFactory implements IFormGroupFactory {
  constructor(
    @inject(ContainerTypes.FormControlFactory)
    private controlFactory: IFormControlFactory
  ) {}

  // Optional alias or overload for more semantic naming
  createGroup(parsed: IParsedFormDefinition): IReactiveFormGroup {
    return this.create(parsed);
  }

  create(formDef: IParsedFormDefinition): IReactiveFormGroup {
    const group = new ReactiveFormGroup();

    for (const def of formDef.controls) {
      const control = this.controlFactory.createControl(def.key, def.rules);
      group.registerControl(def.key, control);
    }

    return group;
  }
}
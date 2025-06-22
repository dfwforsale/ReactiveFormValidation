import { injectable, inject } from "inversify";
import { IReactiveFormGroup } from "../Interfaces/IReactiveFormGroup";
import { ContainerTypes } from "../Types/ContainerTypes"; // Update the path as needed
import { IParsedFormDefinition } from "../Interfaces/IParsedFormDefinition"; // Add this import
import { IFormParserService } from "../Interfaces/IFormParserService";
import { IFormGroupFactory } from "../Interfaces/IFormGroupFactory";
import { IFormControlFactory } from "../Interfaces/IFormControlFactory";
import { IReactiveFormBuilder } from "../Interfaces/IReactiveFormBuilder";
@injectable()
export class ReactiveFormBuilder implements IReactiveFormBuilder {
  constructor(
    @inject(ContainerTypes.FormParserService) private parser: IFormParserService,
    @inject(ContainerTypes.FormGroupFactory) private formGroupFactory: IFormGroupFactory,
    @inject(ContainerTypes.FormControlFactory) private controlFactory: IFormControlFactory
  ) {}

  buildAll(): IReactiveFormGroup[] {
    const parsedForms = this.parser.parseAll();
    return parsedForms.map(def => this.buildFormInternal(def)).filter(Boolean) as IReactiveFormGroup[];
  }

  buildForm(form: HTMLFormElement): IReactiveFormGroup | null {
    const def = this.parser.parseForm(form);
    return def ? this.buildFormInternal(def) : null;
  }

  private buildFormInternal(def: IParsedFormDefinition): IReactiveFormGroup {
    const group = this.formGroupFactory.create(def);

    for (const controlDef of def.controls) {
      const control = this.controlFactory.createControl(controlDef.key, controlDef.rules);
      group.registerControl(controlDef.key, control);
    }

    return group;
  }
}
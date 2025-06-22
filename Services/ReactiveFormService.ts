import { inject, injectable } from "inversify";
import { IReactiveFormService } from "../Core/Interfaces/IReactiveFormService";
import { IReactiveFormGroup } from "../Core/Interfaces/IReactiveFormGroup";
import { ContainerTypes } from "../Core/Types/ContainerTypes";
import { IFormParserService } from "../Core/Interfaces/IFormParserService";
import { IFormGroupFactory } from "../Core/Interfaces/IFormGroupFactory";
import { IParsedFormDefinition } from "../Core/Interfaces/IParsedFormDefinition";
import { ReactiveFormDebugState } from "../Core/Interfaces/IReactiveFormGroupState";

@injectable()
export class ReactiveFormService implements IReactiveFormService {
  private formMap: Map<HTMLFormElement, IReactiveFormGroup> = new Map();

  constructor(
    @inject(ContainerTypes.FormParserService)
    private parser: IFormParserService,

    @inject(ContainerTypes.FormGroupFactory)
    private groupFactory: IFormGroupFactory
  ) {}

  bootstrapAll(): void {
    const forms = this.parser.parseAll();
    forms.forEach((formDef) => this.bootstrapFormDefinition(formDef));
  }

  bootstrapForm(form: HTMLFormElement): void {
    const def = this.parser.parseForm(form);
    if (def) {
      this.bootstrapFormDefinition(def);
    } else {
      console.warn("[ReactiveFormService] Could not parse form:", form);
    }
  }

  private bootstrapFormDefinition(def: IParsedFormDefinition): void {
    const group = this.groupFactory.create(def);
    if (def.form) {
      this.formMap.set(def.form, group);
    } else {
      console.warn("[ReactiveFormService] Parsed form definition has null form:", def);
    }
  }

  getFormGroup(form: HTMLFormElement): IReactiveFormGroup | null {
    return this.formMap.get(form) ?? null;
  }

  onDebugUpdate(form: HTMLFormElement, cb: (state: ReactiveFormDebugState) => void): void {
    const group = this.getFormGroup(form);
    if (!group) {
      console.warn("[ReactiveFormService] Form not registered:", form);
      return;
    }
    group.onDebugUpdate(cb);
  }
}
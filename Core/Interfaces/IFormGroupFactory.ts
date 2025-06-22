import { IParsedFormDefinition } from "./IParsedFormDefinition";
import { IReactiveFormGroup } from "./IReactiveFormGroup";

export interface IFormGroupFactory {
  createGroup(parsed: IParsedFormDefinition): unknown;
  create(formDef: IParsedFormDefinition): IReactiveFormGroup;
}

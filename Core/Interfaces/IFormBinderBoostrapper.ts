import { IParsedFormDefinition } from "./IParsedFormDefinition";
import { IReactiveFormGroup } from "./IReactiveFormGroup";

export interface IFormBinderBootstrapper {
  bind(formDef: IParsedFormDefinition, group: IReactiveFormGroup): void;
}

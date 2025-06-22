import { IParsedFormDefinition } from "./IParsedFormDefinition";
import { IReactiveFormGroup } from "./IReactiveFormGroup";

export interface IControlRegistrationService {
  registerParsedControls(parsed: IParsedFormDefinition, formGroup: IReactiveFormGroup): Promise<void>;
}
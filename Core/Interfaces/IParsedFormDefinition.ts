// Core/Interfaces/IParsedFormDefinition.ts
import { IParsedControlDefinition } from "./IParsedControlDefinition";

export interface IParsedFormDefinition {
  form: HTMLFormElement;
  controls: IParsedControlDefinition[];
}

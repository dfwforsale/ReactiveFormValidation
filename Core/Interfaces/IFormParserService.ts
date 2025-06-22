import { IParsedFormDefinition } from "./IParsedFormDefinition";

export interface IFormParserService {
  /**
   * Parses all forms on the page that are marked with the `data-reactive-form` attribute.
   */
  parseAll(): IParsedFormDefinition[];

  /**
   * Parses a single HTMLFormElement for validation rules and control definitions.
   * @param form The form element to parse.
   */
  parseForm(form: HTMLFormElement): IParsedFormDefinition | null;
}
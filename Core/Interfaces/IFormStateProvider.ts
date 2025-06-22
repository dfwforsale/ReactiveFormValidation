import { IFormState } from "./IFormState";

export interface IFormStateProvider {
  getFormState(): IFormState;
  subscribeForm(callback: (formState: IFormState) => void): void;
}


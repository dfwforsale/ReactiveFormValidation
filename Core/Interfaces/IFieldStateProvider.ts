import { IFieldState } from "./IFieldState";

export interface IFieldStateProvider {
  getFieldState(key: string): IFieldState | null;
  subscribeField(key: string, callback: (state: IFieldState) => void): void;
  updateFieldState(state: IFieldState): void;
}



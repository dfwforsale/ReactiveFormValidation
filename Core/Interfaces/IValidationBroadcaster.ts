import { ValidationBroadcastPayload } from "./IValidationBroadcastPayload";

export interface IValidationBroadcaster {
  publishState(state: ValidationBroadcastPayload): void;
  subscribe(key: string, handler: (payload: ValidationBroadcastPayload) => void): void;
}
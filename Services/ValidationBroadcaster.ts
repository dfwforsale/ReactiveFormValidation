import { injectable } from "inversify";
import { IValidationBroadcaster } from "../Core/Interfaces/IValidationBroadaster";
import { ValidationBroadcastPayload } from "../Core/Interfaces/IValidationBroadcastPayload";

@injectable()
export class ValidationBroadcaster implements IValidationBroadcaster {
  private handlers: Map<string, ((payload: ValidationBroadcastPayload) => void)[]> = new Map();

  publishState(payload: ValidationBroadcastPayload): void {
    const list = this.handlers.get(payload.key);
    if (list) {
      for (const handler of list) {
        try {
          handler(payload);
        } catch (err) {
          console.error(`[ValidationBroadcaster] Error publishing to ${payload.key}`, err);
        }
      }
    }
  }

  subscribe(key: string, handler: (payload: ValidationBroadcastPayload) => void): void {
    if (!this.handlers.has(key)) {
      this.handlers.set(key, []);
    }
    this.handlers.get(key)!.push(handler);
  }
}
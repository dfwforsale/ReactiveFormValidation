import { injectable } from "inversify";
import { IFieldStateTracker } from "../Interfaces/IFieldStateTracker";

@injectable()
export class FieldStateTracker implements IFieldStateTracker {
  private listeners: Map<string, Set<() => void>> = new Map();

  notifyFieldChange(fieldKey: string): void {
    const callbacks = this.listeners.get(fieldKey);
    if (callbacks) {
      for (const cb of callbacks) {
        try {
          cb();
        } catch (err) {
          console.error(`[FieldStateTracker] Error in callback for "${fieldKey}"`, err);
        }
      }
    }
  }

  onFieldChange(fieldKey: string, callback: () => void): void {
    if (!this.listeners.has(fieldKey)) {
      this.listeners.set(fieldKey, new Set());
    }
    this.listeners.get(fieldKey)!.add(callback);
  }
}
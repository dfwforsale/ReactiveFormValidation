export interface IFieldStateTracker {
  notifyFieldChange(fieldKey: string): void;
  onFieldChange(fieldKey: string, callback: () => void): void;
}

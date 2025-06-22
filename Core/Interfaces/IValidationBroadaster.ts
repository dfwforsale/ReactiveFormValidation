export interface IValidationBroadcaster {
  publishState(payload: {
    key: string;
    value: string;
    state: string;
    error?: string | null;
    touched?: boolean;
    dirty?: boolean;
  }): void;

  subscribe(key: string, callback: (payload: any) => void): void;
}
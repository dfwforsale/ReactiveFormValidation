export interface ValidationBroadcastPayload {
  key: string;
  value: string;
  state: "idle" | "validating" | "valid" | "invalid";
  error?: string | null;
  dirty?: boolean;
  touched?: boolean;
}
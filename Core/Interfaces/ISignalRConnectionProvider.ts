import type { HubConnection } from "@microsoft/signalr";

export interface ISignalRConnectionProvider {
  /**
   * Returns a promise that resolves to an active SignalR HubConnection.
   * Implementations should ensure only one connection is active at a time.
   */
  getConnection(): Promise<HubConnection>;

  /**
   * Returns a promise that resolves to the SignalR connectionId (string).
   * Implementations should ensure the connection is started before resolving.
   */
  getConnectionId(): Promise<string>;
}

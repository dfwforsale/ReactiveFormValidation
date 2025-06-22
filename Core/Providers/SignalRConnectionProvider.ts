import { HubConnection, HubConnectionBuilder } from "@microsoft/signalr";
import { injectable } from "inversify";
import { ISignalRConnectionProvider } from "../Interfaces/ISignalRConnectionProvider";



@injectable()
export class SignalRConnectionProvider implements ISignalRConnectionProvider {
  private connection: HubConnection | null = null;
  private connecting: Promise<HubConnection> | null = null;
  private connectionId: string | null = null;
  private connectionIdPromise: Promise<string> | null = null;

  async getConnection(): Promise<HubConnection> {
    if (this.connection) return this.connection;

    if (!this.connecting) {
      this.connecting = new Promise<HubConnection>(async (resolve, reject) => {
        try {
          const conn = new HubConnectionBuilder()
            .withUrl("/hubs/validation")
            .withAutomaticReconnect()
            .build();

          await conn.start();
          console.log("[SignalR] Connected to validation hub.");

          this.connection = conn;

          // Optionally pre-fetch connectionId
          this.getConnectionId().catch((err) =>
            console.warn("[SignalR] Could not get connectionId:", err)
          );

          resolve(conn);
        } catch (err) {
          console.error("[SignalR] Connection failed:", err);
          reject(err);
        } finally {
          this.connecting = null;
        }
      });
    }

    return this.connecting;
  }

  /**
   * Gets the current connectionId (resolved after connection is started).
   * Assumes the backend exposes a hub method named 'GetConnectionId'.
   */
  async getConnectionId(): Promise<string> {
    if (this.connectionId) return this.connectionId;

    if (!this.connectionIdPromise) {
      this.connectionIdPromise = new Promise<string>(async (resolve, reject) => {
        try {
          const conn = await this.getConnection();
          // Assumes your hub has a 'GetConnectionId' method
          const id = await conn.invoke<string>("GetConnectionId");
          this.connectionId = id;
          resolve(id);
        } catch (err) {
          reject(err);
        }
      });
    }
    return this.connectionIdPromise;
  }
}


export class SimpleSubject<T> {
  private listeners: Set<(value: T) => void> = new Set();

  subscribe(listener: (value: T) => void): void {
    this.listeners.add(listener);
  }

  unsubscribe(listener: (value: T) => void): void {
    this.listeners.delete(listener);
  }

  next(value: T): void {
    this.emit(value);
  }

  private emit(value: T): void {
    for (const listener of this.listeners) {
      try {
        listener(value);
      } catch (err) {
        console.error("[SimpleSubject] Error in subscriber:", err);
      }
    }
  }

  clear(): void {
    this.listeners.clear();
  }

  getSubscriberCount(): number {
    return this.listeners.size;
  }
}

// utils/debounce.ts

export type DebouncedFunction<T extends (...args: any[]) => void> = {
  (...args: Parameters<T>): void;
  cancel: () => void;
};

export class Debouncer<T extends (...args: any[]) => void> {
  private debouncedFn: DebouncedFunction<T>;

  constructor(private fn: T, private delay = 300) {
    this.debouncedFn = this.createDebouncedFn();
  }

  private createDebouncedFn(): DebouncedFunction<T> {
    let timer: ReturnType<typeof setTimeout> | null = null;

    const debounced = ((...args: Parameters<T>) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => this.fn(...args), this.delay);
    }) as DebouncedFunction<T>;

    debounced.cancel = () => {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };

    return debounced;
  }

  run(...args: Parameters<T>) {
    this.debouncedFn(...args);
  }

  cancel() {
    this.debouncedFn.cancel();
  }
}
export interface IStack<T> {
  push(value: T): void;
  pop(): T;
  peek(): T;
  isEmpty(): boolean;
  size(): number;
}

export default class Stack<T> implements IStack<T> {
  private readonly values: T[];
  private pos: number;

  constructor() {
    this.values = [];
    this.pos = 0;
  }

  isEmpty(): boolean {
    return this.pos == 0;
  }

  peek(): T {
    return this.values[this.pos - 1];
  }

  pop(): T {
    return this.values[--this.pos];
  }

  push(value: T): void {
    this.values[this.pos++] = value;
  }

  size(): number {
    return this.pos;
  }
}

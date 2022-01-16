export class LinkedListNode<T> {
  private readonly _value: T;
  private _next: LinkedListNode<T> | null = null;
  private _prev: LinkedListNode<T> | null = null;

  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  get next(): LinkedListNode<T> | null {
    return this._next;
  }

  get prev(): LinkedListNode<T> | null {
    return this._prev;
  }

  set next(value: LinkedListNode<T> | null) {
    this._next = value;
  }

  set prev(value: LinkedListNode<T> | null) {
    this._prev = value;
  }
}

type List<T> = {
  head: LinkedListNode<T>;
  tail: LinkedListNode<T>;
  size: number;
};

interface ILinkedList<T> {
  add(value: T): void;
  isEmpty(): boolean;
  size(): number;
}

export default class LinkedList<T> implements Iterable<T>, ILinkedList<T> {
  private list: List<T> | undefined;

  *[Symbol.iterator](): Iterator<T> {
    if (!this.list) return;

    let p: LinkedListNode<T> | null;
    for (p = this.list.head; p; p = p.next) {
      yield p.value;
    }
  }

  add(value: T): void {
    const newNode = new LinkedListNode(value);

    if (!this.list) {
      this.init(newNode);
      return;
    }

    this.list.tail.next = newNode;
    newNode.prev = this.list.tail;
    this.list.tail = newNode;
    this.list.size++;
  }

  private init(newNode: LinkedListNode<T>) {
    this.list = { head: newNode, tail: newNode, size: 1 };
  }

  isEmpty(): boolean {
    return !this.list || this.size() == 0;
  }

  size(): number {
    return this.list?.size || 0;
  }

  indexOf(index: number): T {
    return this.moveTo(index).value;
  }

  private moveTo(index: number): LinkedListNode<T> {
    if (!this.list) throw new Error("empty list");

    let p: LinkedListNode<T> | null = this.list.head;
    while (index-- && p) {
      p = p.next;
    }

    if (!p) throw new Error("out of index");
    return p;
  }

  addFront(value: T) {
    const newNode = new LinkedListNode<T>(value);

    if (!this.list) {
      this.init(newNode);
      return;
    }

    this.list.head.prev = newNode;
    newNode.next = this.list.head;
    this.list.head = newNode;
    this.list.size++;
  }

  remove(): T {
    if (!this.list) throw new Error("empty list");

    const result = this.list.tail.value;
    this.list.tail = this.list.tail.prev!;
    this.list.tail.next = null;
    this.list.size--;

    return result;
  }

  removeFront(): T {
    if (!this.list) throw new Error("empty list");

    const result = this.list.head.value;
    this.list.head = this.list.head.next!;
    this.list.head.prev = null;
    this.list.size--;

    return result;
  }

  insert(index: number, value: T) {
    const p = this.moveTo(index);
    const newNode = new LinkedListNode(value);
    const tmp = p.prev;

    p.prev = newNode;
    if (tmp) {
      tmp.next = newNode;
      newNode.prev = tmp;
    }
    newNode.next = p;
  }

  peekFront(): T {
    if (!this.list) throw new Error("empty list");
    return this.list.head.value;
  }

  peekBack() {
    if (!this.list) throw new Error("empty list");
    return this.list.tail.value;
  }
}

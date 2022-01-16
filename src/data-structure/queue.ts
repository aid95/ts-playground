import LinkedList from "./linked-list";

export default class Queue<T> {
  private list: LinkedList<T>;

  constructor() {
    this.list = new LinkedList<T>();
  }

  pushFront(value: T) {
    this.list.addFront(value);
  }

  pushBack(value: T) {
    this.list.add(value);
  }

  size(): number {
    return this.list.size();
  }

  popFront(): T {
    return this.list.removeFront();
  }

  popBack(): T {
    return this.list.remove();
  }

  peekFront(): T {
    return this.list.peekFront();
  }

  peekBack(): T {
    return this.list.peekBack();
  }
}

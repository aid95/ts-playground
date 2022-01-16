import Queue from "../queue";

describe("Queue", function () {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it("push front", () => {
    queue.pushFront(10);
    expect(queue.size()).toBe(1);
  });

  it("push back", () => {
    queue.pushBack(10);
    expect(queue.size()).toBe(1);
  });

  it("pop front", () => {
    queue.pushBack(10);
    queue.pushBack(20);
    expect(queue.popFront()).toBe(10);
    expect(queue.size()).toBe(1);
  });

  it("pop back", () => {
    queue.pushBack(10);
    queue.pushBack(20);
    expect(queue.popBack()).toBe(20);
    expect(queue.size()).toBe(1);
  });

  it("peek front", () => {
    queue.pushBack(100);
    queue.pushBack(200);
    expect(queue.peekFront()).toBe(100);
    expect(queue.size()).toBe(2);
  });
  it("peek back", () => {
    queue.pushBack(100);
    queue.pushBack(200);
    expect(queue.peekBack()).toBe(200);
    expect(queue.size()).toBe(2);
  });
});

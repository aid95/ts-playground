import Stack from "../stack";

describe("Stack", function () {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
  });

  it("push", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.size()).toBe(2);
  });

  it("pop", () => {
    stack.push(100);
    expect(stack.pop()).toBe(100);
  });

  it("peek", () => {
    stack.push(10);
    stack.push(1000);
    expect(stack.peek()).toBe(1000);
    expect(stack.size()).toBe(2);
  });

  it("is empty", () => {
    stack.push(10);
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });
});

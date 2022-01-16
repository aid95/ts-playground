import LinkedList from "../linked-list";

describe("Linked list", function () {
  let ll: LinkedList<number>;

  beforeEach(() => {
    ll = new LinkedList<number>();
    ll.add(10);
    ll.add(30);
    ll.add(20);
    ll.add(40);
  });

  it("뒤에서 데이터 추가", () => {
    ll.add(60);
    expect(ll.indexOf(ll.size() - 1)).toBe(60);
  });

  it("앞에서 데이터 추가", () => {
    ll.addFront(50);
    expect(ll.indexOf(0)).toBe(50);
  });

  it("뒤에서 데이터 제거", () => {
    expect(ll.remove()).toBe(40);
  });

  it("앞에서 데이터 제거", () => {
    expect(ll.removeFront()).toBe(10);
  });

  it("중간에 데이터 추가", () => {
    ll.insert(2, 100);
    expect(ll.indexOf(2)).toBe(100);
  });

  it("peek head", () => {
    expect(ll.peekFront()).toBe(10);
  });
  it("peek tail", () => {
    expect(ll.peekBack()).toBe(40);
  });
});

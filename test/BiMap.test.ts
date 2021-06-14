import { BiMap } from "../src/BiMap";

describe("BiMap", () => {
  it("stores and deletes values and keys", () => {
    const map = new BiMap<string, number>();
    expect(map.size).toBe(0);
    map.set("q", 23);
    map.set("a", 42);
    expect(map.size).toBe(2);
    expect(map.hasKey("q")).toBe(true);
    expect(map.hasKey("a")).toBe(true);
    expect(map.hasKey("x")).toBe(false);
    expect(map.hasVal(23)).toBe(true);
    expect(map.hasVal(42)).toBe(true);
    expect(map.hasVal(66)).toBe(false);
    expect(map.getByKey("q")).toBe(23);
    expect(map.getByKey("a")).toBe(42);
    expect(map.getByKey("x")).toBe(undefined);
    expect(map.getByVal(23)).toBe("q");
    expect(map.getByVal(42)).toBe("a");
    expect(map.getByVal(66)).toBe(undefined);
    map.deleteByKey("q");
    expect(map.size).toBe(1);
    map.deleteByVal(42);
    expect(map.size).toBe(0);
  });

  it("initializes from an iterable", () => {
    const init = new Map([
      ["q", 23],
      ["a", 42],
    ]);
    const map = new BiMap(init);
    expect(map.size).toBe(2);
    expect(map.hasKey("q")).toBe(true);
    expect(map.hasKey("a")).toBe(true);
    expect(map.hasKey("x")).toBe(false);
    expect(map.hasVal(23)).toBe(true);
    expect(map.hasVal(42)).toBe(true);
    expect(map.hasVal(66)).toBe(false);
    expect(map.getByKey("q")).toBe(23);
    expect(map.getByKey("a")).toBe(42);
    expect(map.getByKey("x")).toBe(undefined);
    expect(map.getByVal(23)).toBe("q");
    expect(map.getByVal(42)).toBe("a");
    expect(map.getByVal(66)).toBe(undefined);
  });

  it("transforms into iterables", () => {
    const map = new BiMap([
      ["q", 23],
      ["a", 42],
    ]);
    expect(Array.from(map)).toEqual([
      ["q", 23],
      ["a", 42],
    ]);
    expect(Array.from(map.entries())).toEqual([
      ["q", 23],
      ["a", 42],
    ]);
    expect(Array.from(map.keys())).toEqual(["q", "a"]);
    expect(Array.from(map.values())).toEqual([23, 42]);
  });
});

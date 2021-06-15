import { UnsafeMap } from "../src/UnsafeMap";

describe("UnsafeMap", () => {
  it("stores and deletes values and keys", () => {
    const map = new UnsafeMap<string, number>();
    expect(map.size).toBe(0);
    map.set("q", 23);
    map.set("a", 42);
    expect(map.size).toBe(2);
    expect(map.has("q")).toBe(true);
    expect(map.has("x")).toBe(false);
    expect(map.get("a")).toBe(42);
    map.delete("a");
    expect(map.size).toBe(1);
  });

  it("throws when getting an undefined key", () => {
    const map = new UnsafeMap<string, number>();
    expect(()=> map.get("a")).toThrow();
  });

  it("initializes from an iterable and customizes the error factory", () => {
    const map = new UnsafeMap(
      [
        ["q", 23],
        ["a", 42],
      ],
      () => new Error("Fail!"),
    );
    expect(map.size).toBe(2);
    expect(()=> map.get("x")).toThrow("Fail!");
  });
});

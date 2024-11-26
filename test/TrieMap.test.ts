import { TrieMap } from "../src/TrieMap";

describe("TrieMap", () => {
  it("stores and retrieves values", () => {
    const map = new TrieMap<string, number>();
    map.set(["a"], 23);
    map.set(["a", "b", "c"], 42);
    map.set(["a", "b", "c", "d", "e"], 1337);
    expect(map.hasPrefix(["a"])).toBe(true);
    expect(map.hasPrefix(["a", "b"])).toBe(true);
    expect(map.hasPrefix(["a", "b", "c"])).toBe(true);
    expect(map.hasPrefix(["a", "b", "x"])).toBe(false);
    expect(map.hasPrefix(["a", "x", "c"])).toBe(false);
    expect(map.hasPrefix(["a", "b", "c", "d"])).toBe(true);
    expect(map.hasPrefix(["a", "b", "c", "d", "e"])).toBe(true);
    expect(map.hasPrefix(["a", "b", "c", "d", "e", "f"])).toBe(false);
    expect(map.hasPrefix(["a", "b", "c", "d", "e", "f", "g"])).toBe(false);
    expect(map.has(["a"])).toBe(true);
    expect(map.has(["a", "b"])).toBe(false);
    expect(map.has(["a", "b", "c"])).toBe(true);
    expect(map.has(["a", "b", "x"])).toBe(false);
    expect(map.has(["a", "x", "c"])).toBe(false);
    expect(map.has(["a", "b", "c", "d"])).toBe(false);
    expect(map.has(["a", "b", "c", "d", "e"])).toBe(true);
    expect(map.has(["a", "b", "c", "d", "e", "f"])).toBe(false);
    expect(map.has(["a", "b", "c", "d", "e", "f", "g"])).toBe(false);
    expect(map.get(["a"])).toBe(23);
    expect(map.get(["a", "b"])).toBe(undefined);
    expect(map.get(["a", "b", "c"])).toBe(42);
    expect(map.get(["a", "b", "x"])).toBe(undefined);
    expect(map.get(["a", "x", "c"])).toBe(undefined);
    expect(map.get(["a", "b", "c", "d"])).toBe(undefined);
    expect(map.get(["a", "b", "c", "d", "e"])).toBe(1337);
    expect(map.get(["a", "b", "c", "d", "e", "f"])).toBe(undefined);
    expect(map.get(["a", "b", "c", "d", "e", "f", "g"])).toBe(undefined);
    expect(Array.from(map)).toEqual([23, 42, 1337]);
  });

  it("initializes from entries", () => {
    const map = new TrieMap<string, number>([
      [["a"], 23],
      [["a", "b", "c"], 42],
      [["a", "b", "c", "d", "e"], 1337],
    ]);
    expect(map.hasPrefix(["a"])).toBe(true);
    expect(map.hasPrefix(["a", "b"])).toBe(true);
    expect(map.hasPrefix(["a", "b", "c"])).toBe(true);
    expect(map.hasPrefix(["a", "b", "x"])).toBe(false);
    expect(map.hasPrefix(["a", "x", "c"])).toBe(false);
    expect(map.hasPrefix(["a", "b", "c", "d"])).toBe(true);
    expect(map.hasPrefix(["a", "b", "c", "d", "e"])).toBe(true);
    expect(map.hasPrefix(["a", "b", "c", "d", "e", "f"])).toBe(false);
    expect(map.hasPrefix(["a", "b", "c", "d", "e", "f", "g"])).toBe(false);
    expect(map.has(["a"])).toBe(true);
    expect(map.has(["a", "b"])).toBe(false);
    expect(map.has(["a", "b", "c"])).toBe(true);
    expect(map.has(["a", "b", "x"])).toBe(false);
    expect(map.has(["a", "x", "c"])).toBe(false);
    expect(map.has(["a", "b", "c", "d"])).toBe(false);
    expect(map.has(["a", "b", "c", "d", "e"])).toBe(true);
    expect(map.has(["a", "b", "c", "d", "e", "f"])).toBe(false);
    expect(map.has(["a", "b", "c", "d", "e", "f", "g"])).toBe(false);
    expect(map.get(["a"])).toBe(23);
    expect(map.get(["a", "b"])).toBe(undefined);
    expect(map.get(["a", "b", "c"])).toBe(42);
    expect(map.get(["a", "b", "x"])).toBe(undefined);
    expect(map.get(["a", "x", "c"])).toBe(undefined);
    expect(map.get(["a", "b", "c", "d"])).toBe(undefined);
    expect(map.get(["a", "b", "c", "d", "e"])).toBe(1337);
    expect(map.get(["a", "b", "c", "d", "e", "f"])).toBe(undefined);
    expect(map.get(["a", "b", "c", "d", "e", "f", "g"])).toBe(undefined);
  });

  it("deletes values", () => {
    const map = new TrieMap<string, number>();
    map.set(["a"], 23);
    map.set(["a", "b", "c"], 42);
    map.set(["a", "b", "c", "d", "e"], 1337);
    expect(map.delete(["a", "b", "c"])).toBe(true);
    expect(map.delete(["a", "b"])).toBe(false);
    expect(map.delete(["x", "y", "z"])).toBe(false);
    expect(map.hasPrefix(["a"])).toBe(true);
    expect(map.hasPrefix(["a", "b"])).toBe(true);
    expect(map.hasPrefix(["a", "b", "c"])).toBe(true);
    expect(map.hasPrefix(["a", "b", "x"])).toBe(false);
    expect(map.hasPrefix(["a", "x", "c"])).toBe(false);
    expect(map.hasPrefix(["a", "b", "c", "d"])).toBe(true);
    expect(map.hasPrefix(["a", "b", "c", "d", "e"])).toBe(true);
    expect(map.hasPrefix(["a", "b", "c", "d", "e", "f"])).toBe(false);
    expect(map.hasPrefix(["a", "b", "c", "d", "e", "f", "g"])).toBe(false);
    expect(map.has(["a"])).toBe(true);
    expect(map.has(["a", "b"])).toBe(false);
    expect(map.has(["a", "b", "c"])).toBe(false);
    expect(map.has(["a", "b", "x"])).toBe(false);
    expect(map.has(["a", "x", "c"])).toBe(false);
    expect(map.has(["a", "b", "c", "d"])).toBe(false);
    expect(map.has(["a", "b", "c", "d", "e"])).toBe(true);
    expect(map.has(["a", "b", "c", "d", "e", "f"])).toBe(false);
    expect(map.has(["a", "b", "c", "d", "e", "f", "g"])).toBe(false);
    expect(map.get(["a"])).toBe(23);
    expect(map.get(["a", "b"])).toBe(undefined);
    expect(map.get(["a", "b", "c"])).toBe(undefined);
    expect(map.get(["a", "b", "x"])).toBe(undefined);
    expect(map.get(["a", "x", "c"])).toBe(undefined);
    expect(map.get(["a", "b", "c", "d"])).toBe(undefined);
    expect(map.get(["a", "b", "c", "d", "e"])).toBe(1337);
    expect(map.get(["a", "b", "c", "d", "e", "f"])).toBe(undefined);
    expect(map.get(["a", "b", "c", "d", "e", "f", "g"])).toBe(undefined);
  });

  it("prunes prefixes", () => {
    const map = new TrieMap<string, number>();
    map.set(["a"], 23);
    map.set(["a", "b", "c"], 42);
    map.set(["a", "b", "c", "d", "e"], 1337);
    expect(map.prune(["x", "y", "z"])).toBe(false);
    expect(map.prune(["a", "b"])).toBe(true);
    expect(map.hasPrefix(["a"])).toBe(true);
    expect(map.hasPrefix(["a", "b"])).toBe(false);
    expect(map.hasPrefix(["a", "b", "c"])).toBe(false);
    expect(map.hasPrefix(["a", "b", "x"])).toBe(false);
    expect(map.has(["a"])).toBe(true);
    expect(map.has(["a", "b"])).toBe(false);
    expect(map.has(["a", "b", "c"])).toBe(false);
    expect(map.has(["a", "b", "x"])).toBe(false);
    expect(map.has(["a", "x", "c"])).toBe(false);
    expect(map.get(["a"])).toBe(23);
    expect(map.get(["a", "b"])).toBe(undefined);
    expect(map.get(["a", "b", "c"])).toBe(undefined);
    expect(map.get(["a", "b", "x"])).toBe(undefined);
    expect(map.get(["a", "x", "c"])).toBe(undefined);
  });

  it("rejects non-primitives in prefixes", () => {
    const map = new TrieMap<any, any>();
    expect(() => map.set(["a", 1, []], 42)).toThrow();
    expect(() => new TrieMap<any, any>([[["a", 1, []], 42]])).toThrow();
  });

  it("resists JSONification", () => {
    const map = new TrieMap([[["a", "b"], 42]]);
    expect(() => JSON.stringify(map)).toThrow();
  });
});

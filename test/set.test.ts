import { addAll, isSet } from "../src/set";

describe("set", () => {
  describe("isSet()", () => {
    test("identifies maps", () => {
      expect(isSet(new Set())).toEqual(true);
      expect(isSet(new Map())).toEqual(false);
      expect(isSet(undefined)).toEqual(false);
      expect(isSet("test")).toEqual(false);
    });
  });

  describe("addAll()", () => {
    test("adds multiple values at once", () => {
      const set = new Set();
      addAll(set, [3.14, 23, 42, 1337]);
      expect(set.has(3.14)).toEqual(true);
      expect(set.has(23)).toEqual(true);
      expect(set.has(42)).toEqual(true);
      expect(set.has(1337)).toEqual(true);
    });
  });
});

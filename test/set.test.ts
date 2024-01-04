import { addAll } from "../src/set";

describe("set", () => {
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

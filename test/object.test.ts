import { omitted } from "../src/object";

describe("object", () => {
  describe("omitted()", () => {
    test("creates new objects minus some keys", () => {
      const input = { a: 0, b: 1, c: 2, d: 3 };
      const a = omitted(input, "a");
      expect(a).toEqual({ b: 1, c: 2, d: 3 });
      expect(a).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
      const b = omitted(input, "b", "c");
      expect(b).toEqual({ a: 0, d: 3 });
      expect(b).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
      const c = omitted(input, "a", "b", "c", "d");
      expect(c).toEqual({});
      expect(c).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
    });
  });
});

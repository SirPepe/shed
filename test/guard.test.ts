import { is, isNot } from "../src/guard";

describe("guard", () => {
  describe("is()", () => {
    test("verifies that a value is not nullish", () => {
      expect(is(42)).toBe(true);
      expect(is("")).toBe(true);
      expect(is(null)).toBe(false);
      expect(is(undefined)).toBe(false);
    });
  });

  describe("isNot()", () => {
    test("verifies that a value is nullish", () => {
      expect(isNot(42)).toBe(false);
      expect(isNot("")).toBe(false);
      expect(isNot(null)).toBe(true);
      expect(isNot(undefined)).toBe(true);
    });
  });
});

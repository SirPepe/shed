import { assertIs, assertIsNot } from "../src/assert";

describe("assert", () => {
  describe("assertIs()", () => {
    test("asserts that a value is not nullish", () => {
      expect(() => assertIs(42)).not.toThrow();
      expect(() => assertIs("")).not.toThrow();
      expect(() => assertIs(null)).toThrow();
      expect(() => assertIs(undefined)).toThrow();
    });
  });
  describe("partition()", () => {
    test("asserts that a value is nullish", () => {
      expect(() => assertIsNot(42)).toThrow();
      expect(() => assertIsNot("")).toThrow();
      expect(() => assertIsNot(null)).not.toThrow();
      expect(() => assertIsNot(undefined)).not.toThrow();
    });
  });
});

import { assertIs, assertIsNot, assertIsPrimitive } from "../src/assert";

describe("assert", () => {
  describe("assertIs()", () => {
    test("asserts that a value is not nullish", () => {
      expect(() => assertIs(42)).not.toThrow();
      expect(() => assertIs("")).not.toThrow();
      expect(() => assertIs(null)).toThrow();
      expect(() => assertIs(undefined)).toThrow();
    });
  });

  describe("assertIsNot()", () => {
    test("asserts that a value is nullish", () => {
      expect(() => assertIsNot(42)).toThrow();
      expect(() => assertIsNot("")).toThrow();
      expect(() => assertIsNot(null)).not.toThrow();
      expect(() => assertIsNot(undefined)).not.toThrow();
    });
  });

  describe("assertPrimitive()", () => {
    test("asserts that a value is a primitive", () => {
      expect(() => assertIsPrimitive(42)).not.toThrow();
      expect(() => assertIsPrimitive(null)).not.toThrow();
      expect(() => assertIsPrimitive(Symbol())).not.toThrow();
      expect(() => assertIsPrimitive([])).toThrow();
      expect(() => assertIsPrimitive(new String())).toThrow();
      expect(() => assertIsPrimitive(function () {})).toThrow();
    });
  });
});

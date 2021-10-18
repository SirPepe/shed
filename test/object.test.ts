import { omitted, omitter, picked, picker, where, select } from "../src/object";

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

  describe("omitter()", () => {
    test("creates a function that returns new objects minus some keys", () => {
      const input = { a: 0, b: 1, c: 2, d: 3 };
      const a = omitter<typeof input, keyof typeof input>("a")(input);
      expect(a).toEqual({ b: 1, c: 2, d: 3 });
      expect(a).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
      const b = omitter<typeof input, keyof typeof input>("b", "c")(input);
      expect(b).toEqual({ a: 0, d: 3 });
      expect(b).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
      const c = omitter<typeof input, keyof typeof input>(
        "a",
        "b",
        "c",
        "d"
      )(input);
      expect(c).toEqual({});
      expect(c).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
    });
  });

  describe("picked()", () => {
    test("creates new objects containing only some keys", () => {
      const input = { a: 0, b: 1, c: 2, d: 3 };
      const a = picked(input, "a");
      expect(a).toEqual({ a: 0 });
      expect(a).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
      const b = picked(input, "b", "c");
      expect(b).toEqual({ b: 1, c: 2 });
      expect(b).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
      const c = picked(input, "a", "b", "c", "d");
      expect(c).toEqual(input);
      expect(c).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
      const d = picked(input);
      expect(d).toEqual({});
      expect(d).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
    });
  });

  describe("picker()", () => {
    test("creates a function that returns new objects containing only some keys", () => {
      const input = { a: 0, b: 1, c: 2, d: 3 };
      const a = picker<typeof input, keyof typeof input>("a")(input);
      expect(a).toEqual({ a: 0 });
      expect(a).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
      const b = picker<typeof input, keyof typeof input>("b", "c")(input);
      expect(b).toEqual({ b: 1, c: 2 });
      expect(b).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
      const c = picker<typeof input, keyof typeof input>(
        "a",
        "b",
        "c",
        "d"
      )(input);
      expect(c).toEqual(input);
      expect(c).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
      const d = picker<typeof input, keyof typeof input>()(input);
      expect(d).toEqual({});
      expect(d).not.toBe(input);
      expect(input).toEqual({ a: 0, b: 1, c: 2, d: 3 });
    });
  });

  describe("where()", () => {
    test("creates a predicate function", () => {
      const input = [{ a: 0 }, { a: 1 }, { a: 2 }];
      expect(input.map(where("a", 1))).toEqual([false, true, false]);
    });
  });

  describe("select()", () => {
    test("creates a getter function", () => {
      const input = [{ a: 0 }, { a: 1 }, { a: 2 }];
      expect(input.map(select("a"))).toEqual([0, 1, 2]);
    });
  });
});

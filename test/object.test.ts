import {
  omitted,
  omitter,
  picked,
  picker,
  where,
  select,
  whereNot,
  getPath,
  setPath,
} from "../src/object";

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
        "d",
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
        "d",
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

  describe("whereNot()", () => {
    test("creates a predicate function", () => {
      const input = [{ a: 0 }, { a: 1 }, { a: 2 }];
      expect(input.map(whereNot("a", 1))).toEqual([true, false, true]);
    });
  });

  describe("select()", () => {
    test("creates a getter function", () => {
      const input = [{ a: 0 }, { a: 1 }, { a: 2 }];
      expect(input.map(select("a"))).toEqual([0, 1, 2]);
    });
  });

  describe("getPath()", () => {
    test("reads from paths", () => {
      const input = {
        foo: {
          bar: {
            baz: [
              23,
              42,
              {
                value: 1337,
              },
            ],
          },
        },
      } as const;
      expect(getPath(input, ".")).toEqual(input);
      expect(getPath(input, "foo")).toEqual(input.foo);
      expect(getPath(input, "foo.bar")).toEqual(input.foo.bar);
      expect(getPath(input, "foo.bar.baz")).toEqual(input.foo.bar.baz);
      expect(getPath(input, "foo.bar.baz.0")).toEqual(input.foo.bar.baz[0]);
      expect(getPath(input, "foo.bar.baz.1")).toEqual(input.foo.bar.baz[1]);
      expect(getPath(input, "foo.bar.baz.2")).toEqual(input.foo.bar.baz[2]);
      expect(getPath(input, "foo.bar.baz.2.value")).toEqual(
        input.foo.bar.baz[2].value,
      );
    });

    test("returns undefined when the path points to nothing", () => {
      const input = {
        foo: null,
        bar: undefined,
        baz: 42,
      };
      expect(getPath(input, "asdf")).toEqual(undefined);
      expect(getPath(input, "asdf.nope")).toEqual(undefined);
      expect(getPath(input, "foo")).toEqual(null);
      expect(getPath(input, "foo.nope")).toEqual(undefined);
      expect(getPath(input, "bar")).toEqual(undefined);
      expect(getPath(input, "bar.nope")).toEqual(undefined);
      expect(getPath(input, "baz")).toEqual(42);
      expect(getPath(input, "baz.toString")).toEqual(Number.prototype.toString);
      expect(getPath(input, "baz.toString.nope")).toEqual(undefined);
    });
  });

  describe("setPath()", () => {
    test("sets with paths", () => {
      const input: any = { foo: {} };
      setPath(input, "foo", { x: 42 });
      expect(input.foo).toEqual({ x: 42 });
      setPath(input, "foo.bar", 42);
      expect(input.foo).toEqual({ x: 42, bar: 42 });
      setPath(input, "foo.nope.nope.nope", 42);
      expect(input.foo).toEqual({ x: 42, bar: 42 });
    });

    test("sets the root", () => {
      const input: any = { foo: {} };
      setPath(input, ".", { bar: { x: 42 } });
      expect(input).toEqual({ foo: {}, bar: { x: 42 } });
    });
  });
});

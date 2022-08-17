import { move, moved, range } from "../src/array";

describe("array", () => {
  describe("range()", () => {
    test("one argument", () => {
      expect(range(0)).toEqual([0]);
      expect(range(5)).toEqual([0, 1, 2, 3, 4, 5]);
      expect(range(-3)).toEqual([-3, -2, -1, 0]);
    });
    test("two arguments", () => {
      expect(range(0, 0)).toEqual([0]);
      expect(range(2, 5)).toEqual([2, 3, 4, 5]);
      expect(range(5, 2)).toEqual([5, 4, 3, 2]);
      expect(range(-4, -2)).toEqual([-4, -3, -2]);
      expect(range(-2, -4)).toEqual([-2, -3, -4]);
    });
  });

  describe("move()", () => {
    test("re-arranges arrays in-place", () => {
      const input1 = [0, 1, 2, 3, 4];
      const a = move(input1, 1, 3);
      expect(a).toEqual([0, 2, 3, 1, 4]);
      expect(a).toBe(input1);
      const input2 = [0, 1, 2, 3, 4];
      const b = move(input2, 1, 0);
      expect(b).toEqual([1, 0, 2, 3, 4]);
      expect(b).toBe(input2);
      const input3 = [0, 1, 2, 3, 4];
      const c = move(input3, 1, 0);
      expect(c).toEqual([1, 0, 2, 3, 4]);
      expect(c).toBe(input3);
    });

    test("handles negative source indices", () => {
      const input = [0, 1, 2, 3, 4];
      const a = move(input, -1, 1);
      expect(a).toEqual([0, 4, 1, 2, 3]);
      expect(a).toBe(input);
    });

    test("handles negative target indices", () => {
      const input = [0, 1, 2, 3, 4];
      const a = move(input, 1, -10);
      expect(a).toEqual([1, 0, 2, 3, 4]);
      expect(a).toBe(input);
    });

    test("handles out-of-bound indices", () => {
      const input = [0, 1, 2, 3, 4];
      const a = move(input, 1, 10);
      expect(a).toEqual([0, 2, 3, 4, 1]);
      expect(a).toBe(input);
    });
  });

  describe("moved()", () => {
    test("creates new, re-arranged arrays", () => {
      const input = [0, 1, 2, 3, 4];
      const a = moved(input, 1, 3);
      expect(a).toEqual([0, 2, 3, 1, 4]);
      expect(a).not.toBe(input);
      expect(input).toEqual([0, 1, 2, 3, 4]);
      const b = moved(input, 1, 0);
      expect(b).toEqual([1, 0, 2, 3, 4]);
      expect(b).not.toBe(input);
      expect(input).toEqual([0, 1, 2, 3, 4]);
      const c = moved(input, 1, 0);
      expect(c).toEqual([1, 0, 2, 3, 4]);
      expect(c).not.toBe(input);
      expect(input).toEqual([0, 1, 2, 3, 4]);
    });

    test("handles negative source indices", () => {
      const input = [0, 1, 2, 3, 4];
      const a = moved(input, -1, 1);
      expect(a).toEqual([0, 4, 1, 2, 3]);
      expect(a).not.toBe(input);
    });

    test("handles negative target indices", () => {
      const input = [0, 1, 2, 3, 4];
      const a = moved(input, 1, -10);
      expect(a).toEqual([1, 0, 2, 3, 4]);
      expect(a).not.toBe(input);
    });

    test("handles out-of-bound indices", () => {
      const input = [0, 1, 2, 3, 4];
      const a = moved(input, 1, 10);
      expect(a).toEqual([0, 2, 3, 4, 1]);
      expect(a).not.toBe(input);
    });
  });
});

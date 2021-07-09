import { move, moved } from "../src/array";

describe("array", () => {
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
  });
});

import { isReal } from "../src/number";

describe("Number", () => {
  describe("isReal()", () => {
    it("identifies real numbers", () => {
      expect(isReal(1)).toBe(true);
      expect(isReal(1.2)).toBe(true);
      expect(isReal(-1)).toBe(true);
      expect(isReal(-1.2)).toBe(true);
      expect(isReal(1n)).toBe(true);
      expect(isReal(-7n)).toBe(true);
      expect(isReal(NaN)).toBe(false);
      expect(isReal(Infinity)).toBe(false);
      expect(isReal(-Infinity)).toBe(false);
      expect(isReal("")).toBe(false);
      expect(isReal("7")).toBe(false);
      expect(isReal(true)).toBe(false);
      expect(isReal({ foo: 42 })).toBe(false);
    });
  });
});

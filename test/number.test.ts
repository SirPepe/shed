import { isReal, roundFloat } from "../src/number";

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

  describe("roundFloats()", () => {
    it("rounds to n decimal places", () => {
      expect(roundFloat(1, 0)).toBe(1);
      expect(roundFloat(1, 2)).toBe(1);
      expect(roundFloat(1.555, 2)).toBe(1.56);
      expect(roundFloat(1.005, 2)).toBe(1.01);
      expect(roundFloat(1.005, 2)).toBe(1.01);
      expect(roundFloat(2 / 3, 4)).toBe(0.6667);
      expect(roundFloat(2 / 3, 0)).toBe(1);
    });
  });
});

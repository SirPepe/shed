import { ceilFloat, floorFloat, isReal, roundFloat } from "../src/number";

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

  describe("roundFloat()", () => {
    it("rounds to n decimal places", () => {
      expect(roundFloat(1, 0)).toBe(1);
      expect(roundFloat(1, 2)).toBe(1);
      expect(roundFloat(1.541, 2)).toBe(1.54);
      expect(roundFloat(1.549, 2)).toBe(1.55);
      expect(roundFloat(1.555, 2)).toBe(1.56);
      expect(roundFloat(1.005, 2)).toBe(1.01);
      expect(roundFloat(2 / 3, 4)).toBe(0.6667);
      expect(roundFloat(2 / 3, 0)).toBe(1);
    });
  });

  describe("ceilFloat()", () => {
    it("rounds up to n decimal places", () => {
      expect(ceilFloat(1, 0)).toBe(1);
      expect(ceilFloat(1, 2)).toBe(1);
      expect(ceilFloat(1.541, 2)).toBe(1.55);
      expect(ceilFloat(1.549, 2)).toBe(1.55);
      expect(ceilFloat(1.555, 2)).toBe(1.56);
      expect(ceilFloat(1.005, 2)).toBe(1.01);
      expect(ceilFloat(2 / 3, 4)).toBe(0.6667);
      expect(ceilFloat(2 / 3, 0)).toBe(1);
    });
  });

  describe("floorFloat()", () => {
    it("rounds up to n decimal places", () => {
      expect(floorFloat(1, 0)).toBe(1);
      expect(floorFloat(1, 2)).toBe(1);
      expect(floorFloat(1.541, 2)).toBe(1.54);
      expect(floorFloat(1.549, 2)).toBe(1.54);
      expect(floorFloat(1.555, 2)).toBe(1.55);
      expect(floorFloat(1.005, 2)).toBe(1);
      expect(floorFloat(2 / 3, 4)).toBe(0.6666);
      expect(floorFloat(2 / 3, 0)).toBe(0);
    });
  });
});

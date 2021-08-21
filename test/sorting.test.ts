import { asc, desc } from "../src/sorting";

describe("sorting", () => {
  describe("asc()", () => {
    test("sorting input", () => {
      expect([1, 12, 0, 10, 2].sort(asc)).toEqual([0, 1, 2, 10, 12]);
    });
  });

  describe("desc()", () => {
    test("sorting input", () => {
      expect([1n, 12n, 0n, 10n, 2n].sort(desc)).toEqual([12n, 10n, 2n, 1n, 0n]);
    });
  });
});

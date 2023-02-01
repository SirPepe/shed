import { lowercaseFirst, uppercaseFirst, length } from "../src/string";

describe("String", () => {
  describe("capitalizeFirst()", () => {
    it("capitalizes the first letter", () => {
      expect(uppercaseFirst("abc")).toBe("Abc");
      expect(uppercaseFirst("вба")).toBe("Вба");
    });
  });

  describe("lowercaseFirst()", () => {
    it("lowercases the first letter", () => {
      expect(lowercaseFirst("ABC")).toBe("aBC");
      expect(lowercaseFirst("Вба")).toBe("вба");
    });
  });

  describe("length()", () => {
    it("calculates string length", () => {
      expect(length("ABC", 2)).toBe(3);
      expect(length("A B C ", 2)).toBe(6);
      expect(length("AB\tC", 2)).toBe(5);
      expect(length("A B\tC", 4)).toBe(8);
      expect(length("Вба", 2)).toBe(3);
      expect(length("Hello\n🤡", 2)).toBe(7);
    });
  });
});

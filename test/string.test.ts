import { lowercaseFirst, uppercaseFirst } from "../src/string";

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
});

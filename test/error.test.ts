import { fail } from "../src/error";

describe("error", () => {
  describe("fail()", () => {
    test("throw errors", () => {
      expect(() => fail("Oops")).toThrow("Oops");
    });
  });
});

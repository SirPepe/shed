import { fail } from "../src/error";

describe("error", () => {
  describe("fail()", () => {
    test("throw errors", () => {
      expect(() => fail("Oops")).toThrow("Oops");
      expect(() => fail("Oops")).toThrow(Error);
    });
    test("throw errors with specific constructors", () => {
      expect(() => fail("Oops", { ErrorConstructor: TypeError })).toThrow(
        "Oops"
      );
      expect(() => fail("Oops", { ErrorConstructor: TypeError })).toThrow(
        TypeError
      );
    });
  });
});

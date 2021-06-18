import { noop, identity } from "../src/function";

describe("function", () => {
  describe("noop()", () => {
    test("works, does nothing", () => {
      expect(noop(42)).toBe(undefined);
    });
  });

  describe("identity()", () => {
    test("returns its input", () => {
      expect(identity("Hello")).toBe("Hello");
      expect(identity(42)).toBe(42);
    });
  });
});

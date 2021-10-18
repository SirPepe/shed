import { isSet } from "../src/set";

describe("set", () => {
  describe("isSet()", () => {
    test("identifies maps", () => {
      expect(isSet(new Set())).toEqual(true);
      expect(isSet(new Map())).toEqual(false);
      expect(isSet(undefined)).toEqual(false);
      expect(isSet("test")).toEqual(false);
    });
  });
});

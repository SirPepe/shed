import { isMap } from "../src/map";

describe("map", () => {
  describe("isMap()", () => {
    test("identifies maps", () => {
      expect(isMap(new Map())).toEqual(true);
      expect(isMap(new Set())).toEqual(false);
      expect(isMap(undefined)).toEqual(false);
      expect(isMap("test")).toEqual(false);
    });
  });
});

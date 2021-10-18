import * as FRDY from "../src/FRDY";

describe("FRDY", () => {
  describe("stringify()", () => {
    test("stringifies primitives", () => {
      expect(FRDY.stringify(1)).toEqual("1");
      expect(FRDY.stringify("a")).toEqual(`"a"`);
      expect(FRDY.stringify(true)).toEqual("true");
    });

    test("stringifies maps", () => {
      expect(JSON.parse(FRDY.stringify(new Map([["foo", 23], ["bar", 42]]))))
        .toEqual({
          "@@__frdy_reviver": 0,
          entries: [["foo", 23], ["bar", 42]],
        });
    });

    test("stringifies nested maps", () => {
      expect(JSON.parse(FRDY.stringify(
        new Map([
          ["foo", { values: new Map([[23, "foo23"], [42, "foo42"]]) }],
          ["bar", { values: new Map([[23, "bar23"], [42, "bar42"]]) }]
        ]))))
        .toEqual({
          "@@__frdy_reviver": 0,
          entries: [
            ["foo", {
              values: {
                "@@__frdy_reviver": 0,
                entries: [[23, "foo23"], [42, "foo42"]],
              },
            }],
            ["bar", {
              values: {
                "@@__frdy_reviver": 0,
                entries: [[23, "bar23"], [42, "bar42"]],
              },
            }]
          ],
        });
    });
  });

  describe("parse()", () => {
    test("parses primitives", () => {
      expect(FRDY.parse(FRDY.stringify(1))).toEqual(1);
      expect(FRDY.parse(FRDY.stringify("a"))).toEqual("a");
      expect(FRDY.parse(FRDY.stringify(true))).toEqual(true);
    });
  });

  test("parses maps", () => {
    const value = new Map([["foo", 23], ["bar", 42]]);
    expect(FRDY.parse(FRDY.stringify(value))).toEqual(value);
  });

  test("parses nested maps", () => {
    const value = new Map([
      ["foo", { values: new Map([[23, "foo23"], [42, "foo42"]]) }],
      ["bar", { values: new Map([[23, "bar23"], [42, "bar42"]]) }]
    ]);
    expect(FRDY.parse(FRDY.stringify(value))).toEqual(value);
  });
});

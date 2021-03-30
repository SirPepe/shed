import { groupBy, partition } from "../src/iterable";

describe("array", () => {
  describe("groupBy()", () => {
    test("groups arrays of objects by a prop", () => {
      const input = [
        { x: 0, y: "a" },
        { x: 1, y: "b" },
        { x: 2, y: "a" },
        { x: 3, y: "c" },
        { x: 4, y: "b" },
        { x: 5, y: "b" },
      ];
      const expected: Array<[string, Array<{ x: number; y: string }>]> = [
        ["a", [input[0], input[2]]],
        ["b", [input[1], input[4], input[5]]],
        ["c", [input[3]]],
      ];
      const actual = groupBy(input, "y");
      expect(actual).toEqual(new Map(expected));
    });

    it("groups arrays of objects by a selector function's return type", () => {
      const input = [
        { x: 0, y: "a" },
        { x: 1, y: "b" },
        { x: 2, y: "a" },
        { x: 3, y: "c" },
        { x: 4, y: "b" },
        { x: 5, y: "b" },
      ];
      const expected: Array<[number, Array<{ x: number; y: string }>]> = [
        [97, [input[0], input[2]]],
        [98, [input[1], input[4], input[5]]],
        [99, [input[3]]],
      ];
      const actual = groupBy(input, (value) => value.y.charCodeAt(0));
      expect(actual).toEqual(new Map(expected));
    });
  });

  describe("partition()", () => {
    it("partitions arrays of objects", () => {
      const input = [
        { x: 0, y: "a" },
        { x: 1, y: "b" },
        { x: 2, y: "a" },
        { x: 3, y: "c" },
        { x: 4, y: "b" },
        { x: 5, y: "b" },
      ];
      const expected = [
        [input[0], input[2], input[4]],
        [input[1], input[3], input[5]],
      ];
      const actual = partition(input, (item) => item.x % 2 === 0);
      expect(actual).toEqual(expected);
    });

    it("partitions arrays of disparate types", () => {
      const input = ["a", 0, "b", 1];
      const expected = [
        ["a", "b"],
        [0, 1],
      ];
      const actual = partition<string, number>(
        input,
        (item): item is string => typeof item === "string"
      );
      expect(actual).toEqual(expected);
    });
  });
});

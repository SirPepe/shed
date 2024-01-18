import { SortedArray } from "../src/SortedArray";

describe("SortedArray", () => {
  test("with primitive types", () => {
    const s = new SortedArray([3, 1, 2, 4, 0, 5], (a: number, b: number) =>
      a === b ? 0 : a > b ? 1 : -1,
    );
    expect(s.toArray()).toEqual([0, 1, 2, 3, 4, 5]);
    s.insert(1.5);
    expect(s.toArray()).toEqual([0, 1, 1.5, 2, 3, 4, 5]);
    s.remove(5);
    expect(s.toArray()).toEqual([0, 1, 1.5, 2, 3, 4]);
  });

  test("with non-array iterables as initial input", () => {
    const s = new SortedArray(
      new Set([3, 1, 2, 4, 0, 5]),
      (a: number, b: number) => (a === b ? 0 : a > b ? 1 : -1),
    );
    expect(s.toArray()).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test("with objects", () => {
    const source = [
      { value: 3 },
      { value: 1 },
      { value: 2 },
      { value: 4 },
      { value: 0 },
      { value: 5 },
    ];
    const s = new SortedArray(source, (a, b) =>
      a.value === b.value ? 0 : a.value > b.value ? 1 : -1,
    );
    expect(s.toArray()).toEqual([
      source[4],
      source[1],
      source[2],
      source[0],
      source[3],
      source[5],
    ]);
  });

  test("insert() with objects", () => {
    const source = [
      { value: 1 },
      { value: 2 },
      { value: 4 },
      { value: 0 },
      { value: 5 },
    ];
    const s = new SortedArray(source, (a, b) =>
      a.value === b.value ? 0 : a.value > b.value ? 1 : -1,
    );
    s.insert({ value: 3 });
    expect(s.toArray()).toEqual([
      source[3],
      source[0],
      source[1],
      expect.objectContaining({ value: 3 }),
      source[2],
      source[4],
    ]);
  });

  test("insertAll() with multiple objects", () => {
    const source = [{ value: 2 }, { value: 5 }, { value: 4 }];
    const s = new SortedArray(source, (a, b) =>
      a.value === b.value ? 0 : a.value > b.value ? 1 : -1,
    );
    s.insertAll({ value: 0 }, { value: 3 }, { value: 1 });
    expect(s.toArray()).toEqual([
      expect.objectContaining({ value: 0 }),
      expect.objectContaining({ value: 1 }),
      source[0],
      expect.objectContaining({ value: 3 }),
      source[2],
      source[1],
    ]);
  });

  test("at()", () => {
    const s = new SortedArray([3, 1, 2, 4, 0, 5], (a: number, b: number) =>
      a === b ? 0 : a > b ? 1 : -1,
    );
    expect(s.at(0)).toEqual(0);
    expect(s.at(-1)).toEqual(5);
    expect(s.at(2)).toEqual(2);
  });
});

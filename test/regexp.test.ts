import { escapeRegExpString, isRegExp } from "../src/regexp";

describe("regexp", () => {
  describe("isRegExp()", () => {
    test("returns true for regular expression objects", () => {
      expect(isRegExp(/abc/)).toBe(true);
      expect(isRegExp(new RegExp("abc"))).toBe(true);
    });

    test("returns true for strings containing regular expressions", () => {
      expect(isRegExp("")).toBe(true);
      expect(isRegExp("abc")).toBe(true);
      expect(isRegExp("[a-z][0-9].*")).toBe(true);
    });

    test("returns false for strings containing invalid regular expressions", () => {
      expect(isRegExp("\\")).toBe(false);
      expect(isRegExp("][")).toBe(false);
    });

    test("returns false for anything else", () => {
      expect(isRegExp(42)).toBe(false);
      expect(isRegExp([])).toBe(false);
      expect(isRegExp(null)).toBe(false);
      expect(isRegExp(undefined)).toBe(false);
    });
  });

  describe("escapeRegExpString()", () => {
    test("escapes characters in the string", () => {
      expect(escapeRegExpString("\\ ^ $ * + ? . ( ) | { } [ ]")).toBe(
        "\\\\ \\^ \\$ \\* \\+ \\? \\. \\( \\) \\| \\{ \\} \\[ \\]",
      );
    });

    test("escapes `-` in a PCRE-compatibly way", () => {
      expect(escapeRegExpString("foo - bar")).toBe("foo \\x2d bar");
    });

    test("escapes `-` in a way compatible with the unicode flag", () => {
      expect("-".match(new RegExp(escapeRegExpString("-"), "u"))).toBeTruthy();
    });
  });
});

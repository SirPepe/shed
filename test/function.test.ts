/**
 * @jest-environment jsdom
 */

import { noop, identity, debounce, debounceRaf } from "../src/function";
import { jest } from "@jest/globals";

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

  describe("debounceRaf()", () => {
    test("debounces function calls via RAF", (done) => {
      const test = jest.fn();
      const debounced = debounceRaf(test);
      debounced();
      debounced();
      debounced();
      expect(test.mock.calls.length).toBe(0);
      requestAnimationFrame(() => {
        expect(test.mock.calls.length).toBe(1);
        done();
      });
    });
  });

  describe("debounce()", () => {
    test("debounces function calls via timeouts", (done) => {
      const test = jest.fn();
      const debounced = debounce(test, 200);
      debounced();
      debounced();
      debounced();
      expect(test.mock.calls.length).toBe(0);
      setTimeout(() => {
        expect(test.mock.calls.length).toBe(1);
        done();
      }, 250);
    });
  });
});

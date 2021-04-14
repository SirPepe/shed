/**
 * Throws an exceptions when the first argument is null or undefined. Works
 * as a type assertion in TypeScript. The inverse of `assertIsNot()`.
 *
 * Example:
 *
 * ```typescript
 * assertIs(42, "Oops"); // nothing happens
 * assertIs(null, , "Oops"); // Error: "Oops"
 * ```
 */
export function assertIs<T>(
  x: T | undefined | null,
  msg = `Expected value to be defined, but found ${x}`
): asserts x is T {
  if (!x) {
    throw new Error(msg);
  }
}

/**
 * Throws an exceptions when the first argument is not null or undefined. Works
 * as a type assertion in TypeScript. The inverse of `assertIs()`.
 *
 * Example:
 *
 * ```typescript
 * assertIsNot(null, , "Oops"); // nothing happens
 * assertIsNot(42, "Oops"); // Error: "Oops"
 * ```
 */
export function assertIsNot<T>(
  x: T | undefined | null,
  msg = `Expected value to be null or undefined, but found ${typeof x}`
): asserts x is undefined | null {
  if (x) {
    throw new Error(msg);
  }
}

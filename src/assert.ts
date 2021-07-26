/**
 * Collection of assert functions that not only throw errors at runtime, but
 * also work as assertions in TypeScript. Use this module by importing
 * `@sirpepe/shed/assert`.
 *
 * @module
 */

/**
 * Throws an exception when the first argument is null or undefined. The second
 * argument can be used to customize the exception, but is entirely optional.
 * This function works as a type assertion in TypeScript and is the inverse of
 * `assertIsNot()`.
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
  if (typeof x === "undefined" || x === null) {
    throw new Error(msg);
  }
}
/**
 * Throws an exception when the first argument is not null or undefined. The
 * second argument can be used to customize the exception, but is entirely
 * optional. This function works as a type assertion in TypeScript and is the
 * inverse of `assertIs()`.
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
  if (typeof x === "undefined" || x === null) {
    return;
  }
  throw new Error(msg);
}

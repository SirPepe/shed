/**
 * Returns true when the argument is neither null nor undefined. Works as a type
 * guard in TypeScript. The inverse of `isNot()`.
 *
 * Example:
 *
 * ```typescript
 * is(42); // true
 * is(0); // true
 * is(null); // false
 * is(undefined); // false
 * ```
 */
export function is<T>(x: T | undefined | null): x is T {
  if (typeof x === "undefined" || x === null) {
    return false;
  }
  return true;
}

/**
 * Returns true when the argument is null or undefined. Works as a type guard in
 * TypeScript. The inverse of `is()`.
 *
 * Example:
 *
 * ```typescript
 * isNot(42); // false
 * isNot(0); // false
 * isNot(null); // true
 * isNot(undefined); // true
 * ```
 */
export function isNot<T>(x: T | undefined | null): x is null | undefined {
  if (typeof x === "undefined" || x === null) {
    return true;
  }
  return false;
}

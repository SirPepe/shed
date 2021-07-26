/**
 * Utilities for working with arrays. Access this module by importing
 * `@sirpepe/shed/array`.
 *
 * @module
 */

/**
 * Moves an element from one position in an array to another position, operating
 * in-place. See `moved()` for an immutable variant of this function.
 *
 * Example:
 *
 * ```javascript
 * let input = [0, 1, 2, 3, 4];
 * move(input, 1, 3);
 * // input is now [0, 2, 3, 1, 4]
 * ```
 */
export function move<T>(arr: T[], from: number, to: number): T[] {
  arr.splice(to, 0, ...arr.splice(from, 1));
  return arr;
}

/**
 * Moves an element from one position in an array to another position, creating
 * a new array. See `move()` for a mutating variant of this function.
 *
 * Example:
 *
 * ```javascript
 * let input = [0, 1, 2, 3, 4];
 * output = moved(input, 1, 3);
 * // output is [0, 2, 3, 1, 4], input stays the same
 * ```
 */
export function moved<T>(arr: T[], from: number, to: number,): T[] {
  arr = arr.slice();
  arr.splice(to, 0, ...arr.splice(from, 1));
  return arr;
}

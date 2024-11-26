/**
 * Utilities for working with arrays. Access this module by importing from
 * `@sirpepe/shed/array`.
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
 *
 * Negative `from` indices pick an element from the end of the array. Indices
 * that out of bound are truncated to the nearest valid index - this function
 * will never yield a sparse array.
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
 *
 * Negative `from` indices pick an element from the end of the array. Indices
 * that out of bound are truncated to the nearest valid index - this function
 * will never yield a sparse array.
 */
export function moved<T>(arr: T[], from: number, to: number): T[] {
  arr = arr.slice();
  arr.splice(to, 0, ...arr.splice(from, 1));
  return arr;
}

/**
 * Returns an inclusive range of numbers. If one one argument is provided, the
 * range starts at 0 if the argument is positive. If the argument is negative,
 * the range ends at 0.
 */
export function range(from: number): number[];
export function range(from: number, to: number): number[];
export function range(from: number, to?: number): number[] {
  if (typeof to === "undefined") {
    if (from >= 0) {
      to = from;
      from = 0;
    } else {
      to = 0;
    }
  }
  const step = from < to ? 1 : -1;
  const result: number[] = [];
  // eslint-disable-next-line
  while (true) {
    result.push(from);
    if (from === to) {
      break;
    }
    from += step;
  }
  return result;
}

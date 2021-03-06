/**
 * Callback functions for use with Array.prototype.sort(). Use this module by
 * importing from `@sirpepe/shed/string` or `@sirpepe/shed`.
 *
 * @module
 */

/**
 * Callback for `sort()` to sort numeric input in ascending order.
 *
 * Example:
 *
 * ```javascript
 * [1, 12, 0, 10, 2].sort(asc);
 * // Result: [0, 1, 2, 10, 12];
 * ```
 */
export function asc<T extends number | bigint>(a: T, b: T): 1 | 0 | -1 {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}

/**
 * Callback for `sort()` to sort numeric input in descending order.
 *
 * Example:
 *
 * ```javascript
 * [1, 12, 0, 10, 2].sort(desc);
 * Result: [12, 10, 2, 1, 0];
 * ```
 */
export function desc<T extends number | bigint>(a: T, b: T): 1 | 0 | -1 {
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
}

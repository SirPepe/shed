/**
 * Utilities for numbers of all types. Use this module by importing from
 * `@sirpepe/shed/number` or `@sirpepe/shed`.
 *
 * @module
 */

/**
 * Returns `true` if `x` is a real number (ie finite and not NaN), be that a
 * BigInt or plain number.
 *
 * Examples:
 *
 * ```javascript
 * let yup1 = isReal(7); // true
 * let yup2 = isReal(-1n); // true
 * let nope1 = isReal(NaN); // false
 * let nope2 = isReal(Infinity); // false
 * let nope3 = isReal("Hello"); // false
 * ```
 */
export function isReal(x: unknown): boolean {
  if (typeof x === "number") {
    if (Number.isNaN(x)) {
      return false;
    }
    if (Number.isFinite(x)) {
      return true;
    }
    return false;
  }
  if (typeof x === "bigint") {
    return true;
  }
  return false;
}

/**
 * Round a float value to `digits` decimal places. Examples:
 *
 * ```javascript
 * roundFloat(1.555, 2); // > 1.56
 * roundFloat(1.005, 2); // 1.01
 * roundFloat(2 / 3, 4); // 0.6667
 * ```
*/
export function roundFloat(value: number, digits: number): number {
  const factor = 10 ** Math.round(digits);
  return Math.round((value + Number.EPSILON) * factor) / factor;
}


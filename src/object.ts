/**
 * Object utilities. Use this module by importing from `@sirpepe/shed/object`
 * or `@sirpepe/shed`.
 *
 * @module
 */

/**
 * Returns a new object created from the input object, but without the keys in
 * `toOmit`. Essentially the runtime-variant of TypeScript's `Omit<T, K>` type
 * and the inverse of `picked()`.
 */
export function omitted<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  ...toOmit: K[]
): Omit<T, K> {
  const keysToOmit: Set<any> = new Set(toOmit);
  const result: any = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!keysToOmit.has(key)) {
      result[key] = value;
    }
  }
  return result;
};

/**
 * Returns a function that returns a new object created from its input object,
 * but without the keys in `toOmit`. Essentially a factory function for
 * functions that call `omitted()`.
 */
export function omitter<T extends Record<string, unknown>, K extends keyof T>(
  ...toOmit: K[]
): (obj: T) => Omit<T, K> {
  const keysToOmit: Set<any> = new Set(toOmit);
  return function(obj: T): Omit<T, K> {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      if (!keysToOmit.has(key)) {
        result[key] = value;
      }
    }
    return result;
  }
};

/**
 * Returns a new object created from the input object, but with only the keys in
 * `toKeep`. Essentially the runtime-variant of TypeScript's `Pick<T, K>` type
 * and the inverse of `omitted()`.
 */
export function picked<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  ...toKeep: K[]
): Pick<T, K> {
  const result: any = {};
  for (const key of new Set(toKeep)) {
    result[key] = obj[key];
  }
  return result;
};

/**
 * Returns a function that returns a new object created from its input object,
 * but with only the keys in `toKeep`. Essentially a factory function for
 * functions that call `picked()`.
 */
export function picker<T extends Record<string, unknown>, K extends keyof T>(
  ...toKeep: K[]
): (obj: T) => Pick<T, K> {
  const keysToKeep = new Set(toKeep);
  return function(obj: T): Pick<T, K> {
    const result: any = {};
    for (const key of keysToKeep) {
      result[key] = obj[key];
    }
    return result;
  }
};

/**
 * Returns a predicate that checks if its input object's "prop" field contains a
 * value equal to "value".
 */
export function where<T, K extends keyof T>(
  prop: K,
  value: T[K]
): (obj: T) => boolean {
  return function comparator(obj: T) {
    return obj[prop] === value;
  };
}

/**
 * Returns a getter function that returns every object's "prop" value.
 */
export function select<T, K extends keyof T>(
  prop: K,
): (obj: T) => T[K] {
  return function getter(obj: T) {
    return obj[prop];
  };
}
